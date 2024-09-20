import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { BarChart, PieChart, LineChart, Database, Bot, ExternalLink, TrendingUp, Users, DollarSign, Github, Linkedin, FileText } from "lucide-react"
// import {unstable_setRequestLocale} from 'next-intl/server';
import Lang from "@/src/lang/lang"
import { Link } from "@/src/i18n/routing"
import CalendlyInline from "./components/CalendlyInline"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CaseStudies } from "./components/CaseStudies"
import Image from "next/image"


export default function Home({ params }: { params: { lang: string } }) {
  // unstable_setRequestLocale(params.lang);


  const locale = params.lang ? params.lang : 'en'
  const localTranslations = Lang[locale]


  const icons = [
    <BarChart className="h-12 w-12 mb-4 text-primary" />,
    // <PieChart className="h-12 w-12 mb-4 text-primary" />,
    <LineChart className="h-12 w-12 mb-4 text-primary" />,
    <Bot className="h-12 w-12 mb-4 text-primary" />
  ]

  const links = [
    "/blog/chatbots/omd-bot",
    "/blog/chatbots/omd-bot",
    "/blog/chatbots/omd-bot",
    "/blog/chatbots/omd-bot"
  ]

  return (
    <>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 h-[100%]" id="welcome-container">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">{localTranslations.home.services.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {
                localTranslations.home.services.service_list.map((service, index) => {
                  return (
                    <div key={service.title} className="flex flex-col items-center text-center relative">
                      {icons[index]}
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
                      {/* {links[index] && <Link href={links[index]} title="Learn More"><ExternalLink className="absolute top-0 right-0" /></Link>} */}
                    </div>
                  )})
              }
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
                <div className="flex space-x-4">
                  <a href="https://github.com/LaurinBrechter" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <Github className="h-6 w-6" />
                    {/* <span className="sr-only">GitHub</span> */}
                  </a>
                  <a href="https://www.linkedin.com/in/laurin-brechter/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <Linkedin className="h-6 w-6" />
                    {/* <span className="sr-only">LinkedIn</span> */}
                  </a>
                  <a href="https://medium.com/@brechterlaurin" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                    <Image src="/medium-icon-svgrepo-com.svg" alt="Medium" width={24} height={24} />
                    {/* <span className="sr-only">Medium</span> */}
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Data Analyst"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/profile_new.jpg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <CaseStudies locale={locale} translations={Lang}/>
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
