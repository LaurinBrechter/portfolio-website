import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/src/i18n/routing";
import { LangTranslations } from "@/src/lang/lang";
import {
  TrendingUp,
  Users,
  DollarSign,
  ExternalLink,
  Timer,
} from "lucide-react";

// const CaseStudies = (props: {locale: string, translations: LangTranslations}) => {
export function CaseStudies(props: {
  locale: string;
  translations: LangTranslations;
}) {
  const localTranslations = props.translations[props.locale];

  return (
    <section id="case-studies" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          {localTranslations.home.caseStudies.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href={"/blog/chatbots/omd-bot"} className="group">
            <Card className="h-full transition-all duration-200 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle>
                  {localTranslations.home.caseStudies.omd_appointbot.title}
                </CardTitle>
                <CardDescription>
                  {localTranslations.home.caseStudies.omd_appointbot.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-2">
                  <Timer className="h-5 w-5 text-green-500" />
                  <span className="font-semibold text-green-500">
                    {localTranslations.home.caseStudies.omd_appointbot.benefit}
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {
                    localTranslations.home.caseStudies.omd_appointbot
                      .description
                  }
                </p>
                <Link
                  href={"/blog/chatbots/omd-bot"}
                  className="hover:underline underline-offset-4"
                >
                  {localTranslations.home.caseStudies.link}
                </Link>
              </CardContent>
            </Card>
          </Link>
          <Link
            href={"/blog/marketing-analytics/rfm-analysis"}
            title="Learn More"
            className="group"
          >
            <Card className="h-full transition-all duration-200 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle>
                  {
                    localTranslations.home.caseStudies.customer_segmentation
                      .title
                  }
                </CardTitle>
                <CardDescription>
                  {
                    localTranslations.home.caseStudies.customer_segmentation
                      .subtitle
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="font-semibold text-blue-500">
                    {
                      localTranslations.home.caseStudies.customer_segmentation
                        .benefit
                    }
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {
                    localTranslations.home.caseStudies.customer_segmentation
                      .description
                  }
                </p>
                <Link
                  href={"/blog/marketing-analytics/rfm-analysis"}
                  className="hover:underline underline-offset-4"
                >
                  {localTranslations.home.caseStudies.link}
                </Link>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog/federated-bank-statement-parsing" className="group">
            <Card className="h-full transition-all duration-200 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle>
                  {
                    localTranslations.home.caseStudies.federated_bank_parsing
                      .title
                  }
                </CardTitle>
                <CardDescription>
                  {
                    localTranslations.home.caseStudies.federated_bank_parsing
                      .subtitle
                  }
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-2">
                  <DollarSign className="h-5 w-5 text-yellow-500" />
                  <span className="font-semibold text-yellow-500">
                    $2M annual cost savings
                  </span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {
                    localTranslations.home.caseStudies.federated_bank_parsing
                      .description
                  }
                </p>
                <Link
                  href={"/blog/federated-bank-statement-parsing"}
                  className="hover:underline underline-offset-4"
                >
                  {localTranslations.home.caseStudies.link}
                </Link>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
}
