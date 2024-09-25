// @ts-nocheck

"use client"

import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

export const FunnelChart = () => {
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

  // Drop-offs at each stage
  const drop_offs = [0, 200, 200, 200, 50];

  // Calculate conversion rates for each stage
  const conversion_rates = user_flow.map(
    (users, i) => `${((users / user_flow[0]) * 100).toFixed(1)}%`
  );

  // Create the funnel chart
  const data = [
    {
      type: "funnel",
      y: touchpoints, // Labels for each stage
      x: user_flow, // Number of users at each stage
      textinfo: "value+percent previous+percent initial", // Display the value and percentage
      textposition: "inside",
      marker: {
        color: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
      },
    },
  ];

  // Set the layout of the funnel chart
  const layout = {
    title: "Customer Journey Funnel with Drop-offs",
    xaxis: { title: "Number of Users" },
    yaxis: {
      title: "Touchpoints",
      categoryorder: "total ascending",
    },
    font: { size: 10 },
  };

  // Display the funnel chart

  return (
    <div className="w-full h-full">
        <Plot data={data} layout={layout} />
    </div>
  )

};
