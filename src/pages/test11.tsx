
import React, { useEffect } from 'react';
import G2 from '@antv/g2';
import styles from './test11.css';

export default function() {
  useEffect(()=>{
    const data = [
      { city: '石家庄', type: '水果', value: 14500 },
      { city: '石家庄', type: '米面', value: 8500 },
      { city: '石家庄', type: '特产零食', value: 10000 },

      { city: '深圳', type: '特产零食', value: 11000 },
      { city: '深圳', type: '水果', value: 9000 },
      { city: '深圳', type: '米面', value: 8500 },

      { city: '温州', type: '特产零食', value: 6000 },
      { city: '温州', type: '水果', value: 16000 },
      { city: '温州', type: '米面', value: 5000 },



      { city: '宁波', type: '水果', value: 14000 },
      { city: '宁波', type: '米面', value: 9000 },
      { city: '宁波', type: '特产零食', value: 10000 },

      { city: '无锡', type: '水果', value: 14000 },
      { city: '无锡', type: '米面', value: 9000 },
      { city: '无锡', type: '特产零食', value: 10000 },

      { city: '杭州', type: '水果', value: 9000 },
      { city: '杭州', type: '米面', value: 8500 },
      { city: '杭州', type: '特产零食', value: 10000 },

      { city: '北京', type: '水果', value: 17000 },
      { city: '北京', type: '米面', value: 6000 },
      { city: '北京', type: '特产零食', value: 7000 },

      { city: '上海', type: '水果', value: 18000 },
      { city: '上海', type: '米面', value: 11000 },
      { city: '上海', type: '特产零食', value: 15000 },
    ];

    const chart = new G2.Chart({
      container: 'c1',
      // forceFit: true,
      height: 300,
      width:500,
      padding: [ 0, 90, 20, 52 ]
    });
    chart.source(data, {
      value: {
        max: 20000,
        min: 0.0,
        nice: false,
        alias: '销售额（万）'
      }
    });
    chart.axis('city', {
      label: {
        textStyle: {
          fill: '#aaaaaa',
          fontSize: 12
        }
      },
      tickLine: {
        alignWithLabel: false,
        length: 0
      }
    });
    chart.axis('value', {
      label: {
        textStyle: {
          fill: '#aaaaaa',
          fontSize: 12
        }
      },
      title: {
        offset: 30,
        textStyle: {
          fontSize: 14,
          fontWeight: 300
        }
      }
    });
    chart.legend({
      position: 'right-bottom'
    });
    chart.coord().transpose();
    chart.interval().position('city*value').color('type')
      .opacity(1)
      .adjust([{
        type: 'dodge',
        marginRatio: 0.3
      }]);
    chart.render();

  },[])
  return (
    <div >
      <div id='c1' ></div>
    </div>
  );
}
