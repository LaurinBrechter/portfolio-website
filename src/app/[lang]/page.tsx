import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BarChart, PieChart, LineChart, Database, Bot, ExternalLink } from "lucide-react"

import Lang from "@/src/lang/lang"
import { Link } from "@/src/i18n/routing"
import { Card } from "@/components/ui/card"
import CalendlyInline from "./components/CalendlyInline"



export default function Home({ params }: { params: { lang: string } }) {

  const locale = params.lang ? params.lang : 'en'
  const localTranslations = Lang[locale]

  return (
    <>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 h-[93vh]" id="welcome-container">
          <div className="container px-4 md:px-6 z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {localTranslations.home.title}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl dark:text-gray-400 font-medium bg-white bg-opacity-60">
                  {localTranslations.home.subtitle}
                </p>
              </div>
              <div className="space-x-4">
                <a href="#services">
                  <Button variant="outline">{localTranslations.home.learn_more}</Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
              <div className="flex flex-col items-center text-center">
                <BarChart className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400">Comprehensive analysis of your data to uncover trends and insights.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <PieChart className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
                <p className="text-gray-500 dark:text-gray-400">Create compelling visual representations of your data for easy understanding.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LineChart className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Predictive Modeling</h3>
                <p className="text-gray-500 dark:text-gray-400">Develop models to forecast trends and make data-driven decisions.</p>
              </div>
              <div className="flex flex-col items-center text-center relative">
                <Bot className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Intelligent Chatbots</h3>
                <p className="text-gray-500 dark:text-gray-400">Develop chatbots that can interact with your customers and provide support.</p>
                <Link href="/blog/chatbots/omd-bot" title="Go to OMD Bot"><ExternalLink className="absolute top-0 right-0" /></Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{localTranslations.home.about.title}</h2>
                <p className="text-gray-500 dark:text-gray-400">
                  {localTranslations.home.about.content}
                </p>
                
              </div>
              <div className="flex justify-center">
                <img
                  alt="Data Analyst"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/profile.jpg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{localTranslations.home.contact.title}</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {localTranslations.home.contact.subtitle}
                </p>
              </div>
              <CalendlyInline />
            </div>
          </div>
        </section>
        
      </>
  )
}
