import {
  FlexibleWidthXYPlot,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  XAxis,
  YAxis
} from 'react-vis';

import { Component } from 'react';
// Copyright (c) 2016 - 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.


// When making a difference chart you are specifying in coordinates
// where you want your bars to start and stop
const myDATA = [...new Array(15)].map((x, idx) => ({
  x: idx,
  // if the bars are above zero then we start them at zero
  y0: idx - 4 < 0 ? idx - 4 : 0,
  // if the bars are below zero then we stop them at zero
  y: idx < 5 ? 0 : Math.abs(idx - 4)
}));

const yDomain = myDATA.reduce(
  (res, row) => ({
    max: Math.max(res.max, row.y, row.y0),
    min: Math.min(res.min, row.y, row.y0)
  }),
  { max: -Infinity, min: Infinity }
);

export default class DifferenceChart extends Component {
  state = {
    useCanvas: false
  };

  render() {
    const { useCanvas } = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <FlexibleWidthXYPlot height={300} yDomain={[yDomain.min, yDomain.max]}>
        <BarSeries
          data={myDATA}
          colorType="literal"
          getColor={d => {
            return d.y0 < 0 ? '#007bff' : '#52c41a';
          }}
        />
        <XAxis style={{ strokeWidth: 0.5 }} />
        <YAxis style={{ strokeWidth: 0.5 }} />
      </FlexibleWidthXYPlot>
    );
  }
}
