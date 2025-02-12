import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface ThroughputChartProps {
  data: Array<{
    users: number;
    BF16: number;
    FP8: number;
    W4A16: number;
    W8A8: number;
  }>;
  caption: string;
}

const ThroughputChart = ({ data, caption }: ThroughputChartProps) => {
  return (
    <figure style={{ margin: "1.4rem 0" }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="users"
            label={{
              value: "Concurrent Users",
              position: "bottom",
            }}
          />
          <YAxis
            label={{
              value: "Median Throughput (tokens/s)",
              angle: -90,
              dx: -20,
            }}
            width={40}
          />
          <Tooltip />
          <Legend wrapperStyle={{ paddingTop: 20 }} />
          <ReferenceLine
            y={6}
            stroke="var(--chart-red)"
            strokeDasharray="3 3"
          />
          <Line
            type="monotone"
            dataKey="BF16"
            name="BF16"
            stroke="var(--chart-cyan)"
            strokeWidth={1}
          />
          <Line
            type="monotone"
            dataKey="FP8"
            name="FP8"
            stroke="var(--chart-green)"
            strokeWidth={1}
          />
          <Line
            type="monotone"
            dataKey="W8A8"
            name="W8A8"
            stroke="var(--chart-yellow)"
            strokeWidth={1}
          />
          <Line
            type="monotone"
            dataKey="W4A16"
            name="W4A16"
            stroke="var(--chart-red)"
            strokeWidth={1}
          />
        </LineChart>
      </ResponsiveContainer>
      <figcaption style={{ textAlign: "center" }}>{caption}</figcaption>
    </figure>
  );
};

export default ThroughputChart;
