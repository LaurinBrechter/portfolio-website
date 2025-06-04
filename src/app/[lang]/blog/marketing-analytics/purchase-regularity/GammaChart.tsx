"use client";

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/src/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
    value: {
      label: "value",
    },
    count: {
      label: "count",
      color: "hsl(173 58% 39%)",
    },
  } satisfies ChartConfig

export function GammaChart({ chartData }: { chartData: any[] }) {
  return (
    <ChartContainer config={chartConfig} className="w-full h-[400px]">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="value"
          tickLine={false}
          label='Value'
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
            />
        <YAxis
          dataKey="count"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          domain={[0, 1]}
        />
        <Bar
          dataKey="count"
          strokeWidth={2}
          radius={8}
          color="green"
        />
      </BarChart>
    </ChartContainer>
  );
}
