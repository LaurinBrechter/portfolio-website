// @ts-nocheck

"use client";

import dynamic from "next/dynamic";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

export const SankeyMulti = () => {
  // Define the touchpoints
  const start_points = ["Email Campaign", "Social Media Ad", "Organic Search"];
  const touchpoints = [
    "Landing Page",
    "Product Page",
    "Cart",
    "Checkout",
    "Payment",
  ];

  // Define the flows of users from each starting point through the touchpoints
  const user_flows = {
    "Email Campaign": [500, 400, 100, 50, 20],
    "Social Media Ad": [300, 200, 150, 100, 80],
    "Organic Search": [200, 150, 100, 70, 60],
  };

  // Drop-offs for each touchpoint
  const drop_offs = {
    "Landing Page": [50, 180, 20],
    "Product Page": [0, 0, 400],
    Cart: [30, 20, 10],
    Checkout: [20, 15, 5],
  };

  // Create source, target, values, and color for the Sankey diagram
  let sources = [];
  let targets = [];
  let values = [];
  let colors = [];
  const labels = [
    ...start_points,
    ...touchpoints,
    ...touchpoints.slice(0, -1).map((tp) => `Drop-off after ${tp}`),
  ];

  // Define colors for each source
  const source_colors = ["#1f77b4", "#ff7f0e", "#2ca02c"]; // Blue, Orange, Green

  // Map starting points to the first touchpoint
  start_points.forEach((start, i) => {
    sources.push(i); // Starting points as sources
    targets.push(start_points.length); // First touchpoint as target
    values.push(user_flows[start][0]);
    colors.push(source_colors[i]); // Assign color to the flow
  });

  // Map flows between touchpoints
  touchpoints.slice(0, -1).forEach((tp, i) => {
    start_points.forEach((start, j) => {
      sources.push(start_points.length + i); // Current touchpoint as source
      targets.push(start_points.length + i + 1); // Next touchpoint as target
      values.push(user_flows[start][i + 1]);
      colors.push(source_colors[j]); // Maintain the same color
    });
  });

  // Map drop-offs
  touchpoints.slice(0, -1).forEach((tp, i) => {
    start_points.forEach((start, j) => {
      sources.push(start_points.length + i); // Current touchpoint as source
      targets.push(start_points.length + touchpoints.length + i); // Drop-off as target
      values.push(drop_offs[tp][j]);
      colors.push("rgba(255, 0, 0, 0.4)"); // Drop-offs in semi-transparent red
    });
  });

  // Define the Sankey diagram
  const data = [
    {
      type: "sankey",
      orientation: "h",
      node: {
        pad: 15,
        thickness: 20,
        line: {
          color: "black",
          width: 0.5,
        },
        label: labels,
        color: "blue",
      },
      link: {
        source: sources, // Indices of the source nodes
        target: targets, // Indices of the target nodes
        value: values, // Number of users flowing between nodes
        color: colors, // Color for each flow
      },
    },
  ];

  // Set the layout of the diagram
  const layout = {
    autosize: true,
    title: "Multi-Source Customer Journey with Drop-offs",
    font: {
      size: 10,
    },
  };

  return (
    <div className="w-full h-full">
      <Plot
        data={data}
        layout={layout}
        useResizeHandler
        className="w-full h-full"
      />
    </div>
  );
};
