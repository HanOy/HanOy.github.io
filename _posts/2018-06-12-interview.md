---
layout: post
title: java面试题
date: 2018-06-12
tags: 面试
category: 技术
is_share: true
disqus_comments: true
description: chenssy在某次跳槽中整理的Java面试大纲，及我整理中的答案
---

大纲来源
---

作者：占小狼

链接：https://www.jianshu.com/p/a07d1d4004b0

來源：简书

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

JAVA 基础
---

1、List 和 Set 的区别
[答案](https://www.cnblogs.com/IvesHe/p/6108933.html)

2、HashSet 是如何保证不重复的
[答案](https://blog.csdn.net/u010698072/article/details/52802179)

3、HashMap 是线程安全的吗，为什么不是线程安全的（最好画图说明多线程环境下不安全）?
[答案](https://www.cnblogs.com/qiumingcheng/p/5259892.html)

4、HashMap 的扩容过程
[答案](https://blog.csdn.net/aichuanwendang/article/details/53317351)
[答案2](https://www.cnblogs.com/KingIceMou/p/6976574.html)

5、HashMap 1.7 与 1.8 的 区别，说明 1.8 做了哪些优化，如何优化的？
[答案](http://www.cnblogs.com/stevenczp/p/7028071.html)

6、final finally finalize
[答案](https://blog.csdn.net/beixiaozhang/article/details/52955862)

7、强引用 、软引用、 弱引用、虚引用
[答案](https://www.zhihu.com/question/37401125)

8、Java反射
[答案](http://www.cnblogs.com/jqyp/archive/2012/03/29/2423112.html)

9、Arrays.sort 实现原理和 Collection 实现原理
[答案](https://blog.csdn.net/u011410529/article/details/56668545)

10、LinkedHashMap的应用
[答案](https://blog.csdn.net/kiss_the_sun/article/details/7848920)

11、cloneable接口实现原理
[答案](https://www.zhihu.com/question/52490586)

12、异常分类以及处理机制
[答案](https://blog.csdn.net/sinat_36713319/article/details/68945619)

13、wait和sleep的区别
[答案](https://blog.csdn.net/xyh269/article/details/52613507)

14、数组在内存中如何分配
[答案](https://blog.csdn.net/lcl19970203/article/details/54428358)


JAVA并发
---

1、synchronized 的实现原理以及锁优化？
[答案](https://blog.csdn.net/thousa_ho/article/details/77992743)

2、volatile 的实现原理？
[答案](http://www.importnew.com/23520.html)

3、Java 的信号灯？
[答案](https://blog.csdn.net/u011613354/article/details/51150248)

4、synchronized 在静态方法和普通方法的区别？
[答案](https://www.cnblogs.com/guiqulai/articles/7342006.html)

5、怎么实现所有线程在等待某个事件的发生才会去执行？
[答案](https://my.oschina.net/qimhkaiyuan/blog/1787438)

6、CAS？CAS 有什么缺陷，如何解决？
[答案](https://blog.csdn.net/zhangjq520/article/details/78951830)

7、synchronized 和 lock 有什么区别？
[答案](https://www.cnblogs.com/baizhanshi/p/6419268.html)

8、Hashtable 是怎么加锁的 ？
[答案](https://blog.csdn.net/qq_27093465/article/details/52279473)

9、HashMap 的并发问题？
[答案](https://blog.csdn.net/qq_27093465/article/details/52279473)

10、ConcurrenHashMap 介绍？1.8 中为什么要用红黑树？
[答案](https://blog.csdn.net/anig2014/article/details/39476801)

11、AQS
[答案](https://www.cnblogs.com/daydaynobug/p/6752837.html)

12、如何检测死锁？怎么预防死锁？
[答案](https://blog.csdn.net/ls5718/article/details/51896159)

13、Java 内存模型？
[答案](https://www.cnblogs.com/_popc/p/6096517.html)

14、如何保证多线程下 i++ 结果正确？
[答案](http://www.mamicode.com/info-detail-1983592.html)
[答案2](https://www.cnblogs.com/zemliu/p/3298685.html)

15、线程池的种类，区别和使用场景？
[答案](https://www.cnblogs.com/sachen/p/7401959.html)

16、分析线程池的实现原理和线程的调度过程？
[答案](https://blog.csdn.net/hsuxu/article/details/8985931)

17、线程池如何调优，最大数目如何确认？
[答案](https://www.cnblogs.com/jianzh5/p/6437315.html)
[答案](http://www.importnew.com/17384.html)

18、ThreadLocal原理，用的时候需要注意什么？
[答案](https://blog.csdn.net/sonny543/article/details/51336457)

19、CountDownLatch 和 CyclicBarrier 的用法，以及相互之间的差别?
[答案](https://www.cnblogs.com/dolphin0520/p/3920397.html)

20、LockSupport工具
[答案](https://blog.csdn.net/congduan/article/details/48710129)

21、Condition接口及其实现原理
[答案](https://blog.csdn.net/fuyuwei2015/article/details/72602182)

22、Fork/Join框架的理解
[答案](https://blog.csdn.net/timheath/article/details/71307834)

23、分段锁的原理,锁力度减小的思考
[答案](http://guochenglai.com/2016/06/04/java-concurrent4-java-subsection-decompose/)
[答案](https://blog.csdn.net/u010853261/article/details/54314486)

24、八种阻塞队列以及各个阻塞队列的特性
[答案](https://www.cnblogs.com/yjmyzz/p/BlockingQueue-in-java.html)

Spring
---

1、BeanFactory 和 FactoryBean？
[答案](https://blog.csdn.net/qiesheng/article/details/72875315)

2、Spring IOC 的理解，其初始化过程？
[答案](https://blog.csdn.net/u010796790/article/details/52623328)

3、BeanFactory 和 ApplicationContext？
[答案](https://www.cnblogs.com/adealjason/p/6500916.html)

4、Spring Bean 的生命周期，如何被管理的？
[答案](https://blog.csdn.net/yerenyuan_pku/article/details/52834011)

5、Spring Bean 的加载过程是怎样的？
[答案](https://www.cnblogs.com/xrq730/p/6285358.html)

6、如果要你实现Spring AOP，请问怎么实现？
[答案](https://blog.csdn.net/moreevan/article/details/11977115/)

7、如果要你实现Spring IOC，你会注意哪些问题？
[答案](https://segmentfault.com/a/1190000009139271)

8、Spring 是如何管理事务的，事务管理机制？
[答案](https://blog.csdn.net/jie_liang/article/details/77600742)

9、Spring 的不同事务传播行为有哪些，干什么用的？
[答案](https://blog.csdn.net/huaishuming/article/details/48492225)

10、Spring 中用到了那些设计模式？
[答案](https://www.cnblogs.com/baizhanshi/p/6187537.html)

11、Spring MVC 的工作原理？
[答案](https://www.cnblogs.com/xiaoxi/p/6164383.html)

12、Spring 循环注入的原理？
[答案](https://blog.csdn.net/jijianshuai/article/details/78122738)

13、Spring AOP的理解，各个术语，他们是怎么相互工作的？
[答案](https://blog.csdn.net/qukaiwei/article/details/50367761)

14、Spring 如何保证 Controller 并发的安全？
[答案](https://blog.csdn.net/u010523770/article/details/52458237)
[答案2](http://blog.51cto.com/lavasoft/1394669)

数据库
---

1、mysql分页有什么优化
[答案](https://www.cnblogs.com/geningchao/p/6649907.html)

2、悲观锁、乐观锁
[答案](https://blog.csdn.net/rexct392358928/article/details/52230737)

3、组合索引，最左原则
[答案](https://www.cnblogs.com/jamesbd/p/4333901.html)

4、mysql 的表锁、行锁
[答案](https://www.cnblogs.com/deliver/p/5730616.html)

5、mysql 性能优化
[答案](https://www.cnblogs.com/claireyuancy/p/7258314.html)
[答案2](https://www.cnblogs.com/zhouyusheng/p/8038224.html)

6、mysql的索引分类：B+，hash；什么情况用什么索引
[答案](https://blog.csdn.net/wuxing26jiayou/article/details/76795015)

7、事务的特性和隔离级别
[答案](https://www.cnblogs.com/huanongying/p/7021555.html)

缓存
---

1、Redis用过哪些数据数据，以及Redis底层怎么实现
[答案](http://www.mamicode.com/info-detail-1776966.html)

2、Redis缓存穿透，缓存雪崩
[答案](https://www.cnblogs.com/zhangweizhong/p/6258797.html)

3、如何使用Redis来实现分布式锁
[答案](https://www.itcodemonkey.com/article/3944.html)

4、Redis的并发竞争问题如何解决
[答案](https://blog.csdn.net/happy_wu/article/details/78736641)

5、Redis持久化的几种方式，优缺点是什么，怎么实现的
[答案](https://www.cnblogs.com/ssssdy/p/7132856.html)

6、Redis的缓存失效策略
[答案](https://www.cnblogs.com/moonandstar08/p/5686498.html)

7、Redis集群，高可用，原理
[答案](https://www.cnblogs.com/liyasong/p/redis_jiqun.html?utm_source=itdadao&utm_medium=referral)

8、Redis缓存分片
[答案](https://www.cnblogs.com/houziwty/p/5167075.html)

9、Redis的数据淘汰策略
[答案](https://blog.csdn.net/suibo0912hf/article/details/51684625)

JVM
---

1、详细jvm内存模型
[答案](https://blog.csdn.net/genius_ge/article/details/76151179)

2、讲讲什么情况下回出现内存溢出，内存泄漏？
[答案](https://blog.csdn.net/zlts000/article/details/53046620)

3、说说Java线程栈
[答案](https://blog.csdn.net/hust_superman/article/details/39402087)

4、JVM 年轻代到年老代的晋升过程的判断条件是什么呢？
[答案](https://blog.csdn.net/cpcpcp123/article/details/51262940)

5、JVM 出现 fullGC 很频繁，怎么去线上排查问题？
[答案](https://blog.csdn.net/wilsonpeng3/article/details/70064336/)

6、类加载为什么要使用双亲委派模式，有没有什么场景是打破了这个模式？
[答案](https://my.oschina.net/aminqiao/blog/262601)

7、类的实例化顺序
[答案](https://www.cnblogs.com/SirSmith/p/5536288.html)

8、JVM垃圾回收机制，何时触发MinorGC等操作
[答案](https://blog.csdn.net/caomiao2006/article/details/47756233)

9、JVM 中一次完整的 GC 流程（从 ygc 到 fgc）是怎样的
[答案](https://blog.csdn.net/qq_33919114/article/details/79312612)

10、各种回收器，各自优缺点，重点CMS、G1
[答案](https://blog.csdn.net/qq_25396633/article/details/72972008)

11、各种回收算法
[答案](https://www.cnblogs.com/guozhenqiang/p/5621665.html)

12、OOM错误，stackoverflow错误，permgen space错误
[答案](https://blog.csdn.net/sinat_29912455/article/details/51125748)
