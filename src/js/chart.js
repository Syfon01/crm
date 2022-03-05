import helper from "./helper";
import chart from "chart.js";
import colors from "./colors";

(function () {
    "use strict";

    // Chart
    if ($("#report-line-chart").length) {
        let ctx = $("#report-line-chart")[0].getContext("2d");
        let myChart = new chart(ctx, {
            type: "line",
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
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [
                            0, 200, 250, 200, 700, 550, 650, 1050, 950, 1100,
                            900, 1200,
                        ],
                        borderWidth: 2,
                        borderColor: colors.primary(0.8),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                    {
                        label: "# of Votes",
                        data: [
                            0, 300, 400, 560, 320, 600, 720, 850, 690, 805,
                            1200, 1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: $("html").hasClass("dark")
                            ? colors.slate["400"](0.6)
                            : colors.slate["400"](),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: colors.slate["500"](0.8),
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: colors.slate["500"](0.8),
                                callback: function (value, index, values) {
                                    return "$" + value;
                                },
                            },
                            gridLines: {
                                color: $("html").hasClass("dark")
                                    ? colors.slate["500"](0.3)
                                    : colors.slate["300"](),
                                zeroLineColor: $("html").hasClass("dark")
                                    ? colors.slate["500"](0.3)
                                    : colors.slate["300"](),
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if ($("#report-pie-chart").length) {
        let ctx = $("#report-pie-chart")[0].getContext("2d");
        let myPieChart = new chart(ctx, {
            type: "pie",
            data: {
                labels: [
                    "NR",
                    "PR",
                    "AR",
                    "ENP",
                ],
                datasets: [
                    {
                        data: [450, 100, 350, 200],
                        backgroundColor: [
                            colors.primary(0.9),
                            colors.warning(0.9),
                            colors.success(0.9),
                            colors.dark(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.primary(0.9),
                            colors.warning(0.9),
                            colors.success(0.9),
                            colors.dark(0.9),
                        ],
                        borderWidth: 2,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.white,
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
            },
        });
    }

    if ($("#report-donut-chart").length) {
        let ctx = $("#report-donut-chart")[0].getContext("2d");
        let myDoughnutChart = new chart(ctx, {
            type: "doughnut",
            data: {
                labels: [
                    "31 - 50 Years old",
                    ">= 50 Years old",
                    "17 - 30 Years old",
                ],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 5,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.white,
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                cutoutPercentage: 80,
            },
        });
    }

    if ($("#report-bar-chart").length) {
        // Fake visitor data
        let reportBarChartData = new Array(40).fill(0).map((data, key) => {
            if (key % 3 == 0 || key % 5 == 0) {
                return Math.ceil(Math.random() * (0 - 20) + 20);
            } else {
                return Math.ceil(Math.random() * (0 - 7) + 7);
            }
        });

        // Fake visitor bar color
        let reportBarChartColor = reportBarChartData.map((data) => {
            if (data >= 8 && data <= 14) {
                return $("html").hasClass("dark")
                    ? "#2E51BBA6"
                    : colors.primary(0.65);
            } else if (data >= 15) {
                return $("html").hasClass("dark")
                    ? "#2E51BB"
                    : colors.primary();
            }

            return $("html").hasClass("dark")
                ? "#2E51BB59"
                : colors.primary(0.35);
        });

        let ctx = $("#report-bar-chart")[0].getContext("2d");
        let myBarChart = new chart(ctx, {
            type: "bar",
            data: {
                labels: reportBarChartData,
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.2,
                        barThickness: 10,
                        maxBarThickness: 12,
                        minBarLength: 2,
                        data: reportBarChartData,
                        backgroundColor: reportBarChartColor,
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                },
            },
        });

        setInterval(() => {
            // Swap visitor data
            let newData = reportBarChartData[0];
            reportBarChartData.shift();
            reportBarChartData.push(newData);

            // Swap visitor bar color
            let newColor = reportBarChartColor[0];
            reportBarChartColor.shift();
            reportBarChartColor.push(newColor);

            myBarChart.update();
        }, 1000);
    }

    if ($("#report-bar-chart-1").length) {
        let ctx = $("#report-bar-chart-1")[0].getContext("2d");
        let myChart = new chart(ctx, {
            type: "bar",
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
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        borderWidth: 2,
                        borderColor: "transparent",
                        barPercentage: 0.2,
                        barThickness: 12,
                        maxBarThickness: 6.5,
                        minBarLength: 2,
                        data: [
                            60, 150, 30, 200, 180, 50, 180, 120, 230, 180, 250,
                            270,
                        ],
                        backgroundColor: colors.primary(0.9),
                    },
                    {
                        label: "VueJs Template",
                        borderWidth: 2,
                        borderColor: "transparent",
                        barPercentage: 0.2,
                        barThickness: 12,
                        maxBarThickness: 6.5,
                        minBarLength: 2,
                        data: [
                            50, 135, 40, 180, 190, 60, 150, 90, 250, 170, 240,
                            250,
                        ],
                        backgroundColor: $("html").hasClass("dark")
                            ? colors.darkmode["400"]()
                            : colors.slate["300"](),
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: 11,
                                fontColor: colors.slate["500"](0.8),
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                color: $("html").hasClass("dark")
                                    ? colors.darkmode["300"](0.8)
                                    : colors.slate["300"](),
                                zeroLineColor: $("html").hasClass("dark")
                                    ? colors.darkmode["300"](0.8)
                                    : colors.slate["300"](),
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if ($("#report-donut-chart-1").length) {
        let ctx = $("#report-donut-chart-1")[0].getContext("2d");
        let myDoughnutChart = new chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Yellow", "Dark"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 2,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.white,
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                cutoutPercentage: 83,
            },
        });
    }

    if ($("#report-donut-chart-2").length) {
        let ctx = $("#report-donut-chart-2")[0].getContext("2d");
        let myDoughnutChart = new chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Yellow", "Dark"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 2,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.white,
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                cutoutPercentage: 83,
            },
        });
    }

    if ($("#report-donut-chart-3").length) {
        let ctx = $("#report-donut-chart-3")[0].getContext("2d");
        let myDoughnutChart = new chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Yellow", "Dark"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 5,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.slate[200](),
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                cutoutPercentage: 82,
            },
        });
    }

    if ($(".simple-line-chart-1").length) {
        $(".simple-line-chart-1").each(function () {
            let ctx = $(this)[0].getContext("2d");
            let myChart = new chart(ctx, {
                type: "line",
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
                        "Nov",
                        "Dec",
                    ],
                    datasets: [
                        {
                            label: "# of Votes",
                            data:
                                $(this).data("random") !== undefined
                                    ? helper.randomNumbers(0, 5, 12)
                                    : [
                                          0, 200, 250, 200, 500, 450, 850, 1050,
                                          950, 1100, 900, 1200,
                                      ],
                            borderWidth: 2,
                            borderColor:
                                $(this).data("line-color") !== undefined
                                    ? $(this).data("line-color")
                                    : colors.primary(0.8),
                            backgroundColor: "transparent",
                            pointBorderColor: "transparent",
                        },
                    ],
                },
                options: {
                    legend: {
                        display: false,
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    display: false,
                                },
                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    display: false,
                                },
                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                    },
                },
            });
        });
    }

    if ($(".simple-line-chart-2").length) {
        $(".simple-line-chart-2").each(function () {
            let ctx = $(this)[0].getContext("2d");
            let myChart = new chart(ctx, {
                type: "line",
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
                        "Nov",
                        "Dec",
                    ],
                    datasets: [
                        {
                            label: "# of Votes",
                            data:
                                $(this).data("random") !== undefined
                                    ? helper.randomNumbers(0, 5, 12)
                                    : [
                                          0, 300, 400, 560, 320, 600, 720, 850,
                                          690, 805, 1200, 1010,
                                      ],
                            borderWidth: 2,
                            borderDash: [2, 2],
                            borderColor:
                                $(this).data("line-color") !== undefined
                                    ? $(this).data("line-color")
                                    : colors.slate["300"](),
                            backgroundColor: "transparent",
                            pointBorderColor: "transparent",
                        },
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    legend: {
                        display: false,
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    display: false,
                                },
                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    display: false,
                                },
                                gridLines: {
                                    display: false,
                                },
                            },
                        ],
                    },
                },
            });
        });
    }

    if ($(".simple-line-chart-3").length) {
        let ctx = $(".simple-line-chart-3")[0].getContext("2d");
        let myChart = new chart(ctx, {
            type: "line",
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
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [
                            0, 200, 250, 200, 700, 550, 650, 1050, 950, 1100,
                            900, 1200,
                        ],
                        borderWidth: 2,
                        borderColor: colors.primary(0.8),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                    {
                        label: "# of Votes",
                        data: [
                            0, 300, 400, 560, 320, 600, 720, 850, 690, 805,
                            1200, 1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode["100"]()
                            : colors.slate["400"](),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if ($(".simple-line-chart-4").length) {
        let ctx = $(".simple-line-chart-4")[0].getContext("2d");
        let myChart = new chart(ctx, {
            type: "line",
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
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [
                            0, 200, 250, 200, 700, 550, 650, 1050, 950, 1100,
                            900, 1200,
                        ],
                        borderWidth: 2,
                        borderColor: colors.primary(0.8),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                    {
                        label: "# of Votes",
                        data: [
                            0, 300, 400, 560, 320, 600, 720, 850, 690, 805,
                            1200, 1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode["100"]()
                            : colors.slate["400"](),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    // Chart widget page
    if ($("#vertical-bar-chart-widget").length) {
        let ctx = $("#vertical-bar-chart-widget")[0].getContext("2d");
        let myChart = new chart(ctx, {
            type: "bar",
            data: {
                labels: [
                    "ALG",
                    "ANG",
                    "BLR",
                    "BN",
                    "BF",
                    "CD",
                    "CMR",
                    "CH",
                    "CIV",
                    "CRI",
                    "DRC",
                    "DNK",
                    "GAM",
                    "GH",
                    "KEN",
                    "LIB",
                    "MAL",
                    "NIG",
                    "SN",
                    "TAZ",
                    "UG",
                    "ZAM",
                ],
                datasets: [
                    {
                        label: "NR",
                        barPercentage: 0.2,
                        barThickness: 10,
                        maxBarThickness: 12,
                        minBarLength: 2,
                        data: [400, 200, 250, 200, 500, 200, 500,200, 500, 450, 100, 300, 850, 450, 850, 450, 850, 200, 500, 450, 850, 1050],
                        backgroundColor: colors.primary(),
                        hoverBackgroundColor:colors.primary()
                    },
                    {
                        label: "PR",
                        barPercentage: 0.2,
                        barThickness: 10,
                        maxBarThickness: 12,
                        minBarLength: 2,
                        data: [500, 200, 500, 450, 850, 300, 400, 560,200,200, 500, 100, 300, 450, 850, 500, 450, 850, 320, 600, 720, 850],
                        backgroundColor: colors.warning(),
                        hoverBackgroundColor:colors.warning()
                    },
                    {
                        label: "AR",
                        barPercentage: 0.2,
                        barThickness: 10,
                        maxBarThickness: 12,
                        minBarLength: 2,
                        data: [700, 300, 400,200, 500, 450, 850, 560,200, 500, 450, 100, 300, 850, 320, 600, 720, 200, 500, 450, 850,850],
                        backgroundColor:colors.success(),
                        hoverBackgroundColor:colors.success()
                    },
                    {
                        label: "ENP",
                        barPercentage: 0.2,
                        barThickness: 10,
                        maxBarThickness: 12,
                        minBarLength: 2,
                        data: [500, 300, 400,200, 500,200, 500, 450, 850, 450, 850, 100, 300, 560, 320, 600, 200, 500, 450, 850,720, 850],
                        backgroundColor: colors.dark(),
                        hoverBackgroundColor:colors.dark()
                    },
                ],
            },
            options: {
                legend: {
                    labels: {
                        fontColor: colors.primary,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: colors.slate["500"](0.8),
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: colors.slate["500"](0.8),
                                callback: function (value, index, values) {
                                    return "" + value;
                                },
                            },
                            gridLines: {
                                color: $("html").hasClass("dark")
                                    ? colors.slate["500"](0.3)
                                    : colors.slate["300"](),
                                zeroLineColor: $("html").hasClass("dark")
                                    ? colors.slate["500"](0.3)
                                    : colors.slate["300"](),
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if ($("#horizontal-bar-chart-widget").length) {
        let ctx = $("#horizontal-bar-chart-widget")[0].getContext("2d");
        let myChart = new chart(ctx, {
            type: "horizontalBar",
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
                ],
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.2,
                        barThickness: 10,
                        maxBarThickness: 12,
                        minBarLength: 2,
                        data: [0, 200, 250, 200, 500, 450, 850, 1050],
                        backgroundColor: colors.primary(),
                    },
                    {
                        label: "VueJs Template",
                        barPercentage: 0.2,
                        barThickness: 10,
                        maxBarThickness: 12,
                        minBarLength: 2,
                        data: [0, 300, 400, 560, 320, 600, 720, 850],
                        backgroundColor: $("html").hasClass("dark")
                            ? colors.darkmode["200"]()
                            : colors.slate["300"](),
                    },
                ],
            },
            options: {
                legend: {
                    labels: {
                        fontColor: colors.slate["500"](0.8),
                    },
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: colors.slate["500"](0.8),
                                callback: function (value, index, values) {
                                    return "$" + value;
                                },
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: colors.slate["500"](0.8),
                            },
                            gridLines: {
                                color: $("html").hasClass("dark")
                                    ? colors.slate["500"](0.3)
                                    : colors.slate["300"](),
                                zeroLineColor: $("html").hasClass("dark")
                                    ? colors.slate["500"](0.3)
                                    : colors.slate["300"](),
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if ($("#stacked-bar-chart-widget").length) {
        let ctx = $("#stacked-bar-chart-widget")[0].getContext("2d");
        let myChart = new chart(ctx, {
            type: "bar",
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
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.2,
                        barThickness: 10,
                        maxBarThickness: 12,
                        minBarLength: 2,
                        backgroundColor: colors.primary(),
                        data: helper.randomNumbers(-100, 100, 12),
                    },
                    {
                        label: "VueJs Template",
                        barPercentage: 0.2,
                        barThickness: 10,
                        maxBarThickness: 12,
                        minBarLength: 2,
                        backgroundColor: $("html").hasClass("dark")
                            ? colors.darkmode["200"]()
                            : colors.slate["300"](),
                        data: helper.randomNumbers(-100, 100, 12),
                    },
                ],
            },
            options: {
                legend: {
                    labels: {
                        fontColor: colors.slate["500"](0.8),
                    },
                },
                scales: {
                    xAxes: [
                        {
                            stacked: true,
                            ticks: {
                                fontSize: "12",
                                fontColor: colors.slate["500"](0.8),
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            stacked: true,
                            ticks: {
                                fontSize: "12",
                                fontColor: colors.slate["500"](0.8),
                                callback: function (value, index, values) {
                                    return "$" + value;
                                },
                            },
                            gridLines: {
                                color: $("html").hasClass("dark")
                                    ? colors.slate["500"](0.3)
                                    : colors.slate["300"](),
                                zeroLineColor: $("html").hasClass("dark")
                                    ? colors.slate["500"](0.3)
                                    : colors.slate["300"](),
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if ($("#stacked-bar-chart-1").length) {
        let ctx = $("#stacked-bar-chart-1")[0].getContext("2d");
        let myChart = new chart(ctx, {
            type: "bar",
            data: {
                labels: [...Array(16).keys()],
                datasets: [
                    {
                        label: "Html Template",
                        barPercentage: 0.2,
                        barThickness: 10,
                        maxBarThickness: 12,
                        minBarLength: 2,
                        backgroundColor: colors.primary(0.8),
                        data: helper.randomNumbers(-100, 100, 16),
                    },
                    {
                        label: "VueJs Template",
                        barPercentage: 0.2,
                        barThickness: 10,
                        maxBarThickness: 12,
                        minBarLength: 2,
                        backgroundColor: $("html").hasClass("dark")
                            ? colors.darkmode["200"]()
                            : colors.slate["300"](),
                        data: helper.randomNumbers(-100, 100, 16),
                    },
                ],
            },
            options: {
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            stacked: true,
                            ticks: {
                                fontSize: "12",
                                fontColor: colors.slate["500"](0.8),
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            stacked: true,
                            ticks: {
                                fontSize: "12",
                                fontColor: colors.slate["500"](0.8),
                                callback: function (value, index, values) {
                                    return "$" + value;
                                },
                            },
                            gridLines: {
                                color: $("html").hasClass("dark")
                                    ? colors.slate["500"](0.3)
                                    : colors.slate["300"](),
                                zeroLineColor: $("html").hasClass("dark")
                                    ? colors.slate["500"](0.3)
                                    : colors.slate["300"](),
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if ($("#line-chart-widget").length) {
        let ctx = $("#line-chart-widget")[0].getContext("2d");
        let myChart = new chart(ctx, {
            type: "line",
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
                    "Nov",
                    "Dec",
                ],
                datasets: [
                    {
                        label: "Html Template",
                        data: [
                            0, 200, 250, 200, 500, 450, 850, 1050, 950, 1100,
                            900, 1200,
                        ],
                        borderWidth: 2,
                        borderColor: colors.primary(),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                    {
                        label: "VueJs Template",
                        data: [
                            0, 300, 400, 560, 320, 600, 720, 850, 690, 805,
                            1200, 1010,
                        ],
                        borderWidth: 2,
                        borderDash: [2, 2],
                        borderColor: $("html").hasClass("dark")
                            ? colors.slate["400"](0.6)
                            : colors.slate["400"](),
                        backgroundColor: "transparent",
                        pointBorderColor: "transparent",
                    },
                ],
            },
            options: {
                legend: {
                    labels: {
                        fontColor: colors.slate["500"](0.8),
                    },
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: colors.slate["500"](0.8),
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontSize: "12",
                                fontColor: colors.slate["500"](0.8),
                                callback: function (value, index, values) {
                                    return "$" + value;
                                },
                            },
                            gridLines: {
                                color: $("html").hasClass("dark")
                                    ? colors.slate["500"](0.3)
                                    : colors.slate["300"](),
                                zeroLineColor: $("html").hasClass("dark")
                                    ? colors.slate["500"](0.3)
                                    : colors.slate["300"](),
                                borderDash: [2, 2],
                                zeroLineBorderDash: [2, 2],
                                drawBorder: false,
                            },
                        },
                    ],
                },
            },
        });
    }

    if ($("#donut-chart-widget").length) {
        let ctx = $("#donut-chart-widget")[0].getContext("2d");
        let myDoughnutChart = new chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Html", "Vuejs", "Laravel"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 5,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.white,
                    },
                ],
            },
            options: {
                legend: {
                    labels: {
                        fontColor: colors.slate["500"](0.8),
                    },
                },
                cutoutPercentage: 80,
            },
        });
    }

    if ($("#pie-chart-widget").length) {
        let ctx = $("#pie-chart-widget")[0].getContext("2d");
        let myPieChart = new chart(ctx, {
            type: "pie",
            data: {
                labels: ["Html", "Vuejs", "Laravel"],
                datasets: [
                    {
                        data: [15, 10, 65],
                        backgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        hoverBackgroundColor: [
                            colors.pending(0.9),
                            colors.warning(0.9),
                            colors.primary(0.9),
                        ],
                        borderWidth: 5,
                        borderColor: $("html").hasClass("dark")
                            ? colors.darkmode[700]()
                            : colors.white,
                    },
                ],
            },
            options: {
                legend: {
                    labels: {
                        fontColor: colors.slate["500"](0.8),
                    },
                },
            },
        });
    }
})();
