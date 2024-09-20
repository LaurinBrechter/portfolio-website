import React from "react";
import { ContentGraph } from "./ContentGraph";
import fs from "fs";

const Demos = () => {
  const graphData = JSON.parse(
    fs.readFileSync(
      process.cwd() + "/src/app/[lang]/blog/graphData.json",
      "utf8"
    )
  );

  // const medium_blogs = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/[lang]/blog/medium_blogs.json', 'utf8'));
  // const own_blogs = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/[lang]/blog/own_blogs.json', 'utf8'));

  // const blogs = medium_blogs.concat(own_blogs);
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
      <h1>Demos</h1>
      <p className="pb-4">Graph based overview over my projects and blogs</p>
      <ContentGraph graphEdges={graphEdges} graphNodes={graphNodes} blogData={blogs} />
    </div>
  );
};

export default Demos;
