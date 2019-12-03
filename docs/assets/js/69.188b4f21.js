(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{245:function(t,l,o){"use strict";o.r(l);var r=o(0),e=Object(r.a)({},(function(){var t=this,l=t.$createElement,o=t._self._c||l;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"使用队列异步下单"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#使用队列异步下单"}},[t._v("#")]),t._v(" 使用队列异步下单")]),t._v(" "),o("p",[o("strong",[t._v("地址")])]),t._v(" "),o("ul",[o("li",[t._v("Github："),o("a",{attrs:{href:"https://github.com/dolyw/SeckillEvolution",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/dolyw/SeckillEvolution"),o("OutboundLink")],1)]),t._v(" "),o("li",[t._v("Gitee(码云)："),o("a",{attrs:{href:"https://gitee.com/dolyw/SeckillEvolution",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/dolyw/SeckillEvolution"),o("OutboundLink")],1)])]),t._v(" "),o("p",[o("router-link",{attrs:{to:"/seckill-evolution/"}},[o("strong",[t._v("目录")])])],1),t._v(" "),o("ul",[o("li",[o("router-link",{attrs:{to:"/seckill-evolution/00-Preparation.html"}},[t._v("0. 整体流程")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/seckill-evolution/01-Tradition-Process.html"}},[t._v("1. 传统方式")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/seckill-evolution/02-Optimistic-Lock.html"}},[t._v("2. 使用乐观锁")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/seckill-evolution/03-Optimistic-Lock-Redis.html"}},[t._v("3. 使用缓存")])],1),t._v(" "),o("li",[o("router-link",{attrs:{to:"/seckill-evolution/04-Distributed-Limit.html"}},[t._v("4. 使用分布式限流")])],1),t._v(" "),o("li",[o("strong",[t._v("5. 使用队列异步下单")])])]),t._v(" "),o("h2",{attrs:{id:"_1-思路介绍"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-思路介绍"}},[t._v("#")]),t._v(" 1. 思路介绍")]),t._v(" "),o("p",[t._v("那我们还可以怎么优化提高吞吐量以及性能呢，我们上文所有例子其实都是"),o("strong",[t._v("同步请求")]),t._v("，完全可以利用"),o("strong",[t._v("同步转异步来提高性能")]),t._v("，这里我们将下订单的操作进行异步化，利用消息队列来进行解耦，这样可以让 DB 异步执行下单")]),t._v(" "),o("p",[o("strong",[t._v("每当一个请求通过了限流和库存校验之后就将订单信息发给消息队列，这样一个请求就可以直接返回了，消费程序做下订单的操作，对数据进行入库落地")]),t._v("，因为异步了，所以最终需要采取回调或者是其他提醒的方式提醒用户购买完成")]),t._v(" "),o("h2",{attrs:{id:"_2-代码实现"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-代码实现"}},[t._v("#")]),t._v(" 2. 代码实现")]),t._v(" "),o("p",[t._v("待补充")])])}),[],!1,null,null,null);l.default=e.exports}}]);