import Blog from "./blog";
import fs from "fs";

const Page = () => {
  
  const blog_json = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/[lang]/blog/blogs.json', 'utf8'));
  
  return (
    <Blog blog_data={blog_json} />
  )
}

export default Page;