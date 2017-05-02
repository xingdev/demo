/**
 * Created by xingbozhang on 17/4/27.
 */
import * as d3 from 'd3'
export default function chart () {
  // First declare some variables for dimension and margin for the container
  var width = 300
  var height = 300

  var svgContainer = d3.select('#main')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('border', '1px solid')

  var data = [4, 8, 15, 16, 23, 42]
  var rectHeight = 38

  var linearY = d3.scaleLinear().domain([0, 100]).range([0, 300])
  var axis = d3.axisLeft(linearY)

  svgContainer.append('g').call(axis)

  var g = svgContainer.selectAll('.bar').data(data).enter()
    .append('g').attr('class', 'bar').attr('transform', (d, i) => `translate(${2},${i})`)

  var bar = g.append('rect').attr('x', 0).attr('y', (d, i) => rectHeight * i + 10).attr('width', d => d *
  10).attr('height', rectHeight).enter().append('rect').attr('x', (d, i) => {return i * rectHeight}).attr('y',
    0).attr('height', (d, i) => d).attr('width', rectHeight - 1).attr('fill', '#0F5B30')

  var text = d3.select('#main').append('span').attr('id', 'text').text('随着互联网浪潮的逐渐兴起，各种基于互联网的云战略也不断涌现，各个公司对云平台的理解和实现不尽相同，而云+端的模式越来越多受到关注。其中的端可以理解为终端用户手中的各种终端，包括 PC、手机、平板等不一而足。	而越来越多的用户愿意在自己的设备上使用轻量级的基于浏览器的应用。这类应用的安装部署可以是通过插件的方式安装，也有可能是直接以网页的形式访问而无需安装，相对于富客户端的下载安装，对用户来说更加简单方便，用户体验也更好。这类应用对开发人员来说，需要一些互联网相关的技术，其中必不可少 HTML CSS 和 JavaScript 技术。而 JavaScript 作为一种客户端脚本语言，和传统编程语言 Cpp、Java 等相比，没有诸如 Eclipse、Visual Studio 等集成开发调试环境，其调试和测试是对开发人员都是一项挑战。目前 JS 单元测试框架有丰富的选择，比如 Buster.js、TestSwarm、JsTestDriver 等。而 Jasmine 作为流行的 JavaScript 测试工具，很轻巧只有 20K 左右，而功能丰富，让我们可以容易的写出清晰简洁的针对项目的测试用例。对基于 JavaScript 开发的项目来说，是一款不错的测试框架选择。')

}
