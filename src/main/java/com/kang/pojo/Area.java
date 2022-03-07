package com.kang.pojo;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component//此注解将该类交给spring容器进行管理
@ConfigurationProperties(prefix = "area")//配置属性注解
public class Area {
    private int Id;
    private String provinceName;
    private String cityName;
    private String countyName;

    public Area() {
    }

    public Area(int id, String provinceName, String cityName, String countyName) {
        Id = id;
        this.provinceName = provinceName;
        this.cityName = cityName;
        this.countyName = countyName;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getProvinceName() {
        return provinceName;
    }

    public void setProvinceName(String provinceName) {
        this.provinceName = provinceName;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public String getCountyName() {
        return countyName;
    }

    public void setCountyName(String countyName) {
        this.countyName = countyName;
    }

    @Override
    public String toString() {
        return "area{" +
                "Id=" + Id +
                ", provinceName='" + provinceName + '\'' +
                ", cityName='" + cityName + '\'' +
                ", countyName='" + countyName + '\'' +
                '}';
    }
}
