import { remark } from 'remark';
import html from 'remark-html';
import fs from "fs";
import { RadarClusterChart } from './RadarClusterChart';


export default function Page() {

    const path = '/src/app/[lang]/blog/marketing-analytics/rfm-analysis/blog.md'
    const fileContents = fs.readFileSync(process.cwd() + path, 'utf8')

    const result = remark().use(html).processSync(fileContents).toString()

    return (
        <article className="flex items-center flex-col justify-center overflow-y-auto py-20" >
            <div className="flex flex-col w-[600px] gap-4 h-full items-center">
                <div dangerouslySetInnerHTML={{ __html: result }}></div>
                <RadarClusterChart />
            </div>
        </article>
    )
}