import Lang from "@/src/lang/lang"
import { Metadata } from "next"
import Image from "next/image";
import { FunnelChart } from "./FunnelChart";
import { SankeyPlot } from "./SankeyPlot";
import { SankeyMulti } from "./SankeyMulti";


export async function generateMetadata({
    params,
}: {
    params: { lang: string };
}): Promise<Metadata> {
    return {
        title: "Useful Visualiations for Marketing Analytics",
        description: 'In this article, I have compiled a list of useful visualizations and statistics for marketing analytics. These visualizations can help you understand your data better and make better decisions.',
    };
}


export default function Page ({ params }: { params: { lang: string } }) {
    const locale = params.lang ? params.lang : 'en'
    const localTranslations = Lang[locale]
    
    return (
        <article className="flex items-center justify-center overflow-y-auto py-20" >
            <div className="flex flex-col w-[800px] max-w-[85%] gap-4 h-full p-3 items-center blog">
                <h1 className="text-left w-full">Intelligent Chatbots at OMD</h1>
                <p>In this article, I have compiled a list of useful visualizations and statistics for marketing/customer analytics. I will provide a short description and explanation for each of them and describe the scenarios in which they are useful. I have tried to focus on charts that are specific to marketing analytics and ones that are more interesting than your standard bar/line/scatter plot.</p>
                <p>Disclaimer: This article is a work-in-progress and I will add new visualizations and statistics as time goes by (and as I discover them myself). You can find the full code that is used to generate them on my GitHub. Many of the example visualizations are based on synthetic data and some of them have been generated with ChatGPT.</p>
                <h3>Customer Journey Mapping</h3>
                <p>The customer journey (CJ) can be understood as the sequence of touchpoints, the customer goes through before establishing a commercial relationship with the company. In general, we want to graph the CJ from a more abstract, high-level point of view. That is, we don’t care about every single mouse click the customer made but rather about the rough stages through which they transitioned.</p>
                <p>We will plot different touchpoints in one dimension and frequencies in the other dimension. For this type of chart, we need the aggregated interactions of our customer base grouped by touchpoints. The more common way of displaying the CJ is via a so-called funnel chart (in that case we might also call it a marketing funnel).</p>
                <FunnelChart />
                <p>An alternative representation of the CJ can be done via Sankey plots. These show not only the positive cases (i.e. people who continued to the next stage) but also where the people who dropped out went instead. Given that I used the same data for both diagrams, there is no big difference but if we care about where people who stopped interacting went afterwards, a Sankey plot might be the better choice. This would also be the case in special situations where not everyone has to go through all the stages but rather there are different starting points (and maybe even different ‘final’ interactions).</p>
                <SankeyPlot />
                <p>In the figure below, we can see that there are different ways in which people might have gotten to the landing page and also how they continued afterward. Very quickly we can see that a lot of the people coming from the email campaign churn between the landing page and the product page and therefore very few of them make it to the subsequent touch points. This is also a good way of comparing the CJ of different cohorts (more on cohorts later) or how the CJ improved over time.</p>
                <SankeyMulti />
                <p>Especially when wanting to compare the CJ across different dimensions (e.g. customer groups, demographics, or time) it can become inefficient to do so via the visualizations above. It is also hard to read precise percentages from the chart and compare them with each other.</p>
                <p>Because of this, we can also summarize the information with some metrics and then plot that metric across dimensions (or just put the metric as-is on a dashboard as a KPI). Firstly, we can look at the overall conversion rate. This is the percentage of users who complete the desired action (e.g., making a purchase, signing up) compared to the total number of users who started the journey. This is a very high-level metric that can be plotted over time to see general trends.</p>
                <p>We can also look at this rate for each stage to see where the bottlenecks occur. When we take one minus the conversion rate, we get the drop-off rate. This is just the percentage of customers that abandon the journey (or abandon it at a given stage). The drop-off rate at the first touch point is also called the bounce rate (in our case this would be the drop-off rate at the landing page). In our case, we can see that although much of the blue stream makes it through the landing page to the product page (low bounce rate), most of them drop-off at the product page and don’t make it to the cart. The drop-off rate at the cart is also often called the cart abandonment rate. A high rate may indicate friction in the checkout process.</p>
                <p>If there is a more complex customer journey with lots of branches and different ways of getting to the final touchpoints, one can also consider looking at the most common or least common paths. Also, in some cases, it might be of interest to know how fast customers reach the different touch points and how much time they spend at them. Long durations might indicate difficulty in completing the action (or again, some friction), while short times might suggest efficient user flow or low engagement. In this case, the correct explanation for the behavior depends on the specific business context.</p>
                <p>Since there is always room for improvement in the CJ and we have limited resources (e.g. limited marketing spend), one needs to have some way of deciding for which area of the funnel (i.e. touch point) or which customer group to optimize first. For this, we can look at measures such as customer acquisition cost, average transaction value and customer lifetime value (CLV) to see in which areas an improvement of the funnel has a high return on investment (ROI). As an example, if we have a high bounce rate at one of our touch points but only people with a very low CLV are bouncing off, this might now be as bad as losing customers that have a high CLV.</p>
                <h3>Pareto Charts</h3>
                <p>A Pareto chart plots the cumulative percentage as a function of some continuous or discrete variable. In our case, we have different marketing channels on the x-axis and the cumulative relative number of conversions on the y-axis. This enables us to quickly see that email marketing and social media make up around 70% of all conversions (also called the vital few) whereas the rest of the channels (called the useful many) make up around 30%.</p>
                <p>The advice then often is to focus on these vital few. But what about this chart tells us that focussing on the vital few is the right thing to do? There is nothing causal that establishes that investing resources in email marketing will lead to an increase in conversions. It could just be that further efforts in one of these vital few would only give us marginal gains whereas other channels still have some potential or might even be ‘low-hanging fruit’. Although the Pareto chart is a nice tool for quickly giving us a snapshot of the current situation it does not directly give us actionable insights. On the other side, it can give a quick overview and could for example show us that we have a long right tail with little to no contribution. In our case, this would mean having lots of marketing channels on the right of the spectrum that contribute very little to the conversions. In that case, one can do a deeper analysis to see if having these channels is worth the effort of maintaining them (maybe there are interaction effects between channels). In either case, the Pareto chart can create awareness around such issues.</p>
                <h3>(Cohort) Retention Analysis </h3>
                <p>Retention analysis is the process of tracking and analyzing customer behavior to understand how customers continue to engage with a company, product, or service after their initial interaction. It is a critical component of understanding customer behavior and ensuring long-term business success since acquiring new customers is often more expensive than retaining the current ones.</p>
                <p>Firstly, we can look at the chart below to get a general feeling for how customers interact with the product after signing up. We have the relative time (i.e. periods since signing up) on the x-axis and some measure for the intensity of interaction on the y-axis. Every line represents a single customer.</p>



            </div>
        </article>
    )
}