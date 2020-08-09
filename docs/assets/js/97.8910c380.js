(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{410:function(t,e,_){"use strict";_.r(e);var a=_(11),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"mq了解及对比选型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mq了解及对比选型"}},[t._v("#")]),t._v(" MQ了解及对比选型")]),t._v(" "),_("p",[t._v("消息队列已经逐渐成为企业 IT 系统内部通信的核心手段。它具有低耦合、可靠投递、广播、流量控制、最终一致性等一系列功能，成为异步RPC的主要手段之一。当今市面上有很多主流的消息中间件，如老牌的 ActiveMQ、RabbitMQ，炙手可热的 Kafka，阿里巴巴自主开发 RocketMQ 等")]),t._v(" "),_("h2",{attrs:{id:"_1-概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-概念"}},[t._v("#")]),t._v(" 1. 概念")]),t._v(" "),_("ul",[_("li",[t._v("Broker")])]),t._v(" "),_("p",[t._v("消息服务器，作为 Server 提供消息核心服务")]),t._v(" "),_("ul",[_("li",[t._v("Producer")])]),t._v(" "),_("p",[t._v("消息生产者，业务的发起方，负责生产消息传输给 Broker")]),t._v(" "),_("ul",[_("li",[t._v("Consumer")])]),t._v(" "),_("p",[t._v("消息消费者，业务的处理方，负责从 Broker 获取消息并进行业务逻辑处理")]),t._v(" "),_("ul",[_("li",[t._v("Topic")])]),t._v(" "),_("p",[t._v("主题，发布订阅模式下的消息统一汇集地，不同生产者向 Topic 发送消息，由 MQ 服务器分发到不同的订阅者，实现消息的广播")]),t._v(" "),_("ul",[_("li",[t._v("Queue")])]),t._v(" "),_("p",[t._v("队列，PTP 模式下，特定生产者向特定 Queue 发送消息，消费者订阅特定的 Queue 完成指定消息的接收")]),t._v(" "),_("ul",[_("li",[t._v("Message")])]),t._v(" "),_("p",[t._v("消息体，根据不同通信协议定义的固定格式进行编码的数据包，来封装业务数据，实现消息的传输")]),t._v(" "),_("h2",{attrs:{id:"_2-模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-模式"}},[t._v("#")]),t._v(" 2. 模式")]),t._v(" "),_("p",[t._v("消息队列模式")]),t._v(" "),_("h3",{attrs:{id:"_2-1-点对点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-点对点"}},[t._v("#")]),t._v(" 2.1. 点对点")]),t._v(" "),_("p",[t._v("PTP 点对点: 使用 Queue 作为通信载体")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116001.png",alt:"图片"}})]),t._v(" "),_("p",[t._v("消息生产者生产消息发送到 Queue 中，然后消息消费者从 Queue 中取出并且消费消息。消息被消费以后，Queue 中不再存储，所以消息消费者不可能消费到已经被消费的消息。Queue 支持存在多个消费者，但是对一个消息而言，只会有一个消费者可以消费")]),t._v(" "),_("h3",{attrs:{id:"_2-2-发布-订阅"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-发布-订阅"}},[t._v("#")]),t._v(" 2.2. 发布/订阅")]),t._v(" "),_("p",[t._v("Pub/Sub 发布订阅(广播): 使用 Topic 作为通信载体")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116002.png",alt:"图片"}})]),t._v(" "),_("p",[t._v("消息生产者(发布)将消息发布到 Topic 中，同时有多个消息消费者(订阅)消费该消息。和点对点方式不同，发布到 Topic 的消息会被所有订阅者消费")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("总结")])])]),t._v(" "),_("p",[t._v("Queue 实现了负载均衡，将 Producer 生产的消息发送到消息队列中，由多个消费者消费。但一个消息只能被一个消费者接受，当没有消费者可用时，这个消息会被保存直到有一个可用的消费者")]),t._v(" "),_("p",[t._v("Topic 实现了发布和订阅，当你发布一个消息，所有订阅这个 Topic 的服务都能得到这个消息，所以从1到N个订阅者都能得到一个消息的拷贝")]),t._v(" "),_("h2",{attrs:{id:"_3-协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-协议"}},[t._v("#")]),t._v(" 3. 协议")]),t._v(" "),_("p",[t._v("消息队列常用协议")]),t._v(" "),_("h3",{attrs:{id:"_3-1-amqp协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-amqp协议"}},[t._v("#")]),t._v(" 3.1. AMQP协议")]),t._v(" "),_("p",[t._v("AMQP 即 Advanced Message Queuing Protocol ，一个提供统一消息服务的应用层标准高级消息队列协议，是应用层协议的一个开放标准，为面向消息的中间件设计。基于此协议的客户端与消息中间件可传递消息，并不受客户端/中间件不同产品，不同开发语言等条件的限制。")]),t._v(" "),_("p",[t._v("优点：可靠、通用")]),t._v(" "),_("h3",{attrs:{id:"_3-2-mqtt协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-mqtt协议"}},[t._v("#")]),t._v(" 3.2. MQTT协议")]),t._v(" "),_("p",[t._v("MQTT（Message Queuing Telemetry Transport，消息队列遥测传输）是 IBM 开发的一个即时通讯协议，有可能成为物联网的重要组成部分。该协议支持所有平台，几乎可以把所有联网物品和外部连接起来，被用来当做传感器和致动器（比如通过 Twitter 让房屋联网）的通信协议。")]),t._v(" "),_("p",[t._v("优点：格式简洁、占用带宽小、移动端通信、PUSH、嵌入式系统")]),t._v(" "),_("h3",{attrs:{id:"_3-3-stomp协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-stomp协议"}},[t._v("#")]),t._v(" 3.3. STOMP协议")]),t._v(" "),_("p",[t._v("STOMP（Streaming Text Orientated Message Protocol）是流文本定向消息协议，是一种为 MOM（Message Oriented Middleware，面向消息的中间件）设计的简单文本协议。STOMP 提供一个可互操作的连接格式，允许客户端与任意 STOMP 消息代理（Broker）进行交互。")]),t._v(" "),_("p",[t._v("优点：命令模式（非 Topic\\Queue 模式）")]),t._v(" "),_("h3",{attrs:{id:"_3-4-xmpp协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-xmpp协议"}},[t._v("#")]),t._v(" 3.4. XMPP协议")]),t._v(" "),_("p",[t._v("XMPP（可扩展消息处理现场协议，Extensible Messaging and Presence Protocol）是基于可扩展标记语言（XML）的协议，多用于即时消息（IM）以及在线现场探测。适用于服务器之间的准即时操作。核心是基于XML流传输，这个协议可能最终允许因特网用户向因特网上的其他任何人发送即时消息，即使其操作系统和浏览器不同。")]),t._v(" "),_("p",[t._v("优点：通用公开、兼容性强、可扩展、安全性高，但 XML 编码格式占用带宽大")]),t._v(" "),_("h3",{attrs:{id:"_3-5-基于tcp-ip自定义的协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-基于tcp-ip自定义的协议"}},[t._v("#")]),t._v(" 3.5. 基于TCP/IP自定义的协议")]),t._v(" "),_("p",[t._v("有些特殊框架（如：Redis、Kafka、ZeroMq等）根据自身需要未严格遵循 MQ 规范，而是基于 TCP\\IP 自行封装了一套协议，通过网络 Socket 接口进行传输，实现了 MQ 的功能")]),t._v(" "),_("h2",{attrs:{id:"_4-优点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-优点"}},[t._v("#")]),t._v(" 4. 优点")]),t._v(" "),_("p",[t._v("为什么使用消息队列？优点是什么？")]),t._v(" "),_("h3",{attrs:{id:"_4-1-解耦"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-解耦"}},[t._v("#")]),t._v(" 4.1. 解耦")]),t._v(" "),_("p",[t._v("可以在多个系统之间进行解耦，将原本通过网络之间的调用的方式改为使用 MQ 进行消息的异步通讯，只要该操作不是需要同步的，就可以改为使用 MQ 进行不同系统之间的联系，这样项目之间不会存在耦合，系统之间不会产生太大的影响，就算一个系统挂了，也只是消息挤压在 MQ 里面没人进行消费而已，不会对其他的系统产生影响")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116003.png",alt:"图片"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116004.png",alt:"图片"}})]),t._v(" "),_("h3",{attrs:{id:"_4-2-异步"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-异步"}},[t._v("#")]),t._v(" 4.2. 异步")]),t._v(" "),_("p",[t._v("加入一个操作设计到好几个步骤，这些步骤之间不需要同步完成，比如客户去创建了一个订单，还要去客户轨迹系统添加一条轨迹、去库存系统更新库存、去客户系统修改客户的状态等等。这样如果这个系统都直接进行调用，那么将会产生大量的时间，这样对于客户是无法接收的；并且像添加客户轨迹这种操作是不需要去同步操作的，如果使用 MQ 将客户创建订单时，将后面的轨迹、库存、状态等信息的更新全都放到 MQ 里面然后去异步操作，这样就可加快系统的访问速度，提供更好的客户体验")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116005.png",alt:"图片"}})]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116006.png",alt:"图片"}})]),t._v(" "),_("h3",{attrs:{id:"_4-3-削峰"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-削峰"}},[t._v("#")]),t._v(" 4.3. 削峰")]),t._v(" "),_("p",[t._v("一个系统访问流量有高峰时期，也有低峰时期，比如说，中午整点有一个抢购活动等等。比如系统平时流量并不高，一秒钟只有 100 多个并发请求，系统处理没有任何压力，一切风平浪静，到了某个抢购活动时间，系统并发访问了剧增，比如达到了每秒 5000 个并发请求，而我们的系统每秒只能处理 2000 个请求，那么由于流量太大，我们的系统、数据库可能就会崩溃。这时如果使用 MQ 进行流量削峰，将用户的大量消息直接放到 MQ 里面，然后我们的系统去按自己的最大消费能力去消费这些消息，就可以保证系统的稳定，只是可能要跟进业务逻辑，给用户返回特定页面或者稍后通过其他方式通知其结果")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/wliduo/CDN@master/2020/01/20200116007.png",alt:"图片"}})]),t._v(" "),_("p",[_("strong",[t._v("总结")])]),t._v(" "),_("ul",[_("li",[t._v("对结构复杂、设计系统多的操作进行解耦操作，降低系统的操作复杂度、降低系统的维护成本")]),t._v(" "),_("li",[t._v("对一个可以进行异步操作的一些系统操作进行异步，减小操作的响应时间，提供更好的用户体验")]),t._v(" "),_("li",[t._v("可对高流量进行削峰，保证系统的平稳运行")])]),t._v(" "),_("h2",{attrs:{id:"_5-缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-缺点"}},[t._v("#")]),t._v(" 5. 缺点")]),t._v(" "),_("ul",[_("li",[t._v("系统可用性降低。在系统中引入 MQ，那么万一 MQ 挂了怎么办呢？一般而言，引入的外部依赖越多，系统越脆弱，每一个依赖出问题都会导致整个系统的崩溃")]),t._v(" "),_("li",[t._v("系统复杂度提高。需要考虑 MQ 的各种情况，比如：消息的重复消费、消息丢失、保证消息传递的顺序性等等")]),t._v(" "),_("li",[t._v("数据一致性问题。比如 A 系统已经给客户返回操作成功，这时候操作 BC 都成功了，操作 D 却失败了，导致数据不一致")])]),t._v(" "),_("p",[_("strong",[t._v("系统可用性降低解决")])]),t._v(" "),_("p",[t._v("实际项目中发送 MQ 消息，如果不做集群，其中 MQ 机器出了故障宕机了，那么 MQ 消息就不能发送了，系统就崩溃了，所以我们需要集群 MQ，当其中一台 MQ 出了故障，其余的 MQ 机器可以接着继续运转，在生产中，没人使用单机的消息队列。如果有，那肯定为了用而用（显得技术复杂一下，好忽悠多收点钱），对于这个问题，需要对MQ集群技术有比较深刻的理解，各种消息中间件的集群方式不同，自行查阅资料")]),t._v(" "),_("p",[_("strong",[t._v("如何保证消息不被重复消费")])]),t._v(" "),_("p",[t._v("要回答好这个问题，首先要知道为什么消息会被重复消费，大多都是因为网络不通导致，确认信息没有传送到消息队列，导致消息队列不知道自己已经消费过该消息了，再次将该消息分发给其他的消费者。所以解决问题的方式有如下三种思路")]),t._v(" "),_("ul",[_("li",[t._v("如果消息是做数据库的插入操作，给这个消息做一个唯一主键，那么就算出现重复消费的情况，就会导致主键冲突，避免数据库出现脏数据")]),t._v(" "),_("li",[t._v("如果你拿到这个消息做 Redis 的 Set 的操作，不用解决，因为你无论 Set 几次结果都是一样的，Set 操作本来就算幂等操作")]),t._v(" "),_("li",[t._v("如果上面两种情况还不行，准备一个第三服务方来做消费记录。以 Redis 为例，给消息分配一个全局 ID，只要消费过该消息，将 <Id,Message> 以 K-V 形式写入 Redis。那消费者开始消费前，先去 Redis 中查询有没消费记录即可")])]),t._v(" "),_("p",[_("strong",[t._v("如何保证消息的可靠性传输")])]),t._v(" "),_("p",[t._v("其实这个问题是第一个问题的扩展，换而言之，我们要保证可靠性传输，其实就是保证防止生产者弄丢数据、消息队列弄丢数据、消费者弄丢数据而已，其实这些问题早在中间件开发者已经考虑到了，也提供了一些可配置的文件给我们自行设定相关参数，消息队列一般都会持久化到磁盘这个不用担心，然后生产者数据丢失的话 MQ 的事务会回滚，可以尝试重新发送，消费者丢的的话一般都是采用了自动确认消息模式导致消费信息被删，只要修改为手动确认就行了，也就是说消费者消费完之后，调用一个 MQ 的确认方法就行了")]),t._v(" "),_("p",[_("strong",[t._v("如何保证从消息队列里拿到的数据按顺序执行")])]),t._v(" "),_("p",[t._v("通过算法，将需要保持先后顺序的消息放到同一个消息队列中，然后只用一个消费者去消费该队列")]),t._v(" "),_("ul",[_("li",[t._v("Rabbitmq：拆分多个 Queue，每个 Queue一个 Consumer，就是多一些 Queue 而已，确实是麻烦点；或者就一个 Queue 但是对应一个 Consumer，然后这个 Consumer 内部用内存队列做排队，然后分发给底层不同的 Worker 来处理")]),t._v(" "),_("li",[t._v("Kafka：一个 Topic，一个 Partition，一个 Consumer，内部单线程消费，写 N 个内存 Queue，然后 N 个线程分别消费一个内存 Queue 即可")])]),t._v(" "),_("p",[_("strong",[t._v("如何解决消息队列的延时以及过期失效问题？有几百万消息持续积压几小时，怎么解决")])]),t._v(" "),_("p",[t._v("这个问题是生产环境出现事故后的，考察你如何快速的解决问题，，消息队列的延迟和过期失效是消息队列的自我保护机制，目的是为了防止本身被挤爆，当然是可以关闭保护，比如当某个消息消费失败 5 次后，就把这个消息丢弃等，尽量不要关掉保护机制，那么问题来了，那些被丢弃的消息难道就不要了吗？其实并不是，我们可以针对该业务，查询出来将丢失的那批数据，写个临时程序，一点一点的查出来，然后重新灌入 MQ 里面去，把丢的数据给他补回来")]),t._v(" "),_("p",[_("strong",[t._v("数据是通过 Push 还是 Pull 方式给到消费端，各自有什么弊端")])]),t._v(" "),_("ul",[_("li",[t._v("Push 模型实时性好，但是因为状态维护等问题，难以应用到消息中间件的实践中，因为在 Broker 端需要维护 Consumer 的状态，不好适用于 Broker 去支持大量的 Consumer 的场景")]),t._v(" "),_("li",[t._v("Consumer 的消费速度是不一致的，Broker 进行推送难以处理不同的 Consumer 的状况，Broker 难以应对 Consumer 无法消费消息的情况，因为不知道 Consumer 的宕机是短暂的还是永久的，另外推送消息（量可能会很大）也会加重 Consumer 的负载或者压垮 Consumer，如果对应只有 1 个 Consumer，用 Push 比 Pull 好")]),t._v(" "),_("li",[t._v("Pull 模式实现起来会相对简单一些，但是实时性取决于轮训的频率，在对实时性要求高的场景不适合使用")])]),t._v(" "),_("h2",{attrs:{id:"_6-对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-对比"}},[t._v("#")]),t._v(" 6. 对比")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("特性")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("ActiveMQ")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("RabbitMQ")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("RocketMQ")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("Kafka")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("单机吞吐量")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("万级，吞吐量比RocketMQ和Kafka要低一个数量级")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("万级，吞吐量比RocketMQ和Kafka要低一个数量级")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("十万级，RocketMQ也是可以支撑高吞吐的一种MQ")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("十万级别，Kafka最大优点就是吞吐量大，一般配合大数据类的系统来进行实时数据计算、日志采集等场景")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("Topic数量对吞吐量的影响")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Topic可以达到几百、几千个的级别，吞吐量会有小幅度的下降。这是RocketMQ的一大优势，可在同等数量机器下支撑大量的Topic")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("Topic从几十个到几百个的时候，吞吐量会大幅下降。所以在同等机器数量下，Kafka尽量保证Topic数量不要过多。如果支撑大规模Topic需要增加更多的机器")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("时效性")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("ms级")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("微秒级，这是rabbitmq的一大特点，延迟是最低的")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("ms级")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("延迟在ms级以内")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("可用性")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("高，基于主从架构实现可用性")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("高，基于主从架构实现可用性")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("非常高，分布式架构")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("非常高，Kafka是分布式的，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("消息可靠性")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("有较低的概率丢失数据")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("经过参数优化配置，可以做到零丢失")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("经过参数配置，消息可以做到零丢失")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("功能支持")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("MQ领域的功能及其完备")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("基于erlang开发，所以并发性能极强，性能极好，延时低")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("MQ功能较为完备，分布式扩展性好")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("功能较为简单，主要支持加单MQ功能")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("优势")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("非常成熟，功能强大，在业内大量公司和项目中都有应用")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("erlang语言开发，性能极好、延时很低，吞吐量万级、MQ功能完备，管理界面非常好，社区活跃；互联网公司使用较多")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("接口简单易用，阿里出品有保障，吞吐量大，分布式扩展方便、社区比较活跃，支持大规模的Topic、支持复杂的业务场景，可以基于源码进行定制开发")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("超高吞吐量，ms级的时延，极高的可用性和可靠性，分布式扩展方便")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("劣势")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("偶尔有较低概率丢失消息，社区活跃度不高")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("吞吐量较低，erlang语音开发不容易进行定制开发，集群动态扩展麻烦")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("接口不是按照标准JMS规范走的，有的系统迁移要修改大量的代码，技术有被抛弃的风险")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("有可能进行消息的重复消费")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[_("strong",[t._v("应用")])]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("主要用于解耦和异步，较少用在大规模吞吐的场景中")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("都有使用")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("用于大规模吞吐、复杂业务中")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("在大数据的实时计算和日志采集中被大规模使用，是业界的标准")])])])]),t._v(" "),_("p",[_("strong",[t._v("总结")])]),t._v(" "),_("p",[t._v("一般业务系统要引入 MQ，最早大家都用 ActiveMQ，但现在用的不多了。没有经过大规模吞吐场景的验证，社区也不活跃，不推荐再使用。后来大家开始用 RabbitMQ，但是它是使用 erlang 语言开发的，如果不精通 erlang，对公司而言，几乎处于不可控的状态，单其是开源的，社区活跃度高，拥有比较稳定的支持。现在越来越多的公司开始使用 RocketMQ，但是要小心被抛弃的风险。如果公司有实力自己去维护开发，推荐使用，否则还是选择 RabbitMQ。如果实在大数据的实时计算、日志采集等领域，用 Kafka 是业界标准。")]),t._v(" "),_("p",[t._v("所以，对于中小型公司，技术实力一般的，应该用 Rabbitmq，对于大公司，基础架构研发能力强大的，推荐使用 RocketMQ")]),t._v(" "),_("p",[_("strong",[t._v("参考")])]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/jack1995/p/10908789.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于MQ的几件小事（一）消息队列的用途、优缺点、技术选型"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/zhuoqingsen/p/MQ.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于MQ，你必须知道的"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://blog.csdn.net/wqc19920906/article/details/82193316",target:"_blank",rel:"noopener noreferrer"}},[t._v("消息中间件（一）MQ详解及四大MQ比较"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://blog.csdn.net/wqc19920906/article/details/82193593",target:"_blank",rel:"noopener noreferrer"}},[t._v("消息中间件（二）MQ使用场景"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://www.cnblogs.com/imstudy/p/11064589.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("多维度对比5款主流分布式MQ消息队列，妈妈再也不担心我的技术选型了"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=v.exports}}]);