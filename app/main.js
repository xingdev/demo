/**
 * Created by xingbozhang on 17/4/19.
 */

import * as d3 from 'd3'
export function createMain () {
  var main = document.createElement('div')
  main.setAttribute('id', 'main')
  var app = document.getElementById('app')
  app.appendChild(main)

  // First declare some variables for dimension and margin for the container
  var width = 1000
  var height = 800
  var margin = 25
  var axisLength = width - 2 * margin // Leave margin on both sides left-right or top-bottom

  // The main container to house our axes groups
  var svgContainer = d3.select(main)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('border', '1px solid')
  var a = d3.randomBates(10)
  var data = d3.range(100).map(d3.randomBates(10))

  var formatCount = d3.format(',.0f')

  var svg = d3.select('svg'),
    margin = {top: 10, right: 30, bottom: 30, left: 30},
    width = +svg.attr('width') - margin.left - margin.right,
    height = +svg.attr('height') - margin.top - margin.bottom,
    g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  var x = d3.scaleLinear()
    .rangeRound([0, width])

  var bins = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(20))
    (data)

  var y = d3.scaleLinear()
    .domain([0, d3.max(bins, function (d) { return d.length })])
    .range([height, 0])

  var bar = g.selectAll('.bar')
    .data(bins)
    .enter().append('g')
    .attr('class', 'bar')
    .attr('transform', function (d) { return 'translate(' + x(d.x0) + ',' + y(d.length) + ')' })

  bar.append('rect')
    .attr('x', 1)
    .attr('width', x(bins[0].x1) - x(bins[0].x0) - 1)
    .attr('height', function (d) { return height - y(d.length) })

  bar.append('text')
    .attr('dy', '.75em')
    .attr('y', 6)
    .attr('x', (x(bins[0].x1) - x(bins[0].x0)) / 2)
    .attr('text-anchor', 'middle')
    .text(function (d) { return formatCount(d.length) })

  g.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x))
}

export default createMain
