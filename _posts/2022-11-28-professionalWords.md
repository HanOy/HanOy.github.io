---
layout: post
title: 各种专业名词整理
date: 2022-11-28
category: blog
description: 有时候看文章经常碰见一些专业名词，明明一直在我眼前晃悠，但又一遍一遍百度
---

ACID
---
在计算机科学中，ACID（原子性，一致性，隔离性，持久性）是数据库事务的一组属性， 旨在即使在发生错误，断电等情况下也可以确保有效性。

JAVA多线程
---
并发编程需遵循的三个原则：原子性、可见性、有序性

分布式
---
分布式架构又有“一致性”问题，而“一致性”包含了数据一致性和事务一致性两种情况，那这里的就是数据一致性（事务一致性指ACID）。

1、原子性（Atomicity）
- 在数据库事务中和多线程中，它表达的含义是一样的：一个操作是不可中断的，要么全部执行成功要么全部执行失败。

2、一致性（Consistency）
- 在数据库事务中，先看看官方的解释：一致性是指事务必须使数据库从一个一致性状态变换到另一个一致性状态，也就是说一个事务执行之前和执行之后都必须处于一致性状态。我理解的大概意思是，事务前后数据都必须是遵守规定并且正确的吧。
- 在分布式架构中，一致性指代数据一致性，又有几种实现方案：强一致性、弱一致性、最终一致性、读写一致性、单调读、因果一致性。都是对分布式数据的一致性的保障，比较好理解。

3、隔离性（Isolation）
- 数据事务的隔离性其实就是数据库对多事务并发执行的一个控制，描述了多个事务并发执行时，事务与事务之间操作数据的可见性。定义了4个隔离级别，就是4种控制规则，不展开了。

4、持久性（Durability）
- 持久性是事务的保证，事务终结的标志(内存的数据持久到硬盘文件中)。在一个事务提交之后，事务的状态就会被持久化到数据库中，对数据的更新、新增等操作将会持久化到数据库中。
- 为啥需要持久性： Buffer Pool 是在内存的，是易失性的，如果一个事务提交了事务后，MySQL突然宕机，且此时Buffer Pool中修改的数据还没有刷新到磁盘中的话，就会导致数据的丢失。
- 解决方案：引入redo log当数据修改时，InnoDB除了修改Buffer Pool中的数据，还会在redo log 记录这次操作，并保证redo log早于对应的页面落盘，也就是常说的WAL。若MySQL突然挂掉且还没有把数据写入磁盘，重启后，MySQL会通过已经写入磁盘的redo log来恢复没有被刷新到磁盘的数据页。

5、可见性
- 变量刷新到主内存，各个线程从主内存中获取值

6、有序性
- 顾名思义，有序性指的是程序按照代码的先后顺序执行。编译器为了优化性能，有时候会改变程序中语句的先后顺序。

7、可重入性