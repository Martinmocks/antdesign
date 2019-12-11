import React, { PureComponent } from 'react';
import G2 from '@antv/g2';

class Test extends PureComponent{
  componentDidMount(){
    // const data=[
    //   {date:'2012-09',buyin:1403},
    //   {date:'2012-10',buyin:1725},
    //   {date:'2012-11',buyin:1025},
    //   {date:'2012-12',buyin:1225},
    // ]
    // const TICKS = [ '2012-09','2012-10','2012-11','2012-12'];
    // const chart = new G2.Chart({
    //   container: 'c1',
    //   forceFit: false,
    //   width:500,
    //   height: 500,
    //   padding: [ 50, 20, 50, 20 ]
    // });
    // chart.source(data, {
    //   date: {
    //     ticks: TICKS
    //   }
    // });
    // chart.legend(false);
    // chart.axis('buyin', false);
    // chart.axis('date', {
    //   label: {
    //     textStyle: {
    //       fill: '#bbbbbb'
    //     }
    //   }
    // });
    // chart.line().position('date*buyin');
    // chart.render();
    const data = [
      { type: '未知', value: 654 },
      { type: '17 岁以下', value: 654 },
      { type: '18-24 岁', value: 4400 },
      { type: '25-29 岁', value: 5300},
      { type: '30-39 岁', value: 6200 },
      { type: '40-49 岁', value: 3300 },
      { type: '50 岁以上', value: 1500 }
    ];

    const chart = new G2.Chart({
      container: 'c1',
      forceFit: true,
      height: 500,
      padding: [ 20, 20, 50, 20 ]
    });
    chart.source(data);
    chart.scale('value', {
      alias: '订单'
    });
    chart.axis('type', {
      label: {
        textStyle: {
          fill: '#aaaaaa'
        }
      },
      tickLine: {
        alignWithLabel: false,
        length: 0
      }
    });
    chart.axis('value', false);
    chart.tooltip({
      share: true
    });
    chart.interval().position('type*value').opacity(1)
    chart.render();
  }
  render(){
    return (
      <div>
       <div id='c1'></div>
      </div>

    )
  }}
export default Test;
