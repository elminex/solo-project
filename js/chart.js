// CHART 
const ctx = document.getElementById('general-chart').getContext('2d');

const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
    datasets: [{
        label: "Signups",
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        data: [350, 205, 220, 380, 420, 400, 310, 280, 300],
      },
      {
        label: "FTD",
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [400, 190, 300, 260, 440, 90, 210, 501, 320],
      },
      {
        label: "Earned",
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        hidden: true,
      }
    ]
  },
});