import React from "react";
import { ContentGraph } from "./ContentGraph";
import fs from "fs";

const Demos = () => {
  const blogs = JSON.parse(
    fs.readFileSync(
      process.cwd() + "/src/app/[lang]/blog/allBlogs.json",
      "utf8"
    )
  );

  const graphNodes = JSON.parse(
    fs.readFileSync(
      process.cwd() + "/src/app/[lang]/blog/graphNodes.json",
      "utf8"
    )
  );
  const graphEdges = JSON.parse(
    fs.readFileSync(
      process.cwd() + "/src/app/[lang]/blog/graphEdges.json",
      "utf8"
    )
  );

  return (
    <div className="flex items-center justify-center h-[87vh] flex-col">
      <h1>Blogs</h1>
      <p className="pb-4 text-muted-foreground">
        This is a graph based overview over my blog articles and projects. This
        is a k-nearest neighbor graph where two nodes are adjacent if one of
        them is a closest neighbor of the other.
      </p>
      <ContentGraph
        graphEdges={graphEdges}
        graphNodes={graphNodes}
        blogData={blogs}
      />
    </div>
  );
};

export default Demos;
