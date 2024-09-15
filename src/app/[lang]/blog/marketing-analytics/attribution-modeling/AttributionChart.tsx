"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react"

export const description = "A bar chart with an active bar"

const initChartData = [
  { touchpoint: "linkedin", attribution: 0.3, fill: "var(--color-linkedin)" },
  { touchpoint: "google", attribution: 0.7, fill: "var(--color-google)" },
  { touchpoint: "mail", attribution: 0.2, fill: "var(--color-mail)" },
  { touchpoint: "edge", attribution: 0.1, fill: "var(--color-edge)" },
  { touchpoint: "other", attribution: 0.4, fill: "var(--color-other)" },
]

function get_attribution_data(channels: string[], attributionType: string) {
  switch (attributionType) {
    case "first":
      return initChartData.map((channel) => {
        return {
          touchpoint: channel.touchpoint,
          attribution: channel.touchpoint === channels[0] ? 1 : 0,
          fill: channel.fill,
        };
      });
    case "last":
      return initChartData.map((channel) => {
        return {
          touchpoint: channel.touchpoint,
          attribution: channel.touchpoint === channels[channels.length - 1] ? 1 : 0,
          fill: channel.fill,
        };
      });
    case "linear":
      return initChartData.map((channel, index) => {
        return {
          touchpoint: channel.touchpoint,
          attribution: 1 / channels.length,
          fill: channel.fill,
        };
      });
    // time day should sum up to one
    case "time_decay":
      return initChartData.map((channel, index) => {
        return {
          touchpoint: channel.touchpoint,
          attribution: 1 / (index + 1),
          fill: channel.fill,
        };
      })
  }
}

const chartConfig = {
  attribution: {
    label: "attribution",
  },
  linkedin: {
    label: "linkedin",
    color: "hsl(var(--chart-1))",
  },
  google: {
    label: "Google",
    color: "hsl(var(--chart-2))",
  },
  mail: {
    label: "Mail",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function  AttributionChart() {

  let [attributionType, setAttributionType] = useState("first");
  let [chartData, setChartData] = useState(initChartData);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart - Active</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <Select onValueChange={
          (value) => {
            setChartData(get_attribution_data(["linkedin", "google", "mail", "edge", "other"], value));
          }
        }>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Attribution Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="first">first</SelectItem>
            <SelectItem value="last">last</SelectItem>
            <SelectItem value="linear">linear</SelectItem>
            <SelectItem value="time_decay">time_decay</SelectItem>
          </SelectContent>
        </Select>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="touchpoint"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <YAxis
              dataKey="attribution"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              domain={[0, 1]}
              tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
            />
            <Bar
              dataKey="attribution"
              strokeWidth={2}
              radius={8}
              // activeIndex={2}
              // activeBar={({ ...props }) => {
              //   return (
              //     <Rectangle
              //       {...props}
              //       fillOpacity={0.8}
              //       stroke={props.payload.fill}
              //       strokeDasharray={4}
              //       strokeDashoffset={4}
              //     />
              //   )
              // }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
