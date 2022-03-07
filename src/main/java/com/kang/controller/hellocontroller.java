package com.kang.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class hellocontroller {



    @RequestMapping("hello")
    public @ResponseBody String say(){
        return "hello:";
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
