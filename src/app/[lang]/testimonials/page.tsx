import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
import Lang from '@/src/lang/lang'
// import { useRouter } from 'next/router'

interface TestimonialProps {
  image: string
  name: string
  company: string
  title: string
  testimonial: string,
  relatedPosts?: {
    title: string
    url: string
  }[]
}

function Testimonial({ image, name, company, title, testimonial, relatedPosts }: TestimonialProps) {
  return (
    <Card className="bg-white dark:bg-gray-800">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name ? name.split(' ').map(n => n[0]).join('') : 'U'}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-semibold">{name || 'Anonymous'}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-sm font-medium text-primary">{company}</p>
          </div>
        </div>
        <blockquote className="mt-4 text-gray-700 dark:text-gray-300">
          "{testimonial}"
        </blockquote>
        {
          relatedPosts && relatedPosts.length > 0 && (
            <div className="mt-4">
              <ul className="list-disc list-inside gap-2 flex">
                {relatedPosts.map((post, index) => (
                  <Link href={post.url} className='text-sm font-medium hover:underline underline-offset-4'>{post.title}</Link>
                ))}
              </ul>
            </div>
          )
        }
      </CardContent>
    </Card>
  )
}


export default function TestimonialsSection({ params }: { params: { lang: string } }) {

  const locale = params.lang ? params.lang : 'en'
  const localTranslations = Lang[locale]


  const testimonials: TestimonialProps[] = [
    {
      image: "/placeholder.svg?height=100&width=100",
      name: "Alice Johnson",
      company: "Tech Innovators Inc.",
      title: "Chief Data Officer",
      testimonial: "The insights provided by this data analyst were instrumental in reshaping our business strategy. Their ability to translate complex data into actionable recommendations is unparalleled.",
      relatedPosts: [
        {
          title: 'Federated Learning',
          url: 'https://medium.com/towards-data-science/market-basket-analysis-using-high-utility-itemset-mining-df233b297c0d'
        }
      ]
    },
    {
      image: "/placeholder.svg?height=100&width=100",
      name: "Bob Smith",
      company: "Global Solutions Ltd.",
      title: "Marketing Director",
      testimonial: "Working with this data scientist has transformed our marketing approach. Their predictive models have significantly improved our campaign ROI and customer targeting."
    },
    {
      image: "/placeholder.svg?height=100&width=100",
      name: "Carol Zhang",
      company: "Innovative Startups Co.",
      title: "Founder & CEO",
      testimonial: "As a startup, data-driven decision making is crucial. This analyst's expertise has been invaluable in helping us understand our market and optimize our product development."
    }
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 h-[93vh]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          {localTranslations.testimonials.title}
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}