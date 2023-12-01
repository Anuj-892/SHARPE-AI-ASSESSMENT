import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DataTable = ({ data }) => {
  const tableRef = useRef();

  useEffect(() => {
    if (data.length > 0) {
      renderTable();
    }
  }, [data]);

  const renderTable = () => {
    const table = d3.select(tableRef.current);

    // Remove existing table content
    table.selectAll('*').remove();

    // Extract column names from the first data object
    const columns = Object.keys(data[0]);

    // Append the header row
    table
      .append('thead')
      .append('tr')
      .selectAll('th')
      .data(columns)
      .enter()
      .append('th')
      .text((column) => column);

    // Create a row for each object in the data
    const rows = table
      .append('tbody')
      .selectAll('tr')
      .data(data)
      .enter()
      .append('tr');

    // Create a cell in each row for each column
    rows
      .selectAll('td')
      .data((row) =>
        columns.map((column) => ({ column, value: row[column] }))
      )
      .enter()
      .append('td')
      .text((d) => d.value);
  };

  return (
    <div className='text-center'>
      <h2 className='text-xl mb-3'>Data Table</h2>
      <table ref={tableRef}></table>
    </div>
  );
};

export default DataTable;
