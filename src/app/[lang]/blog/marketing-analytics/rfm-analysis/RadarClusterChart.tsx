"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/ui/chart"

export const description = "A radar chart with multiple data"

const chartData = [
  { month: "Recency", group1: 186, group2: 80 },
  { month: "Monetary Value", group1: 305, group2: 200 },
  { month: "Frequency", group1: 237, group2: 120 },
  { month: "Regularity", group1: 73, group2: 190 },
]

const chartConfig = {
  group1: {
    label: "group1",
    color: "hsl(var(--chart-1))",
  },
  group2: {
    label: "group2",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function RadarClusterChart() {
  return (
    <Card className="w-[90%]">
      <CardHeader className="items-center pb-4">
        <CardTitle>Radar Chart - Multiple</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[400px] w-full"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="group1"
              fill="var(--color-group1)"
              fillOpacity={0.6}
            />
            <Radar dataKey="group2" fill="var(--color-group2)" />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  )
}
