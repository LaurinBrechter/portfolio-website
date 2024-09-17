import React from 'react'
import { ContentGraph } from './ContentGraph'
import fs from "fs";

const Demos = () => {

  const graphDataJson = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/[lang]/blog/edges.json', 'utf8'));


  return (
    <div className='flex items-center justify-center h-[87vh] flex-col'>
      <h1>Demos</h1>
      <p>Graph based overview over my projects and blogs</p>
      <ContentGraph graphData={graphDataJson}  />
    </div>
  )
}

export default Demos