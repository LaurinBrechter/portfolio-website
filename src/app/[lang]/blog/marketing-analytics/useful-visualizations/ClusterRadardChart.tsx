// @ts-nocheck

"use client";

import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export default function ClusterRadarChart() {
  const categories = [
    "Average Age",
    "Purchase Frequency",
    "Order Value",
    "Loyalty Score",
  ];
  const segment_data = {
    "Segment A": [35, 5, 150, 80],
    "Segment B": [42, 3, 120, 90],
    "Segment C": [28, 7, 100, 70],
  };

  // Calculate mean and standard deviation for each category
  const segment_means = categories.map((_, i) => {
    const values = Object.values(segment_data).map((segment) => segment[i]);
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  });

  const segment_stds = categories.map((_, i) => {
    const values = Object.values(segment_data).map((segment) => segment[i]);
    const mean = segment_means[i];
    const variance =
      values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) /
      values.length;
    return Math.sqrt(variance);
  });

  // Standardize the segment data
  for (const segment in segment_data) {
    segment_data[segment] = segment_data[segment].map((value, i) => {
      return (value - segment_means[i]) / segment_stds[i];
    });
  }

  // Create radar chart
  const dataToPlot = [];

  for (const [segment, values] of Object.entries(segment_data)) {
    dataToPlot.push({
      type: "scatterpolar",
      r: values,
      theta: categories,
      fill: "toself",
      name: segment,
    });
  }

  // Update layout for better appearance
  const layout = {
    autosize: true,
    polar: {
      radialaxis: {
        visible: true,
        range: [-2, 2],
      },
    },
    showlegend: true,
    title: "Customer Segmentation Radar Chart",
    margin: {
      l: 20,
      r: 20,
      t: 50,
      b: 20,
    },
    // width: 800, // Increase width
    // height: 600, // Increase height
  };

  return (
    <div className="w-full h-full">
      <Plot
        data={dataToPlot}
        layout={layout}
        // config={{ responsive: true }}
        useResizeHandler
        className="w-full h-full"
      />
    </div>
  );
}
