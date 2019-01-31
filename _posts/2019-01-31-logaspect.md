---
layout: post
title: 日志aop
date: 2019-01-31
tags: Chinese
category: blog
is_share: true
disqus_comments: true
description: 接口打印入参出参日志
---
代码：

	@Aspect
	public class LogAspect {

		private final Logger logger = LoggerFactory.getLogger(this.getClass());

		private String requestPath = null ; // 请求地址
		private Map<?,?> inputParamMap = null ; // 传入参数
		private Map<String, Object> outputParamMap = null; // 存放输出结果
		private long startTimeMillis = 0; // 开始时间
		private long endTimeMillis = 0; // 结束时间
		private String requestMethod;
		private String jsonParams;

		/**
		 * 
		 * @Title：doBeforeInServiceLayer
		 * @Description: 方法调用前触发 
		 * @param joinPoint
		 */
		@Before("execution(* com.xxx.controller..*.*(..))")
		public void doBeforeInServiceLayer(JoinPoint joinPoint) {
			RequestAttributes ra = RequestContextHolder.getRequestAttributes();
			ServletRequestAttributes sra = (ServletRequestAttributes)ra;
			HttpServletRequest request = sra.getRequest();
			// 获取输入参数
			inputParamMap = request.getParameterMap();
			// 获取请求地址
			requestPath = request.getRequestURI();
			requestMethod = request.getMethod();
			jsonParams = "";
			if (requestMethod.equals("POST") || requestMethod.equals("PUT") || requestMethod.equals("DELETE")) {
				jsonParams = JSONObject.toJSONString(joinPoint.getArgs());
			}
			startTimeMillis = System.currentTimeMillis(); // 记录方法开始执行的时间
		}

		/**
		 * 
		 * @Title：doAfterInServiceLayer
		 * @Description: 方法调用后触发 
		 * @param joinPoint
		 */
		@After("execution(* com.xxx.controller..*.*(..))")
		public void doAfterInServiceLayer(JoinPoint joinPoint) {
			endTimeMillis = System.currentTimeMillis(); // 记录方法执行完成的时间
			this.printOptLog();
		}

		/**
		 * 
		 * @Title：doAround
		 * @Description: 环绕触发 
		 * @return
		 * @throws Throwable
		 */
		@Around("execution(* com.xxx.controller..*.*(..))")
		public Object doAround(ProceedingJoinPoint pjp) throws Throwable {
			try {
				// 执行完方法的返回值：调用proceed()方法，就会触发切入点方法执行
				outputParamMap = new HashMap<String, Object>();
				Object result = pjp.proceed();// result的值就是被拦截方法的返回值
				outputParamMap.put("result", result);
				
				return result;
			} catch(BusinessException e) {
				Result result = Result.fail().setErrCodeAndMsg(e.getCode(), e.getMessage());
				outputParamMap.put("result", result);
				return result;
			} catch (Exception e) {
				logger.error(e.toString(), e);
			}
			return pjp.proceed();
		}

		/**
		 * @Title：printOptLog
		 * @Description: 输出日志 
		 */
		private void printOptLog() {
			Gson gson = new Gson();
			StringBuilder sb = new StringBuilder();
			if (StringUtils.isNotEmpty(jsonParams) && jsonParams.length() > 500) {
				jsonParams = jsonParams.substring(0, 500) + "...";
			}
			String result = gson.toJson(outputParamMap);
			if (result.length() > 500) {
				result = result.substring(0, 500) + "...";
			}
			sb.append("\n");
		    sb.append("Method    : ").append(requestMethod).append("\n");
		    sb.append("JSONParams: ").append(jsonParams).append("\n");
		    sb.append("Params    : ").append(gson.toJson(inputParamMap)).append("\n");
		    sb.append("URI       : ").append(requestPath).append("\n");
		    sb.append("Time      : ").append((endTimeMillis - startTimeMillis) + "ms").append("\n");
		    sb.append("Result    : ").append(result);
		    
			logger.info(sb.toString());
		}
	}
