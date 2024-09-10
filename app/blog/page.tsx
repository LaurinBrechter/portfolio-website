import Blog from "./blog";
import fs from "fs";
import path from "path";

const Page = () => {
  
  // read blogs.json file
  const blog_json = JSON.parse(fs.readFileSync(process.cwd() + '/app/blog/blogs.json', 'utf8'));
  
  console.log(blog_json);

  return (
    <Blog blog_data={blog_json} />
  )
}

export default Page;