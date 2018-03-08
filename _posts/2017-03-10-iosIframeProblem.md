---
layout: post
title: 记一个兼容性问题
date: 2017-03-10
tags: Chinese
category: 问题解决
is_share: true
disqus_comments: true
description: iframe中焦点移出输入框iphone键盘却没有隐藏
---

故事的起因是这样的：主角是一个搜索框，它在安卓中、网页浏览器中工作的好好的。可是它却在iphone中闹起了情绪。并且这个页面嵌在iframe中的时候才会出现这个问题。

点击搜索后强行将input焦点移出来也并不管用：

	$('searchBtn').click(function() {
		$('input').blur();	
	})

问题出在使用了神奇的iframe上，这个时候就要派出更神奇的$(window)了：

------

step 1
------

	var inputFocused = false;
	$('input').focus(function() {
        setTimeout(function() {
            inputFocused = true;
        },100);
    });

step 2
------

	$(window).click(function() {
	    if(inputFocused == true) {
	        $(window).focus();
	        $('input').blur();
	        inputFocused = false;
	    }
	});

------
至于为什么要加setTimeOut方法是因为 $(window).click()事件包括了屏幕上所有的点击，所以要让inputFocused为true有一些延迟咯 :)