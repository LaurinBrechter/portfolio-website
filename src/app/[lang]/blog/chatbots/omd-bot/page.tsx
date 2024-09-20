import Lang from "@/src/lang/lang"
import { Metadata } from "next"
import Image from "next/image";


export async function generateMetadata({
    params,
}: {
    params: { lang: string };
}): Promise<Metadata> {
    return {
        title: "Intelligent Chatbots at OMD",
        description: 'Especially when it comes to “AI”, actions speak louder than words. Together with the people at Optimize My Day GmbH, we created a chatbot that allows users to interact with their documents, retrieve information and build up their knowledge base.',
    };
}


export default function Page ({ params }: { params: { lang: string } }) {
    const locale = params.lang ? params.lang : 'en'
    const localTranslations = Lang[locale]
    
    return (
        <article className="flex items-center justify-center overflow-y-auto py-20" >
            <div className="flex flex-col w-[600px] gap-4 h-full p-3">
                <h1>Intelligent Chatbots at OMD</h1>
                <p>Especially when it comes to “AI”, actions speak louder than words. Together with the people at Optimize My Day GmbH, we created a chatbot that allows users to interact with their documents, retrieve information and build up their knowledge base.</p>
                <p>Another chatbot handles customer support by rescheduling appointments with customers</p>
                <p>Part of this project was presented in an online webinar. You can watch the full recording <a className="text-blue-600 hover:underline" href="https://www.youtube.com/watch?v=5B2H9DawL9I&t=48s"> here</a> for more information.</p>
                <Image src={'/omd-appointbot.png'} alt="screenshot of omd-appointbot interface" width={300} height={300} />
                <section>
                    <h3 >Intelligent Knowledge Management</h3>
                    <p>OMD is a company that offers mobile workforce solutions to various companies such as Culligan and CWS. These companies have service workers that need to fulfill tasks such as repairing or replacing a piece of equipment.</p>
                    <p>Oftentimes, the service workers need some extra information to fulfill their task. Questions could be something like “Is there anything special I have to pay attention to when replacing part XYZ?” or “Do we still have M3 screws in stock?”. But they could also be assertions such as “I couldn’t perform my tasks, the customer is closed because of vacations”.</p>
                    <p>The chatbot helps service workers get the information they need to optimally do their job by answering any questions they might have. At the same time, references are always provided to the specific pages so the worker can always look into the original source document if needed.</p>
                    <p>In the background, a pipeline is set up that automatically loads and indexes newly uploaded documents so that they are instantly available to the chatbot for retrieval.</p>
                    <p>The service comes with built-in real-time analytics so that planners and administrators can check various metrics. Most importantly, they can check how well questions can be answered by the search bot and what questions are being asked. This enables them to see how their knowledge base is being queried and what documents are missing. Thereby, they can iteratively improve their knowledge base.</p>
                    <p>With the help of generative AI we then recommend courses of action to the planners. As an example, if a user asks a question that cannot be answered by the existing documents, the planner is advised to fill in the missing information by uploading a specific document. Statements by the workers are also summarized and translated into action points. So if multiple workers e.g. report changes in opening hours or missing parts, the planner is prompted to take the necessary actions to ensure smooth operations.</p>
                </section>
                <section>
                    <h3>Customer Support</h3>
                    <p>Besides Knowledge management, chatbots can also help companies with customer support. In the case of OMD, customers often need to reschedule appointments for maintenance.</p>
                    <p>For the customers of OMD, this was done over the phone which was a very time-consuming and expensive situation.</p>
                    <p>With the help of a chatbot, customers can now reschedule their appointments themselves. The chatbot is able to understand the customer’s request and then automatically reschedule the appointment. This saves a lot of time for the customers and the company.</p>
                </section>
            </div>
        </article>
    )
}