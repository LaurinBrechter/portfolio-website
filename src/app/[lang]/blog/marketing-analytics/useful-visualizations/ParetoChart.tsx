// @ts-nocheck

"use client";

import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function ParetoChart() {
  const data = {
    Channel: [
      "Email Marketing",
      "Social Media",
      "Paid Search",
      "Organic Search",
      "Referral",
      "Direct Traffic",
      "Affiliate Marketing",
      "Display Ads",
    ],
    Conversions: [500, 300, 150, 100, 50, 30, 20, 10],
  };

  // Create a DataFrame equivalent (manipulating arrays in JavaScript)
  let channels = data["Channel"];
  let conversions = data["Conversions"];

  // Sort the data by conversions in descending order
  let sortedData = channels
    .map((channel, i) => ({ channel, conversion: conversions[i] }))
    .sort((a, b) => b.conversion - a.conversion);

  channels = sortedData.map((item) => item.channel);
  conversions = sortedData.map((item) => item.conversion);

  // Calculate the cumulative percentage
  let cumulativeConversions = [];
  let cumulativeSum = 0;
  const totalConversions = conversions.reduce((sum, value) => sum + value, 0);
  conversions.forEach((value) => {
    cumulativeSum += value;
    cumulativeConversions.push((cumulativeSum / totalConversions) * 100);
  });

  // Plotting the Pareto chart using Plotly.js

  // Bar plot for conversions
  const barData = {
    x: channels,
    y: conversions,
    type: "bar",
    name: "Conversions",
    marker: {
      color: "blue",
    },
  };

  // Line plot for cumulative percentage
  const lineData = {
    x: channels,
    y: cumulativeConversions,
    type: "scatter",
    mode: "lines+markers",
    name: "Cumulative Percentage",
    marker: {
      color: "red",
      size: 8,
    },
    yaxis: "y2",
  };

  // Threshold line for 80%
  const thresholdLine = {
    type: "line",
    xref: "paper",
    x0: 0,
    x1: 1,
    y0: 80,
    y1: 80,
    yref: "y2",
    line: {
      color: "gray",
      width: 2,
      dash: "dash",
    },
  };

  // Define layout
  const layout = {
    autosize: true,
    title: "Pareto Chart of High-Performing Marketing Channels",
    xaxis: {
      title: "Marketing Channel",
      tickangle: 45,
    },
    yaxis: {
      title: "Number of Conversions",
    },
    yaxis2: {
      title: "Cumulative Percentage (%)",
      overlaying: "y",
      side: "right",
      range: [0, 100],
    },
    shapes: [thresholdLine],
  };

  // Plot the chart
  const chartData = [barData, lineData];

  return (
    <div className="w-full h-full">
      <Plot
        data={chartData}
        layout={layout}
        useResizeHandler
        className="w-full h-full"
      />
    </div>
  );
}
