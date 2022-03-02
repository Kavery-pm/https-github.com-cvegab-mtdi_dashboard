const { blue } = require("@material-ui/core/colors");


let chartColor = "#FFFFFF";
// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################
const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

// ##############################
// // // Chart variables
// #############################

// #########################################
// // // used inside src/views/Dashboard.js and src/views/Charts.js
// #########################################
const chartExample1 = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "Active Users",
        borderColor: "#6bd098",
        pointRadius: 0,
        pointHoverRadius: 0,
        fill: false,
        borderWidth: 3,
        barPercentage: 1.6,
        tension: 0.4,
        data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },

      tooltips: {
        enabled: false,
      },
    },

    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5,
          //padding: 20
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
        },
      },
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample2 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);

    let gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: ["12pm", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
      datasets: [
        {
          label: "Email Stats",
          borderColor: "#ef8156",
          pointHoverRadius: 0,
          pointRadius: 0,
          fill: false,
          backgroundColor: gradientFill,
          borderWidth: 3,
          barPercentage: 1.6,
          tension: 0.4,
          data: [40, 500, 650, 700, 1200, 1250, 1300, 1900],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },

      tooltips: {
        enabled: false,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
        },
      },
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample3 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#2CA8FF");
    gradientStroke.addColorStop(1, chartColor);

    let gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.4));
    return {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
      ],
      datasets: [
        {
          label: "Active Countries",
          backgroundColor: gradientFill,
          borderColor: "#fbc658",
          pointHoverRadius: 0,
          pointRadius: 0,
          fill: false,
          borderWidth: 3,
          barPercentage: 1.6,
          tension: 0.4,
          data: [80, 78, 86, 96, 83, 85, 76, 75, 88, 90],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },

      tooltips: {
        enabled: false,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
        },
      },
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample4 = {
  data: {
    labels: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ],
    datasets: [
      {
        label: "Data",
        borderColor: "#fcc468",
        fill: true,
        backgroundColor: "#fcc468",
        hoverBorderColor: "#fcc468",
        borderWidth: 8,
        barPercentage: 0.4,
        data: [
          100,
          120,
          80,
          100,
          90,
          130,
          110,
          100,
          80,
          110,
          130,
          140,
          130,
          120,
          130,
          80,
          100,
          90,
          120,
          130,
        ],
      },
      {
        label: "Data",
        borderColor: "#4cbdd7",
        fill: true,
        backgroundColor: "#4cbdd7",
        hoverBorderColor: "#4cbdd7",
        borderWidth: 8,
        barPercentage: 0.4,
        data: [
          80,
          140,
          50,
          120,
          50,
          150,
          60,
          130,
          50,
          130,
          150,
          100,
          110,
          80,
          140,
          50,
          140,
          50,
          110,
          150,
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
        
      },

      tooltips: {
        tooltipFillColor: "rgba(0,0,0,0.5)",
        tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        tooltipFontSize: 20,
        tooltipFontStyle: "normal",
        tooltipFontColor: "#fff",
        tooltipTitleFontFamily:
          "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        tooltipTitleFontSize: 14,
        tooltipTitleFontStyle: "bold",
        tooltipTitleFontColor: "#fff",
        tooltipYPadding: 6,
        tooltipXPadding: 6,
        tooltipCaretSize: 8,
        tooltipCornerRadius: 6,
        tooltipXOffset: 10,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: true,
          maxTicksLimit: 5,
          padding: 20,
        },
        grid: {
          zeroLineColor: "transparent",
          display: true,
          drawBorder: false,
          color: "#9f9f9f",
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
        },
      },
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
// const chartExample5 = {
//   data: {
//     labels: [1, 2],
//     datasets: [
//       {
//         label: "Emails",
//         pointRadius: 0,
//         pointHoverRadius: 0,
//         backgroundColor: ["#4acccd", "#f4f3ef"],
//         borderWidth: 0,
//         // barPercentage: 1.6,
//         data: [60, 40],
//       },
//     ],
//   },
//     options: {
//     plugins: {
//       legend: {
//         display: false,
        
//       },

     
//       },
    
//     scales: {
//       yAxes: {
        
//         ticks: {
//           color: "#9f9f9f",
//           // beginAtZero: true,
//           maxTicksLimit: 6,
//           borderWidth: 0,
//         barPercentage: 0,
//           // padding: 20,
     

//           // callback: function(data) {
//           //   let number  = data;
//           //           let totalValueFormatted = new Intl.NumberFormat("es-CL",{
//           //             style:'currency',
//           //             currency:'CLP'
//           //           }).format(number);
//           //            return totalValueFormatted
//           // }
//         },
//          },
//         grid: {
//           zeroLineColor: "transparent",
//           display: true,
//           drawBorder: false,
//           color: "#9f9f9f",
//         },
      
//       xAxes: {
//         grid: {
//           display: false,
//           drawBorder: false,
//         },
//         ticks: {
//           padding: 20,
//           // color: "#9f9f9f",
          
//           color: "blue",
//         },
//       },
//     },
//     },
// };

const chartExample5 = {
  data: {
    labels: [1, 2],
    barThickness: 20,
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#4acccd", "#f4f3ef"],
        borderWidth: 0,
        // barPercentage: 1.6,
        data: [60, 40],
      },
    ],
  },
    options: {
    plugins: {
      legend: {
        display: false,
      },
    

      
    },
 
    scales: {
      y: {
        gridLines: { drawBorder: false, lineWidth: 0 },
        ticks: {
          color: "#9f9f9f", 
          // beginAtZero: true,
          maxTicksLimit:6,
          fontSize: 40,
          // padding: 20,
          callback: function(data) {
            let number  = data;
                   let totalValueFormatted = new Intl.NumberFormat("es-CL",{
                     style:'currency',
                    currency:'CLP'
                   }).format(number);
                     return totalValueFormatted
          }
      
        },
         },
        grid: {
          zeroLineColor: "transparent",
          display: false,
          drawBorder: false,
          color: "#9f9f9f",
        },
      
      x: {
        grid: {
          display: false,
          drawBorder: false,
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 1,
          color: "#9f9f9f",
     
        },
      },
    },
      
    
},
};
// #########################################
// // // used inside src/views/Dashboard.js
// #########################################



const chartExample6 = {
  data: {
    labels: [1, 2],
    barThickness: 20,
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#4acccd", "#f4f3ef"],
        borderWidth: 0,
        // barPercentage: 1.6,
        data: [60, 40],
      },
    ],
  },
    options: {
    plugins: {
      legend: {
        display: false,
        
      },

      
    },
 
    scales: {
      y: {
        gridLines: { drawBorder: false, lineWidth: 0 },
        ticks: {
          color: "#9f9f9f", 
          // beginAtZero: true,
          maxTicksLimit:6,
          fontSize: 100,
          // padding: 20,
      
        },
         },
        grid: {
          zeroLineColor: "transparent",
          display: false,
          drawBorder: false,
          color: "#9f9f9f",
        },
      
      x: {
        grid: {
          display: false,
          drawBorder: false,
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 0,
          color: "#9f9f9f",
        },
      },
      },
      
    
},
};

const chartExample7 = {
  data: {
    labels: [1, 2],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#f17e5d", "#f4f3ef"],
        borderWidth: 0,
        barPercentage: 1.6,
        data: [80, 20],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      title: {
        display: true,
        text: "80%",
        position: "bottom",
        color: "#66615c",
        font: {
          weight: 400,
          size: 30,
        },
      },
    },
    maintainAspectRatio: false,
    cutout: "90%",
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample8 = {
  data: {
    labels: [1, 2],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#66615b", "#f4f3ef"],
        borderWidth: 0,
        barPercentage: 1.6,
        data: [11, 89],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
      title: {
        display: true,
        text: "11%",
        position: "bottom",
        color: "#66615c",
        font: {
          weight: 400,
          size: 30,
        },
      },
    },
    maintainAspectRatio: false,
    cutout: "90%",
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

// #########################################
// // // used inside src/views/Charts.js
// #########################################

const chartExample9 = {
  data: {
    labels: ["6pm", "9pm", "11pm", "2am", "4am", "6am", "8am"],
    datasets: [
      {
        label: "Active Users",
        borderColor: "#f17e5d",
        pointBackgroundColor: "#f17e5d",
        pointRadius: 3,
        pointHoverRadius: 3,
        lineTension: 0,
        fill: false,
        borderWidth: 3,
        barPercentage: 1.6,
        data: [200, 250, 300, 350, 280, 330, 400],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },

      tooltips: {
        enabled: false,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5,
        },
        grid: {
          drawBorder: false,
          borderDash: [8, 5],
          zeroLineColor: "transparent",
          color: "#9f9f9f",
        },
      },
      x: {
        grid: {
          drawBorder: false,
          borderDash: [8, 5],
          color: "#9f9f9f",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
        },
      },
    },
  },
};

// #########################################
// // // used inside src/views/Charts.js
// #########################################

const chartExample10 = {
  data: {
    labels: [
      'MercadoLibre',
      'Shopify',
      'Rappi',
      'Ripley',
      'Linio',
      'CornerShop',
      'Woo commerce',
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ],
    datasets: [
      {
        label: "Data",
        borderColor: "#344FD5",
        fill: true,
        backgroundColor: "#344FD5",
        hoverBorderColor: "#06CBC1",
        borderWidth: 5,
        barPercentage: 0.4,
        data: [
          100,
          120,
          80,
          100,
          90,
          130,
          110,
          100,
          80,
          110,
          130,
          140,
          130,
          120,
          130,
          80,
          100,
          90,
          120,
          130,
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },

      tooltips: {
        tooltipFillColor: "rgba(0,0,0,0.5)",
        tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        tooltipFontSize: 14,
        tooltipFontStyle: "normal",
        tooltipFontColor: "#fff",
        tooltipTitleFontFamily:
          "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        tooltipTitleFontSize: 14,
        tooltipTitleFontStyle: "bold",
        tooltipTitleFontColor: "#fff",
        tooltipYPadding: 6,
        tooltipXPadding: 6,
        tooltipCaretSize: 8,
        tooltipCornerRadius: 6,
        tooltipXOffset: 10,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          fontStyle: "bold",
          beginAtZero: true,
          maxTicksLimit: 5,
          padding: 20,
        },
        grid: {
          zeroLineColor: "transparent",
          display: true,
          drawBorder: false,
          color: "#9f9f9f",
        },
      },
      x: {
        grid: {
          zeroLineColor: "white",
          display: false,
          drawBorder: false,
          color: "transparent",
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
          fontStyle: "bold",
        },
      },
    },
  },
};
const chartExample100 = {
  data: {
    labels: [
      'MercadoLibre',
      'Shopify',
      'Rappi',
      'Ripley',
      'Linio',
      'CornerShop',
      'Woocommerce',
    ],
    datasets: [
      {
        label: "Data",
        borderColor: "#344FD5",
        fill: true,
        backgroundColor: "#344FD5",
        hoverBorderColor: "#06CBC1",
        borderWidth: 0,
        borderRadius:5,
        barPercentage: 0.5,
        data: [
          100,
          120,
          80,
          100,
          90,
          130,
          110,
          // 100,
          // 80,
          // 110,
          // 130,
          // 140,
          // 130,
          // 120,
          // 130,
          // 80,
          // 100,
          // 90,
          // 120,
          // 130,
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },

      tooltips: {
        tooltipFillColor: "rgba(0,0,0,0.5)",
        tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        tooltipFontSize: 14,
        tooltipFontStyle: "normal",
        tooltipFontColor: "#fff",
        tooltipTitleFontFamily:
          "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        tooltipTitleFontSize: 14,
        tooltipTitleFontStyle: "bold",
        tooltipTitleFontColor: "#fff",
        tooltipYPadding: 6,
        tooltipXPadding: 6,
        tooltipCaretSize: 8,
        tooltipCornerRadius: 6,
        tooltipXOffset: 10,
      },
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          fontStyle: "bold",
          beginAtZero: true,
          maxTicksLimit: 5,
          padding: 20,
        },
        grid: {
          zeroLineColor: "transparent",
          display: true,
          drawBorder: false,
          color: "#9f9f9f",
        },
      },
      x: {
        grid: {
          zeroLineColor: "white",
          display: false,
          drawBorder: false,
          color: "transparent",
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
          fontStyle: "bold",
        },
      },
    },
  },
};
// #########################################
// // // used inside src/views/Charts.js
// #########################################

const chartExample11 = {
  // data: {
  //   labels: [1, 2, 3,4],
  //   datasets: [
  //     {
  //       label: "Emails",
  //       pointRadius: 0,
  //       pointHoverRadius: 0,
  //       backgroundColor: ["#344FD5", "#06CBC1", "#FFD88C",'#FF6059'],
  //       borderWidth: 0,
  //       barPercentage: 1.6,
  //       data: [542, 480, 430,211],
  //     },
  //   ],
  // },
  options: {
    plugins: {
      legend: {
        display: false,
      },

      tooltips: {
        enabled: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          display: false,
          callback: function(value, index, ticks) {
            return '$' + value;
        }
        },
        grid: {
          drawBorder: false,
          zeroLineColor: "transparent",
          color: "rgba(255,255,255,0.05)",
        },
      },
      x: {
        grid: {
          drawBorder: false,
          color: "rgba(255,255,255,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

// #########################################
// // // used inside src/views/Charts.js
// #########################################

const chartExample12 = {
  data: (canvas) => {
    return {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      datasets: [
        {
          borderColor: "#6bd098",
          backgroundColor: "#6bd098",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354],
        },
        {
          borderColor: "#f17e5d",
          backgroundColor: "#f17e5d",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420],
        },
        {
          borderColor: "#fcc468",
          backgroundColor: "#fcc468",
          pointRadius: 0,
          pointHoverRadius: 0,
          borderWidth: 3,
          tension: 0.4,
          fill: true,
          data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484],
        },
      ],
    };
  },
  options: {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      y: {
        ticks: {
          color: "#9f9f9f",
          beginAtZero: false,
          maxTicksLimit: 5,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        barPercentage: 1.6,
        grid: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
        },
      },
    },
  },
};
const data1 = {
  labels: ["Organic", "Sponsored", "Organic", "Sponsored"],
  previousDate: {
    label: "08/10/2019 - 09/30/2019",
    dataSet: [10000, 150000, 10000, 150000]
  },
  currentDate: {
    label: "10/01/2019 - 11/20/2019",
    dataSet: [10000, 225000, 10000, 225000]
  }
};

// let imagesArray = [Image1];
const labels = ['Red Vans', 'Blue Vans', 'Green Vans', 'Gray Vans'];
const images = ['https://i.stack.imgur.com/2RAv2.png', 'https://i.stack.imgur.com/Tq5DA.png', 'https://i.stack.imgur.com/3KRtW.png', 'https://i.stack.imgur.com/iLyVi.png'];
const values = [48, 56, 33, 44];

const chartExample13 = {
  
   
  options: {
    responsive: true,
    // maintainAspectRatio: false,
    aspectRatio: 2,
    // plugins: {
    //   legend: {
    //     display: false, 
    //   },

    // },
    plugins: [{
      afterDraw: chart => {      
        var ctx = chart.chart.ctx; 
        var xAxis = chart.scales['x-axis-0'];
        var yAxis = chart.scales['y-axis-0'];
        xAxis.ticks.forEach((value, index) => {  
          var x = xAxis.getPixelForTick(index);      
          var image = new Image();
          image.src = images[index],
          ctx.drawImage(image, x - 12, yAxis.bottom + 10);
        });      
      }
    }],
    scales: {
      
        grid: {
          drawBorder: false,
          display: false,
          zeroLineColor: "transparent",
        }
      
    },
    
    scales: {
      grid: {
        drawBorder: false,
        display:false,
      },
      y: {
        display: true,
        position: "right",
        
        ticks: {
          color: "#9f9f9f",
          beginAtZero: true,
          maxTicksLimit: 5,
          // padding: 100,
          
        },
        grid: {
          zeroLineColor: "transparent",
          display: false,
          drawBorder: false,
          color: "#EBEBEBf",
          // borderDash: [8, 6],
          lineWidth: 0,
        },
        
      },
      
      
      x: {
        
        display: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          padding: 20,
          color: "#9f9f9f",
       
        // callback: function(index){
        //   return imagesArray;
        
        // }
        },
      },
    },
  },
  
};

module.exports = {
  // used for Charts and Dashboard views
  chartExample1,
  // used for Dashboard view
  chartExample2,
  // used for Dashboard view
  chartExample3,
  // used for Charts and Dashboard views
  chartExample4,
  // used for Dashboard view
  chartExample5,
  // used for Dashboard view
  chartExample6,
  // used for Dashboard view
  chartExample7,
  // used for Dashboard view
  chartExample8,
  // used for Charts view
  chartExample9,
  // used for Charts view
  chartExample10,
  // used for Charts view
  chartExample11,
  // used for Charts view
  chartExample12,
  chartExample13,
  chartExample100,
  data1,
  
};
