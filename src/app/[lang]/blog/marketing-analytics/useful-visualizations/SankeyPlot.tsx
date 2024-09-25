// @ts-nocheck

"use client"

import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });


export const SankeyPlot = () => {
  // Define the touchpoints
  const touchpoints = [
    "Landing Page",
    "Product Page",
    "Cart",
    "Checkout",
    "Payment",
  ];

  // Number of users at each touchpoint (example data)
  const user_flow = [1000, 800, 600, 400, 350];
  const drop_offs = [0, 200, 200, 200, 50];

  // Create source and target lists for Sankey diagram
  const sources = [];
  const targets = [];
  const values = [];

  // Populate the sources, targets, and values for continued interactions
  for (let i = 0; i < touchpoints.length - 1; i++) {
    sources.push(i);
    targets.push(i + 1);
    values.push(user_flow[i + 1]);
  }

  // Populate the sources, targets, and values for drop-offs
  for (let i = 0; i < touchpoints.length - 1; i++) {
    sources.push(i);
    targets.push(touchpoints.length + i); // Drop-off nodes
    values.push(drop_offs[i + 1]);
  }

  // Create labels including drop-off labels
  const labels = touchpoints.concat(
    touchpoints.slice(0, -1).map((tp) => `Drop-off after ${tp}`)
  );

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
        source: sources,
        target: targets,
        value: values,
        color: Array(sources.length)
          .fill("rgba(31, 119, 180, 0.8)")
          .concat(Array(drop_offs.length).fill("rgba(255, 0, 0, 0.4)")),
      },
    },
  ];

  // Set the layout of the diagram
  const layout = {
    title: "Customer Journey with Drop-offs at Each Touchpoint",
    font: {
      size: 10,
    },
  };

  // Display the Sankey diagram
  return <div className="w-full h-full">
    <Plot data={data} layout={layout} />
  </div>;
};
