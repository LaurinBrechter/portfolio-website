import { remark } from "remark";
import html from "remark-html";
import fs from "fs";

export default function Page() {
  const path = "/src/app/[lang]/blog/marketing-analytics/rfm-analysis/blog.md";
  const fileContents = fs.readFileSync(process.cwd() + path, "utf8");

  const result = remark().use(html).processSync(fileContents).toString();

  return (
    <article className="blog-container">
      <div className="blog">
        <div dangerouslySetInnerHTML={{ __html: result }}></div>
      </div>
    </article>
  );
}
