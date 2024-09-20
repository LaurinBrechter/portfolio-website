"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "@/src/i18n/routing";
import Image from "next/image";
import React, { useState } from "react";

let tag_color: { [key: string]: string } = {
  postgres: "#274754",
  rag: "#e8c468",
  bayesian: "#e76e50",
  "customer analytics": "#2a9d90",
  "pattern mining": "#e8c468",
  cpm: "#e76e50",
  clv: "#2a9d90",
  simulation: "#e8c468",
  optimization: "#e76e50",
  "causal inference": "#2a9d90",
  causalpy: "#e8c468",
};

export function BlogEntry(props: {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  date: string;
}) {
  return (
    <Card className="flex">
      {/* <div className='h-[200px] w-[200px]'> */}
      <Image
        src="/blog/causal_inf_causal_py.webp"
        width={200}
        height={200}
        alt="cool"
        className="p-4 object-contain"
      />
      {/* </div> */}
      <div>
        <CardHeader className="flex text-left">
          <CardTitle>
            {props.link ? (
              <Link href={props.link} className="hover:underline">
                {props.title}
              </Link>
            ) : (
              props.title
            )}
          </CardTitle>
          <div className="flex gap-2">
            {props.tags.map((tag) => {
              let color = tag_color[tag];
              return (
                <Badge key={tag} color={color}>
                  {tag}
                </Badge>
              );
              return (
                <Badge key={tag} className={`bg-[${color}]`}>
                  {tag}
                </Badge>
              );
            })}
          </div>
        </CardHeader>
        <CardContent className="flex text-left">
          {props.description}
          {props.date}
        </CardContent>
      </div>
    </Card>
  );
}
// #274754
// #e8c468
// #e76e50
// #2a9d90

type Blog = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  date: string;
};

const Blog = (props: { blog_data: Blog[] }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const blogs = props.blog_data;
  //   [
  //     { title: 'How to use PostgresDB as your One-Stop RAG Solution', description: 'This post shows how to use postgres as a vector db and how to ingest and retrieve documents with the help of Python and SQLAlchemy', tags: ['postgres', 'rag'] },
  //     { title: 'Putting Bayesian Models into Production', description: 'In this post, I will highlight some of the things to consider when putting Bayesian models into production and how they compare to…', tags: ['bayesian'] },
  //     { title: 'Customer Analytics: Pattern Mining on Clickstream Data in Python', description: 'This post shows how we can use raw clickstream data to find patterns in the online user behavior of customers of an ecommerce site.', tags: ['customer analytics', 'pattern mining'] },
  //     { title: 'A Data-driven, Bayesian Approach to the Critical Path Method', description: 'In this post, I provide a short review of the CPM project management technique. After this, we discuss the shortcomings and see how a…', tags: ['bayesian', 'cpm'] },
  //     { title: 'Applying the Bayesian Gamma-gamma Model for Customer Lifetime Valuation', description: 'This post applies the gamma-gamma model for Customer Lifetime Valuation (CLV) to a brazilian e-commerce dataset…', tags: ['bayesian', 'clv'] },
  //     { title: 'Material Flow Simulation and Optimization with SimPy', description: 'This post will show you how to setup a simpy environment in Python that models the flow of raw materials through a factory. Additionally…', tags: ['simulation', 'optimization'] },
  //     { title: 'A Bayesian Approach to Customer Lifetime Valuation', description: 'This post applies the BG/NBD model for Customer Lifetime Value analysis to a retail dataset.', tags: ['bayesian', 'clv'] },
  //     { title: 'Causal Inference with CausalPy', description: 'This post provides a short introduction to causal inference with a practical example showing how synthetic control can work in CausalPy', tags: ['causal inference', 'causalpy'] },
  //     { title: 'The Interactive Guide to Attribution Modeling', description: 'This post provides a short introduction to attribution modeling and how it can be used to measure the effectiveness of marketing campaigns.', tags: ['marketing analytics'], link: '/blog/marketing-analytics/attribution-modeling' },
  //   ];

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-52 py-20 flex-col flex text-center h-[87vh]">
      <div className="flex gap-4 pr-4 pb-4">
        <Input
          placeholder="Search Blogs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button>Search</Button>
        <Link href={"/blog/overview"}>
          <Button>Graph</Button>
        </Link>
      </div>
      <ScrollArea className="pr-4">
        <div className="h-1/2 flex flex-col gap-3">
          {filteredBlogs.map((blog) => {
            return (
              <BlogEntry
                key={blog.title}
                title={blog.title}
                description={blog.description}
                tags={blog.tags}
                link={blog.link}
                date={blog.date}
              />
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Blog;
