"use client";

import CytoscapeComponent from "react-cytoscapejs";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const ContentGraph = (props: { graphData: any }) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full w-full border-t"
    >
      <ResizablePanel>
        <CytoscapeComponent
          elements={props.graphData}
          style={{ width: "100%", height: "100%" }}
          layout={{ name: "cose" }}
          stylesheet={[
            {
              selector: "node",
              style: {
                "background-color": "#0a2b3d",
                label: "data(label)",
                "text-wrap": "wrap",
                "text-max-width": "150px", // Adjust the width as needed
              },
            },
            {
              selector: "edge",
              style: {
                width: "2",
                "line-color": "black",
              },
            },
          ]}
          cy={(cy) => {
            cy.on("tap", "node", function (evt) {
              window.open(evt.target.data().href);

              // const node = evt.target;
              // const data = node.data();
              // window.location.href
            });
            cy.on("mouseover", "node", function (evt) {
              // evt.target.data().label = "hello"

              // console.log()

              if (evt.target.data().label.includes("(hover)")) {
                return;
              }
              cy.$id(evt.target.data().id).data({
                label: evt.target.data().label + "(hover)",
              });
            });
            cy.on("add", "edge", function (evt) {
              const edge = evt.target;
              console.log(
                `Edge ID: ${edge.id()}, Width: ${edge.style("width")}`
              );
            });
          }}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="bg-red-300">Meta</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
