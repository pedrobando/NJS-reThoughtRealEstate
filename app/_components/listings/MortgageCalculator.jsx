"use client"
import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

const HalfDonutChart = () => {
  useEffect(() => {
    // Apply theme
    am5.useTheme(am5themes_Animated);

    // Create chart instance
    let chart = am5xy.create('chartdiv', am5xy.PieChart);

    // Create series
    let series = chart.series.push(new am5xy.PieSeries());

    // Set data
    series.data = [{
      category: 'Series 1',
      value: 30
    }, {
      category: 'Series 2',
      value: 40
    }, {
      category: 'Series 3',
      value: 30
    }];

    // Set inner radius to create the half donut effect
    series.innerRadius = am5.percent(50);

    // Disable labels and ticks for better appearance
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: '100%', height: '400px' }} />;
};

export default HalfDonutChart;
