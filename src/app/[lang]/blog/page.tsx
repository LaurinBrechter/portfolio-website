import Blog from "./blog";
import fs from "fs";

const Page = () => {
  
  const medium_blogs = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/[lang]/blog/medium_blogs.json', 'utf8'));
  const own_blogs = JSON.parse(fs.readFileSync(process.cwd() + '/src/app/[lang]/blog/own_blogs.json', 'utf8'));

  const blogs = medium_blogs.concat(own_blogs);

  return (
    <Blog blog_data={blogs} />
  )
}

export default Page;