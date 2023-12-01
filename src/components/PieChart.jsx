import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data, width, height }) => {
  const chartRef = useRef();

  useEffect(() => {
    renderPieChart();
  }, [data, width, height]);

  const renderPieChart = () => {
    const svg = d3.select(chartRef.current);
    const radius = Math.min(width, height) / 2;

    const g = svg.append("g").attr("transform", `translate(${width / 2},${height / 2})`);

    const colorScale = d3.scaleOrdinal().range(d3.schemeCategory10);

    const pie = d3.pie().value(d => d.share);
    const arc = d3.arc().outerRadius(radius).innerRadius(0);

    const arcs = g
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", d => colorScale(d.data.name));

    const labelArc = d3.arc().outerRadius(radius - 20).innerRadius(0);

    arcs
      .append("text")
      .attr("transform", d => `translate(${labelArc.centroid(d)})`)
      .text(d => d.data.name)
      .style("font-family", "arial")
      .style("font-size", 20)
      .style("text-anchor", "middle") // Center the text within the arc
      .style("fill", "white") // Set text color to white
      .style("font-weight", "bold") // Set font weight to bold
      .attr("dy", "0.35em"); // Adjust vertical alignment for better positioning
  };

  return (
    <div className='mt-10 flex flex-col items-center justify-center'>
      <h2 className='text-xl mb-3'>Pie Chart</h2>
      <svg ref={chartRef} width={width} height={height}></svg>
    </div>
  );
};

export default PieChart;
