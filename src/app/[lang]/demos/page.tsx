"use client";

import React from 'react'
import CytoscapeComponent from 'react-cytoscapejs';

const Demos = () => {

  const elements = [
    { data: { id: "som", label: "Self-Organizing Maps", href: "/demos/som" } },
    { data: { id: "ea", label: "Evolutionary Algorithms" } },
    { data: { id: 'pso', label: 'Particle Swarm Opt.', href: "/demos/pso" } },//, position: { x: 0, y: 0 } },
    { data: { id: 'two', label: 'Node 2', href: 'http://cytoscape.org' } }, // position: { x: 100, y: 0 } },
    { data: { source: 'pso', target: 'two', label: 'Edge from Node1 to Node2' } },
    { data: { source: 'som', target: 'ea', label: 'Edge from Node1 to Node2' } },
    { data: { source: 'pso', target: 'som', label: 'Edge from Node1 to Node2' } }

  ];


  return (
    <div className='flex items-center justify-center h-full'>
      <CytoscapeComponent
        elements={elements}
        style={{ width: '600px', height: '600px' }}
        layout={{ name: 'grid' }}
        stylesheet={[{
          selector: "node",
          style: {
            "background-color": "black",
            "label": "data(label)"
          }
        },
        {
          selector: "edge",
          style: {
            "width": 3,
            "line-color": "black",
          }
        }
        ]}
        cy={
          (cy) => {
            cy.on('tap', 'node', function (evt) {

              window.open(evt.target.data().href);

              // const node = evt.target;
              // const data = node.data();
              // window.location.href
            })
            cy.on("mouseover", "node", function (evt) {

              // evt.target.data().label = "hello"

              // console.log()

              if (evt.target.data().label.includes('(hover)')) {
                return
              }
              cy.$id(evt.target.data().id).data({ label: evt.target.data().label + '(hover)' })

            })
          }} />
    </div>
  )
}

export default Demos