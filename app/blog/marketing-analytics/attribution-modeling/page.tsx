"use client";

import React, { PureComponent, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const data = [
  {
    name: "LinkedId",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Google",
    uv: -3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mail",
    uv: -2000,
    pv: -9800,
    amt: 2290,
  },
  {
    name: "Ads",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

// export const description = "A bar chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const channels = ["LinkedId", "Google", "Mail", "Ads"];

function get_attribution_data(channels: string[], attributionType: string) {
  switch (attributionType) {
    case "first_touch":
      return data.map((channel) => {
        return {
          name: channel.name,
          attribution: channel.name === channels[0] ? 1 : 0,
        };
      });
    case "last_touch":
      return data.map((channel) => {
        return {
          name: channel.name,
          attribution: channel.name === channels[channels.length - 1] ? 1 : 0,
        };
      });
  }
}

export default function Page() {
  let [attributionType, setAttributionType] = useState("first_touch");

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-[400px] h-[400px]">
        {/* <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select> */}
        <h1>Attribution Modeling</h1>
        <p>Hello World</p>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </div>
    </div>
  );
}
