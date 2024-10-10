import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Sales Prediction Model",
      description:
        "Developed a machine learning model to forecast sales for a retail company, improving inventory management and reducing costs.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Python", "Scikit-learn", "Pandas", "Time Series Analysis"],
      githubLink: "https://github.com/yourusername/sales-prediction",
      liveLink: "https://example.com/sales-prediction-demo",
    },
    {
      title: "Customer Churn Analysis Dashboard",
      description:
        "Created an interactive dashboard to visualize customer churn patterns and identify key factors influencing customer retention.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["R", "Shiny", "ggplot2", "dplyr"],
      githubLink: "https://github.com/yourusername/churn-analysis-dashboard",
      liveLink: "https://example.com/churn-dashboard",
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
      <main className="flex-1">
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8">
              My Projects
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
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
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
