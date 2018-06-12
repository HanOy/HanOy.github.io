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
[答案](https://www.cnblogs.com/chenpi/p/5489732.html)


JAVA并发
---

1、synchronized 的实现原理以及锁优化？
2、volatile 的实现原理？
3、Java 的信号灯？
4、synchronized 在静态方法和普通方法的区别？
5、怎么实现所有线程在等待某个事件的发生才会去执行？
6、CAS？CAS 有什么缺陷，如何解决？
7、synchronized 和 lock 有什么区别？
8、Hashtable 是怎么加锁的 ？
9、HashMap 的并发问题？
10、ConcurrenHashMap 介绍？1.8 中为什么要用红黑树？
11、AQS
12、如何检测死锁？怎么预防死锁？
13、Java 内存模型？
14、如何保证多线程下 i++ 结果正确？
15、线程池的种类，区别和使用场景？
16、分析线程池的实现原理和线程的调度过程？
17、线程池如何调优，最大数目如何确认？
18、ThreadLocal原理，用的时候需要注意什么？
19、CountDownLatch 和 CyclicBarrier 的用法，以及相互之间的差别?
20、LockSupport工具
21、Condition接口及其实现原理
22、Fork/Join框架的理解
23、分段锁的原理,锁力度减小的思考
24、八种阻塞队列以及各个阻塞队列的特性

Spring
---

1、BeanFactory 和 FactoryBean？
2、Spring IOC 的理解，其初始化过程？
3、BeanFactory 和 ApplicationContext？
4、Spring Bean 的生命周期，如何被管理的？
5、Spring Bean 的加载过程是怎样的？
6、如果要你实现Spring AOP，请问怎么实现？
7、如果要你实现Spring IOC，你会注意哪些问题？
8、Spring 是如何管理事务的，事务管理机制？
9、Spring 的不同事务传播行为有哪些，干什么用的？
10、Spring 中用到了那些设计模式？
11、Spring MVC 的工作原理？
12、Spring 循环注入的原理？
13、Spring AOP的理解，各个术语，他们是怎么相互工作的？
14、Spring 如何保证 Controller 并发的安全？


数据库
---

1、mysql分页有什么优化
2、悲观锁、乐观锁
3、组合索引，最左原则
4、mysql 的表锁、行锁
5、mysql 性能优化
6、mysql的索引分类：B+，hash；什么情况用什么索引
7、事务的特性和隔离级别

缓存
---

1、Redis用过哪些数据数据，以及Redis底层怎么实现
2、Redis缓存穿透，缓存雪崩
3、如何使用Redis来实现分布式锁
4、Redis的并发竞争问题如何解决
5、Redis持久化的几种方式，优缺点是什么，怎么实现的
6、Redis的缓存失效策略
7、Redis集群，高可用，原理
8、Redis缓存分片
9、Redis的数据淘汰策略

JVM
---

1、详细jvm内存模型
2、讲讲什么情况下回出现内存溢出，内存泄漏？
3、说说Java线程栈
4、JVM 年轻代到年老代的晋升过程的判断条件是什么呢？
5、JVM 出现 fullGC 很频繁，怎么去线上排查问题？
6、类加载为什么要使用双亲委派模式，有没有什么场景是打破了这个模式？
7、类的实例化顺序
8、JVM垃圾回收机制，何时触发MinorGC等操作
9、JVM 中一次完整的 GC 流程（从 ygc 到 fgc）是怎样的
10、各种回收器，各自优缺点，重点CMS、G1
11、各种回收算法
12、OOM错误，stackoverflow错误，permgen space错误
