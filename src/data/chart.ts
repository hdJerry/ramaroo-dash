const generateDays = () => {
  const arr = Array.from({ length: 31 }, (_, i) =>
    i + 1 > 9 ? i + 1 : `0${i + 1}`
  );

  return arr;
};
export const chartData = {
  type: "line",
  data: {
    labels: [...generateDays()],
    datasets: [
      {
        label: "Current Period",
        data: [
          100, 200, 90, 120, 180, 180, 120, 200, 280, 350, 380, 400, 340, 400,
          350, 420, 500, 250, 120, 320, 280, 120, 180, 250, 200, 120, 180, 180,
          120, 200, 280,
        ],
        backgroundColor: "#4262FF33",
        borderColor: "#4262FF80",
        borderWidth: 3,
      },
      {
        label: "Previous Period",
        data: [
          200, 90, 110, 80, 120, 100, 110, 200, 110, 120, 180, 200, 220, 180,
          200, 550, 220, 150, 250, 320, 220, 250, 300, 90, 150, 80, 120, 100,
          110, 200, 110,
        ],
        backgroundColor: "#4262FF33",
        borderColor: "#4262FF",
        borderDash: [7],
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            padding: 25,
          },
        },
      ],
    },
  },
};

export default chartData;
