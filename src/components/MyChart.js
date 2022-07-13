import React, { useRef } from "react";
import ReactFrappeChart from "react-frappe-charts";

export default function MyChart(props) {
  const chartRef = useRef();

  const exportChart = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.export();
    }
  };

  return (
    <div>
      <ReactFrappeChart
        ref={chartRef}
        type="bar"
        colors={["#21ba45"]}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        height={250}
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }],
        }}
      />
      <button onClick={exportChart} type="button">
        Export
      </button>
    </div>
  );
}