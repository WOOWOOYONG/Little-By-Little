const myChart = document.getElementById("myChart").getContext("2d");

//global options
Chart.defaults.font.size = 24;
Chart.defaults.font.family = "Noto Sans TC";

const popChart = new Chart(myChart, {
  type: "bar", // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data: {
    labels: [
      "台北市",
      "新北市",
      "桃園市",
      "新竹市",
      "台中市",
      "台南市",
      "高雄市",
    ],
    datasets: [
      {
        label: "2022年7月人口數",
        data: [2464452, 3974683, 2266824, 450655, 2800981, 1850735, 2722904],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgb(207, 183, 156)",
        ],
        borderWidth: 1,
        borderColor: "#777",
        hoverBorderWidth: 3,
        hoverBorderColor: "#000",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "right",
        align: "start",
      },
      title: {
        display: true,
        text: "台灣主要城市人口數量",
        font: {
          size: 30,
        },
        padding: {
          bottom: 50,
        },
      },
    },
  },
});
