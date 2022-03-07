package com.kang.controller;
import com.kang.pojo.Area;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Component//将类交给spring容器管理
@Controller
@ConfigurationProperties(prefix = "are")//配置属性注解,引号中的是前缀
public class hellocontroller {

    @Autowired//注入依赖（spring容器）
    private Area are;


    @RequestMapping("hello")
    public @ResponseBody String say(){
        return "hello:"+are.getId()+"号";
    }

    @RequestMapping("main")
    public String ma(){
        System.out.println("3121");
        return "main";
}
    @RequestMapping("newmain")
    public String newmain(){
        System.out.println("3121");
        return "newmain";
    }
    @RequestMapping("history")
    public String history(){
        System.out.println("3121");
        return "history";
    }
    @RequestMapping("informationStatistics")
    public String informationStatistics(){
        System.out.println("3121");
        return "informationStatistics";
    }
    @RequestMapping("peanutClassification")
    public String peanutClassification(){
        System.out.println("3121");
        return "peanutClassification";
    }
    @RequestMapping("index")
    public String index(){
        System.out.println("3121");

        return "index";
    }
}
