import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign } from "lucide-react"

export default function CaseStudies() {
    return (
        <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Selected Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Sales Optimization</CardTitle>
                  <CardDescription>Boosting online sales through data-driven strategies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="font-semibold text-green-500">35% increase in conversion rate</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Analyzed customer behavior data to optimize product recommendations and checkout process, resulting in a significant boost in sales.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Customer Segmentation Analysis</CardTitle>
                  <CardDescription>Tailoring marketing strategies for different customer groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="font-semibold text-blue-500">5 distinct customer segments identified</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Used clustering algorithms to segment customers based on purchasing behavior, enabling targeted marketing campaigns and personalized experiences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Predictive Maintenance Model</CardTitle>
                  <CardDescription>Reducing downtime in manufacturing processes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold text-yellow-500">$2M annual cost savings</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Developed a machine learning model to predict equipment failures, allowing for proactive maintenance and significantly reducing unplanned downtime.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
    )
}