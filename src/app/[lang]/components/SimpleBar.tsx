"use client"
 
import { Bar, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
 
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]
 
const chartConfig = {
  January: {
    color: 'hsl(var(--chart-1))'
  },
  February: {
    color: 'hsl(var(--chart-2))'
  },
  March: {
    color: 'hsl(var(--chart-3))'
  },
  April: {
    color: 'hsl(var(--chart-4))'
  },
} satisfies ChartConfig
 
export const SimpleBar = () => {
  return (
    <ChartContainer config={chartConfig} className="h-14 w-14">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}