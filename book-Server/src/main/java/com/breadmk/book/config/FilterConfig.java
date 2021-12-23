package com.breadmk.book.config;

import javax.servlet.Filter;
import javax.servlet.ServletException;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

//@Configuration
public class FilterConfig {

  @Bean
  public FilterRegistrationBean<?> corsFilter() {
    System.out.println("CORS 필터 등록");
    FilterRegistrationBean bean = new FilterRegistrationBean<>(new Filter() {
      public void doFilter(javax.servlet.ServletRequest request, ServletResponse response,
          javax.servlet.FilterChain chain) throws java.io.IOException, ServletException {
        HttpServletResponse resp = (HttpServletResponse) response;
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "*");
        resp.setHeader("Access-Control-Allow-Headers", "*");
        resp.setHeader("Access-Control-Expose-Headers", "*");
        chain.doFilter(request, response);
      };
    });
    bean.addUrlPatterns("/*");
    return bean;
  }

}
