var violentCrime = {
    init: function() {
        violentCrime.charts();
    },
    share: function() {
        $(".icon-twitter").on("click", function() {
            var tweet = "";
            var url = "";
            var twitter_url = "https://twitter.com/intent/tweet?text=" + tweet + "&url=" + url + "&tw_p=tweetbutton";
            window.open(twitter_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
        $(".icon-facebook").on("click", function() {
            var picture = "";
            var title = "";
            var description = "";
            var url = "";
            var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link=" + url + "&picture=" + picture + "&name=" + title + "&description=" + description + "&redirect_uri=http://www.facebook.com";
            window.open(facebook_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
    },
    charts: function() {
        var overall = document.getElementById("overall").getContext("2d");
        var overallData = [ 19017, 18091, 16460, 17718, 19462, 20164 ];
        var bytype = document.getElementById("bytype").getContext("2d");
        var bytypeData = [ [ 13736, 25186, 662, 844, 12e3, 1140 ], [ 15224, 22408, 981, 901, 15875, 1955 ] ];
        var homicides = document.getElementById("homicides").getContext("2d");
        var homicidesData = [ [ 216, 235, 211, 342, 318, 321 ], [ 369, 402, 369, 635, 667, 653 ] ];
        var timeAM = document.getElementById("timeAM").getContext("2d");
        var timePM = document.getElementById("timePM").getContext("2d");
        var timeData = [ [ 135, 133, 99, 52, 33, 24, 13, 10, 8, 14, 35, 45, 43, 45, 77, 86, 77, 90, 83, 93, 116, 161, 147, 182 ], [ 177, 163, 114, 59, 55, 34, 38, 18, 31, 43, 70, 55, 89, 130, 119, 143, 130, 151, 187, 182, 216, 255, 273, 204 ] ];
        var timeDataAM = [ [ 7.5, 7.4, 5.5, 2.9, 1.8, 1.3, .7, .6, .4, .8, 1.9, 2.5 ], [ 6, 5.6, 3.9, 2, 1.9, 1.2, 1.3, .6, 1.1, 1.5, 2.4, 1.9 ] ];
        var timeDataPM = [ [ 2.4, 2.5, 4.3, 4.8, 4.3, 5, 4.6, 5.2, 6.4, 8.9, 8.2, 10.1 ], [ 3, 4.4, 4.1, 4.9, 4.4, 5.1, 6.4, 6.2, 7.4, 8.7, 9.3, 6.9 ] ];
        Chart.defaults.global.animation.duration = 0;
        Chart.defaults.global.hover.animationDuration = 0;
        Chart.defaults.global.responsiveAnimationDuration = 0;
        Chart.defaults.global.legend.display = false;
        Chart.defaults.global.legend.fontFamily = "Inconsolata";
        Chart.defaults.global.legend.labels.fontFamily = "Inconsolata";
        Chart.defaults.global.legend.labels.fontStyle = "bold";
        Chart.defaults.global.legend.labels.fontSize = 14;
        var overallChart = new Chart(overall, {
            type: "line",
            data: {
                labels: [ "2012", "2013", "2014", "2015", "2016", "2017" ],
                datasets: [ {
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor: "rgb(73,88,113)",
                    pointBackgroundColor: "rgb(73,88,113)",
                    pointHitRadius: 30,
                    data: overallData
                } ]
            },
            options: {
                scales: {
                    yAxes: [ {
                        ticks: {
                            fontFamily: "Inconsolata",
                            fontSize: 14,
                            min: 0
                        }
                    } ],
                    xAxes: [ {
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontFamily: "Inconsolata",
                            fontSize: 14,
                            fontStyle: "bold"
                        }
                    } ]
                }
            }
        });
        var bytypeChart = new Chart(bytype, {
            type: "bar",
            data: {
                labels: [ "AGG. ASSAULT", "COMMON ASSAULT", "HOMICIDE", "RAPE", "ROBBERIES", "SHOOTING" ],
                datasets: [ {
                    label: "2012 - 2014",
                    backgroundColor: "rgba(162,169,177,.7)",
                    borderColor: "rgb(73,88,113)",
                    data: bytypeData[0]
                }, {
                    label: "2015 - 2017",
                    backgroundColor: "rgba(73,88,113,.7)",
                    borderColor: "rgb(73,88,113)",
                    data: bytypeData[1]
                } ]
            },
            options: {
                scales: {
                    yAxes: [ {
                        ticks: {
                            fontFamily: "Inconsolata",
                            fontSize: 14,
                            min: 0
                        }
                    } ],
                    xAxes: [ {
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontFamily: "Inconsolata",
                            fontSize: 14,
                            fontStyle: "bold"
                        }
                    } ]
                },
                legend: {
                    display: true
                }
            }
        });
        var homicidesChart = new Chart(homicides, {
            type: "line",
            data: {
                labels: [ "2012", "2013", "2014", "2015", "2016", "2017" ],
                datasets: [ {
                    label: "SHOOTINGS",
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor: "rgb(162,169,177)",
                    pointBackgroundColor: "rgb(162,169,177)",
                    pointHitRadius: 30,
                    data: homicidesData[1]
                }, {
                    label: "HOMICIDES",
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor: "rgb(73,88,113)",
                    pointBackgroundColor: "rgb(73,88,113)",
                    pointHitRadius: 30,
                    data: homicidesData[0]
                } ]
            },
            options: {
                scales: {
                    yAxes: [ {
                        ticks: {
                            fontFamily: "Inconsolata",
                            fontSize: 14,
                            min: 0
                        }
                    } ],
                    xAxes: [ {
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            fontFamily: "Inconsolata",
                            fontSize: 14,
                            fontStyle: "bold"
                        }
                    } ]
                },
                legend: {
                    display: true
                }
            }
        });
        var timeChart = new Chart(timeAM, {
            type: "radar",
            data: {
                labels: [ "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM" ],
                datasets: [ {
                    label: "2015 - 2017",
                    backgroundColor: "rgba(235,237,236,0.3)",
                    borderColor: "rgb(235,237,236)",
                    pointBackgroundColor: "rgb(235,237,236)",
                    pointHitRadius: 30,
                    data: timeDataAM[1]
                }, {
                    label: "2012 - 2014",
                    backgroundColor: "rgba(61,61,59,0.5)",
                    borderColor: "rgb(61,61,59)",
                    pointBackgroundColor: "rgb(61,61,59)",
                    pointHitRadius: 30,
                    data: timeDataAM[0]
                } ]
            },
            options: {
                scale: {
                    pointLabels: {
                        fontColor: "#ffffff",
                        fontFamily: "Inconsolata",
                        fontSize: 14
                    },
                    gridLines: {
                        color: "rgba(0,0,0,.1)"
                    },
                    angleLines: {
                        color: "rgba(0,0,0,.1)"
                    },
                    ticks: {
                        display: false,
                        min: 0,
                        max: 11
                    }
                },
                legend: {
                    display: true,
                    reverse: true,
                    labels: {
                        fontColor: "#ffffff"
                    }
                }
            }
        });
        var timeChart = new Chart(timePM, {
            type: "radar",
            data: {
                labels: [ "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM" ],
                datasets: [ {
                    label: "2015 - 2017",
                    backgroundColor: "rgba(235,237,236,0.3)",
                    borderColor: "rgb(235,237,236)",
                    pointBackgroundColor: "rgb(235,237,236)",
                    pointHitRadius: 30,
                    data: timeDataPM[1]
                }, {
                    label: "2012 - 2014",
                    backgroundColor: "rgba(61,61,59,0.5)",
                    borderColor: "rgb(61,61,59)",
                    pointBackgroundColor: "rgb(61,61,59)",
                    pointHitRadius: 30,
                    data: timeDataPM[0]
                } ]
            },
            options: {
                scale: {
                    pointLabels: {
                        fontColor: "#ffffff",
                        fontFamily: "Inconsolata",
                        fontSize: 14
                    },
                    gridLines: {
                        color: "rgba(0,0,0,.1)"
                    },
                    angleLines: {
                        color: "rgba(0,0,0,.1)"
                    },
                    ticks: {
                        display: false,
                        min: 0,
                        max: 11
                    }
                },
                legend: {
                    display: true,
                    reverse: true,
                    labels: {
                        fontColor: "#ffffff"
                    }
                }
            }
        });
    }
};

$(document).ready(function() {
    violentCrime.init();
    console.log("connected");
});