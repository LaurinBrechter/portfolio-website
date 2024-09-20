"use client";

import CytoscapeComponent from "react-cytoscapejs";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useEffect, useRef, useState } from "react";
import { BlogEntry } from "./Blog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type Blog = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  date: string;
};

type Edge = {
  data: {
    distance: number;
    source: string;
    target: string;
  };
}

type Node = {
  data: {
    id: string;
    label: string;
    href: string;
  };
}

export const ContentGraph = (props: { graphNodes: Node[]; graphEdges: Edge[]; blogData: Blog[] }) => {
  const [blog, setBlog] = useState<Blog>(props.blogData[0]);
  const [blogId, setBlogId] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const cyRef = useRef(null);

  const filteredBlogs = props.blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      // blog.description.toLowerCase().includes(searchQuery.toLowerCase()
  );

  const filteredGraphNodes = props.graphNodes.filter(
    (node) =>
      node.data.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGraphNodesIds = filteredGraphNodes.map((node) => node.data.id);

  const filteredGraphEdges = props.graphEdges.filter(
    (edge) =>
      filteredGraphNodesIds.includes(edge.data.source) &&
      filteredGraphNodesIds.includes(edge.data.target)
  )

  const graphData = filteredGraphEdges.concat(filteredGraphNodes);

  useEffect(() => {
    if (cyRef.current) {
      const layout = cyRef.current.layout({ name: 'grid' });
      layout.run();
    }
  }, [graphData]);


  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full w-full border-t"
    >
      <ResizablePanel defaultSize={50}>
        <CytoscapeComponent
          elements={graphData}
          style={{ width: "100%", height: "100%" }}
          layout={{ name: "grid" }}
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
            cyRef.current = cy;
            cy.on("tap", "node", function (evt) {
              window.open(evt.target.data().href);

              // const node = evt.target;
              // const data = node.data();

              // setBlogId(data.id);
              // setBlog(props.blogData[data.id]);

              // window.location.href
            });
            cy.on("mouseover", "node", function (evt) {
              // evt.target.data().label = "hello"

              // console.log()

              if (evt.target.data().label.includes("(hover)")) {
                return;
              }
              cy.$id(evt.target.data().id).data({
                label: evt.target.data().label,
              });
            });
            cy.on("add", "edge", function (evt) {
              const edge = evt.target;
              // console.log(
              //   `Edge ID: ${edge.id()}, Width: ${edge.style("width")}`
              // );
            });
          }}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel className="p-4 flex flex-col">
        <div className="flex gap-4 pr-4 pb-4">
          <Input
            placeholder="Search Blogs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* <Button>Search</Button>
          <Link href={"/blog/overview"}>
            <Button>Graph</Button>
          </Link> */}
        </div>
        <ScrollArea className="pr-4">
          <div className="h-1/2 flex flex-col gap-3">
            {filteredBlogs.map((blog) => {
              return (
                <BlogEntry
                  key={blog.title}
                  title={blog.title}
                  description={blog.description}
                  tags={blog.tags}
                  link={blog.link}
                  date={blog.date}
                />
              );
            })}
          </div>
        </ScrollArea>
        {/* <p>{blogId}</p> */}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
