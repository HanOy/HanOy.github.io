---
layout: post
title: mysql批量更新的几种方式
date: 2016-03-04
tags: Chinese
category: blog
disqus_comments: true
is_share: true
description: 最近安排我去帮同事做基础数据的导入，知道了一些老师没教过的批量更新的黑科技，特整理一下
---

最近安排我去帮同事做基础数据的导入，知道了一些老师没教过的批量更新的黑科技，特整理一下：

首先先假设有student表吧，有name，age，class三个column，主键是name。

基础数据：

	INSERT INTO student (name, age, class)
	VALUES
		('张三', '3', '三班'),
		('李四', '4', '四班'),
		('王五', '5', '五班');

当我们要把张三换到二班：

	update student set class = '二班' 
	where name = '张三';

当我们要把张三、李四、王五都换到二班去，前提是不能删除后新增，毕竟删除有风险，断个电啥的：
	
	update student set class = '二班' 
	where name in ('张三','李四','王五');

上面这条语句只适用于所有同学都换到二班的情况，现在他们都在二班了，把他们还原到原来班级的话，就不适用了，只能这样先：

	update student set class = '三班' where name = '张三';
	...                        '四班'  ...         '李四';
	...                        '五班'  ...         '王五';

那么一个foreach，循环上述3条语句，这也是很好实现的。问题就是当成千上万条数据，那么就有成千上万个数据库连接，这样是效率很低的，我们考虑一条sql完成批量更新不同字段，下面有三种方式。

case when
---------

二班所有人都回到原班级：
	
	UPDATE student SET class = 
	CASE
		WHEN NAME = '张三' THEN '三班'
		WHEN NAME = '李四' THEN '四班'
		WHEN NAME = '王五' THEN '五班' 
	END;

这样我们就实现了一条sql完成批量更新的任务了，具体实现呢，也很直观，用循环去拼接sql。

不好的地方：如果是修改很多字段，那么每个字段都必须有case，如果修改的记录很多，when也同样那么多，这样的话，这条sql就太长了吧。。

replace into
------------

还是假设他们在二班，二班所有人都回到原班级：

	REPLACE INTO student (name,class) 
	values 
		('张三','三班'),
		('李四','四班'),
		('王五','五班');

首先说下 replace into，它和 insert into 类似，可以说是insert into的加强版。

加强的地方在于：replace into 先尝试插入数据到表，如果发现表中已有此行数据（根据主键或唯一索引）则先删除原数据，然后再插入新数据，否则就是直接插入新数据。

我们看下上面这条语句的执行结果，受影响的行是6，说明先删了3条，再增了3条，增加的三条age字段都是null，因为我们没有给age字段的数据，所以真正完整的sql应该是这样：

	REPLACE INTO student (name,age,class) 
	values 
		('张三','3','三班'),
		('李四','4','四班'),
		('王五','5','五班');

注意的地方：要记得把所有的字段都放进去吧,不然age字段就没啦。必须要有主键或者索引，如果有多个索引，它会删除所有索引匹配到的所有记录的。

on duplicate key update
-----------------------

还是假设他们在二班，二班所有人都回到原班级：
	
	INSERT INTO student (NAME, class)
	VALUES
		('张三', '三班'),
		('李四', '四班'),
		('王五', '五班') 
	ON DUPLICATE KEY UPDATE class = VALUES(class);

如果只是单纯的修改的话，上述语句已经达到了我们的要求。这种方式也是先增，如果记录中有则update。修改多条记录的话，就是这样：

	INSERT INTO student (NAME, age, class)
	VALUES
		('张三', 1, '三班'),
		('李四', 1, '四班'),
		('王五', 1, '五班') 
	ON DUPLICATE KEY UPDATE 
		class = VALUES(class),
		age = VALUES(age);

要注意的是：还是需要主键或索引的。

