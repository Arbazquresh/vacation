import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
export const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "may", "June"],
        datasets: [
          {
            label: "Line Chart",
            data: [65, 40, 56, 34, 21, 8],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            borderWidth: 2,
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} style={{ width: "200px", height: "200px" }} />;
};
