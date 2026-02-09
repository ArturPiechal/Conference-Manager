"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Sales",
    color: "#3b82f6", // blue-500
  },
} satisfies ChartConfig

export function SellingChart() {
  return (
    <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-slate-200">Selling Overview</CardTitle>
        <CardDescription className="text-slate-400">January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke="hsl(var(--slate-800))" strokeOpacity={0.4} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
              stroke="hsl(var(--slate-400))"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel className="bg-slate-900 border-slate-800 text-slate-100" />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{
                  fill: "#3b82f6",
                  stroke: "#1e293b",
                  strokeWidth: 2,
                  r: 4
              }}
              activeDot={{
                r: 6,
                fill: "#3b82f6",
                stroke: "#1e293b",
                strokeWidth: 2
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
