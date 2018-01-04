var violentCrime = {
    init: function() {
        violentCrime.share();
        violentCrime.charts();
    },
    share: function() {
        $(".fa-twitter").on("click", function() {
            var tweet = "Violent crime in Baltimore spiked after 2015. Three years since that pivotal year, overall violent crime continues to climb in the city.";
            var url = "http://data.baltimoresun.com/news/violent-crime-2017/";
            var twitter_url = "https://twitter.com/intent/tweet?text=" + tweet + "&url=" + url + "&tw_p=tweetbutton";
            window.open(twitter_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
        $(".fa-facebook").on("click", function() {
            var picture = "http://data.baltimoresun.com/news/violent-crime-2017/images/thumb.jpg";
            var title = "Violent crime in Baltimore, 2012-2017";
            var description = "Violent crime in Baltimore spiked after 2015. Three years since that pivotal year, overall violent crime continues to climb in the city.";
            var url = "http://data.baltimoresun.com/news/violent-crime-2017/";
            var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link=" + url + "&picture=" + picture + "&name=" + title + "&description=" + description + "&redirect_uri=http://www.facebook.com";
            window.open(facebook_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
    },
    charts: function() {
        Chart.defaults.global.animation.duration = 0;
        Chart.defaults.global.hover.animationDuration = 0;
        Chart.defaults.global.responsiveAnimationDuration = 0;
        Chart.defaults.global.legend.display = false;
        Chart.defaults.global.legend.fontFamily = "Inconsolata";
        Chart.defaults.global.legend.labels.fontFamily = "Inconsolata";
        Chart.defaults.global.legend.labels.fontStyle = "bold";
        Chart.defaults.global.legend.labels.fontSize = 14;
        Chart.defaults.global.legend.onClick = function(e) {
            e.stopPropagation();
        };
        var overall = document.getElementById("overall").getContext("2d");
        var overallData = [ 19017, 18090, 16460, 17719, 19464, 21667 ];
        var byType = document.getElementById("byType").getContext("2d");
        var byTypeData = [ [ 13736, 25186, 662, 844, 12e3, 1139 ], [ 15572, 22996, 1003, 916, 16358, 2005 ] ];
        var homicides = document.getElementById("homicides").getContext("2d");
        var homicidesData = [ [ 216, 235, 211, 342, 318, 343 ], [ 369, 401, 369, 635, 666, 704 ] ];
        var timeAM = document.getElementById("timeAM").getContext("2d");
        var timeDataAM = [ [ 7.5, 7.4, 5.5, 2.9, 1.8, 1.3, .7, .6, .4, .8, 1.9, 2.5 ], [ 6, 5.6, 3.9, 2, 1.9, 1.2, 1.3, .6, 1.1, 1.5, 2.4, 1.9 ] ];
        var timePM = document.getElementById("timePM").getContext("2d");
        var timeDataPM = [ [ 2.4, 2.5, 4.3, 4.8, 4.3, 5, 4.6, 5.2, 6.4, 8.9, 8.2, 10.1 ], [ 3, 4.4, 4.1, 4.9, 4.4, 5.1, 6.4, 6.2, 7.4, 8.7, 9.3, 6.9 ] ];
        var robberyType = document.getElementById("robberyType").getContext("2d");
        var robberyTypeData = [ [ 462, 1744, 1550, 8244 ], [ 1247, 2773, 1487, 10851 ] ];
        var carjacking = document.getElementById("carjacking").getContext("2d");
        var carjackingData = [ 182, 124, 156, 283, 413, 551 ];
        var weapons = document.getElementById("weapons").getContext("2d");
        var weaponsData = [ [ 17.5, 50.6, 9.5, 13.1 ], [ 25.2, 42, 8.7, 14.7 ] ];
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
                            min: 15e3
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
        var byTypeChart = new Chart(byType, {
            type: "bar",
            data: {
                labels: [ "AGG. ASSAULT", "COMMON ASSAULT", "HOMICIDE", "RAPE", "ROBBERIES", "SHOOTING" ],
                datasets: [ {
                    label: "2012 - 2014",
                    backgroundColor: "rgba(162,169,177,.7)",
                    borderColor: "rgb(73,88,113)",
                    data: byTypeData[0]
                }, {
                    label: "2015 - 2017",
                    backgroundColor: "rgba(73,88,113,.7)",
                    borderColor: "rgb(73,88,113)",
                    data: byTypeData[1]
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
        var timeChartAM = new Chart(timeAM, {
            type: "radar",
            data: {
                labels: [ "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM" ],
                datasets: [ {
                    label: "2015 - 2017",
                    backgroundColor: "rgba(235,237,236,0.3)",
                    borderColor: "rgb(235,237,236)",
                    pointBackgroundColor: "rgb(235,237,236)",
                    data: timeDataAM[1]
                }, {
                    label: "2012 - 2014",
                    backgroundColor: "rgba(61,61,59,0.5)",
                    borderColor: "rgb(61,61,59)",
                    pointBackgroundColor: "rgb(61,61,59)",
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
        var timeChartPM = new Chart(timePM, {
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
        var robberyTypeChart = new Chart(robberyType, {
            type: "bar",
            data: {
                labels: [ "CARJACKING", "COMMERCIAL", "RESIDENCE", "STREET" ],
                datasets: [ {
                    label: "2012 - 2014",
                    backgroundColor: "rgba(162,169,177,.7)",
                    borderColor: "rgb(73,88,113)",
                    data: robberyTypeData[0]
                }, {
                    label: "2015 - 2017",
                    backgroundColor: "rgba(73,88,113,.7)",
                    borderColor: "rgb(73,88,113)",
                    data: robberyTypeData[1]
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
        var carjackingChart = new Chart(carjacking, {
            type: "line",
            data: {
                labels: [ "2012", "2013", "2014", "2015", "2016", "2017" ],
                datasets: [ {
                    label: "Carjacking",
                    backgroundColor: "rgba(0,0,0,0)",
                    borderColor: "rgb(73,88,113)",
                    pointBackgroundColor: "rgb(73,88,113)",
                    pointHitRadius: 30,
                    data: carjackingData
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
        var weaponsChart = new Chart(weapons, {
            type: "bar",
            data: {
                labels: [ "FIREARM", "HANDS", "KNIFE", "OTHER" ],
                datasets: [ {
                    label: "2012 - 2014",
                    backgroundColor: "rgba(162,169,177,.7)",
                    borderColor: "rgb(73,88,113)",
                    data: weaponsData[0]
                }, {
                    label: "2015 - 2017",
                    backgroundColor: "rgba(73,88,113,.7)",
                    borderColor: "rgb(73,88,113)",
                    data: weaponsData[1]
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
    }
};

$(document).ready(function() {
    violentCrime.init();
    console.log("connected");
});