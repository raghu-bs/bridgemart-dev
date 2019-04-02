import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  barchart: Chart;
  piechart1: Chart;
  piechart2: Chart;
  areachart: Chart;
  progresschart: Chart;
  constructor() {

  }

  ngOnInit() {
    this.donutPieChart();
  }

  donutPieChart() {
    this.piechart1 = new Chart({
      chart:{
        type:'pie',
        height: 300,
        width: 400
          },
    credits:{enabled: false},
    colors:[
        '#5485BC', '#AA8C30', '#5C9384', '#981A37', '#FCB319',     '#86A033', '#614931', '#00526F', '#594266', '#cb6828', '#aaaaab', '#a89375'
        ],
    title:{text: null},
plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true,
            dataLabels: {
                enabled: false,                        
                formatter: function() {
                    return  '%';
                }
            } 									
        }
    },
    legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        width: 200,
        verticalAlign: 'middle',
        useHTML: true,
        labelFormatter: function() {
            return '<div style="text-align: left; width:130px;float:left;">' + this.name + '</div><div style="width:40px; float:left;text-align:right;">' + this.y + '%</div>';
}
    },
series: [{
type: 'pie',
        dataLabels: {},
        size: '60%',
        innerSize: '30%',
data: [
  ['Domestic Equity', 38.5],
  ['International Equity', 26.85],
  ['Other', 15.70],
  ['Cash and Equivalents', 10.48],
  ['Fixed Income', 8.48]
]
}]
});
    // });
    // this.piechart1 = new Chart({
    //   chart: {
    //     type: 'pie'
    //   },
    //   title: {
    //     text: 'Load'
    //   },
    //   yAxis: {
    //     title: {
    //       text: 'Total percent market share'
    //     }
    //   },
    //   plotOptions: {
    //     pie: {
    //       shadow: false
    //     }
    //   },
    //   tooltip: {
    //     formatter: function () {
    //       return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
    //     }
    //   },
    //   series: [{
    //     name: 'Browsers',
    //     data: [['Firefox', 6], ['MSIE', 4], ['Chrome', 7]],
    //     size: '60%',
    //     innerSize: '20%',
    //     showInLegend: true,
    //     dataLabels: {
    //       enabled: true,
    //     }, type: undefined
    //   }]
    // });

    this.piechart2 = new Chart({
      chart: {
        renderTo: 'container',
        type: 'pie'
      },
      title: {
        text: 'Redeemed'
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }
      },
      plotOptions: {
        pie: {
          shadow: false
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
        }
      },
      series: [{
        name: 'Browsers',
        data: [['Firefox', 6], ['MSIE', 4], ['Chrome', 7]],
        size: '60%',
        innerSize: '30%',
        showInLegend: true,
        dataLabels: {
          enabled: false
        }, type: undefined
      }]
    });


    this.areachart = new Chart({
      chart: {
        type: 'area'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      plotOptions: {},

      series: [{
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 200.5, 236.4, 194.1, 95.6, 54.4],
        type: undefined,
        fillOpacity: 0.1
      },
      {
        data: [190.7, 171.5, 106.4, 110.0, 110.0, 176.0, 135.6, 80.5, 216.4, 194.1, 146.6, 64.4],
        type: undefined,
        fillOpacity: 0.1
      }]
    });

    this.progresschart = new Chart({
      title: {
        text: 'Highcharts Progress Bar',
        align: 'left',
        margin: 0,
      },
      chart: {
        type: 'bar',
        height: 70,
      },
      credits: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      navigation: {
        buttonOptions: {
          enabled: false
        }
      },
      xAxis: {
        visible: false,
      },
      yAxis: {
        visible: false,
        min: 0,
        max: 100,
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            inside: true
          }
        }
      },
      series: [{
        data: [100],
        grouping: false,
        animation: false,
        enableMouseTracking: false,
        showInLegend: false,
        color: 'lightskyblue',
        pointWidth: 25,
        borderWidth: 0,
        type: undefined,
        // borderRadiusTopLeft: '4px',
        // borderRadiusTopRight: '4px',
        // borderRadiusBottomLeft: '4px',
        // borderRadiusBottomRight: '4px',
        // dataLabels: {
        //   className: 'highlight',
        //   format: '150 / 600',
        //   enabled: true,
        //   align: 'right',
        //   borderRadius: '4px',
        //   style: {
        //     color: 'white',
        //     textOutline: undefined,
        //   }
        // }
      }, {
        enableMouseTracking: false,
        data: [25],
        color: 'navy',
        borderWidth: 0,
        pointWidth: 25,
        animation: {
          duration: 250,
        },
        type: undefined,
        dataLabels: {
          enabled: true,
          inside: true,
          align: 'left',
          format: '{point.y}%',
          style: {
            color: 'white',
            textOutline: undefined,
          }
        }
      }]
    });
  }
}