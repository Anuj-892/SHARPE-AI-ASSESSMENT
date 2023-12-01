import React, { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import PieChart from '../components/PieChart';

const Data = () => {
  const [posts, setPosts] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    let total = data.length;
    const filteredData = data.filter(post => post.userId === 1);
    let userPostsLength = filteredData.length;
    const newPieChartData = [
      { name: "Other's Posts", share: total - userPostsLength },
      { name: "1", share: userPostsLength }
    ];
    setPieChartData(newPieChartData);

    const modifiedPosts = filteredData.map(post => {
      const { userId, ...others } = post;
      return others;
    });
    setPosts(modifiedPosts);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {loading ? (
        'Loading....'
      ) : (
        <>
          <DataTable data={posts} />
          <PieChart data={pieChartData} width={300} height={300} />
        </>
      )}
    </div>
  );
};

export default Data;
