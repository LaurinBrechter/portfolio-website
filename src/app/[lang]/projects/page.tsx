import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Lang from "@/src/lang/lang";


export default function ProjectsPage({
  params,
}: {
  params: { lang: string };
}) {
  const locale = params.lang ? params.lang : "en";
  const localTranslations = Lang[locale];

  const projects = [
    {
      title: "Tab Transcribe",
      description:
        "A chrome extension that uses openai whisper to transcribe the audio from any tab. The extension runs fully client side without any third party services.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Typescript", "OpenAI", "Whisper", "Chrome Extension"],
      githubLink: "https://github.com/LaurinBrechter/tab-transcribe",
    },
    {
      title: "pamidb",
      description: "A specialized database written in rust for pattern mining.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Rust", "Pattern Mining", "Database"],
      githubLink: "https://github.com/LaurinBrechter/pamidb",
    },
    {
      title: "Sentiment Analysis of Product Reviews",
      description:
        "Built a natural language processing model to analyze sentiment in product reviews, helping the company improve customer satisfaction.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Python", "NLTK", "TensorFlow", "Keras"],
      githubLink: "https://github.com/yourusername/sentiment-analysis",
      liveLink: "https://example.com/sentiment-demo",
    },
    {
      title: "A/B Testing Framework",
      description:
        "Developed a statistical framework for conducting and analyzing A/B tests, increasing the efficiency of product feature rollouts.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Python", "SciPy", "Statsmodels", "Matplotlib"],
      githubLink: "https://github.com/yourusername/ab-testing-framework",
      liveLink: "https://example.com/ab-testing-docs",
    },
  ];

  return (
      <section className="w-full py-12 min-h-[87vh]">
        <div className="container px-4 md:px-6">
          <h1 className="font-bold tracking-tighter mb-8">
            {localTranslations.projects.title}
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  {/* <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    /> */}
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {project.liveLink && (
                    <Button asChild>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
  );
}
