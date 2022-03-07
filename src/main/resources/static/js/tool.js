//a.功能：将对象，往某个方向移动 （上下或左右）
//  参数：
//      obj：移动对象，
//      ss：位置参数（left top），
//      target：移动的目标位置，
//      speed：移动的速度
//      callback：回调函数
function move(obj,ss,target,speed,callback) {
    clearInterval(obj.timer);
    var current=parseInt(getStyle(obj,ss));
    if(current>target){
        speed=-speed;
    }
    obj.timer=setInterval(function () {
        var oldValue=parseInt(getStyle(obj,ss));
        var newValue=oldValue+speed;
        if((speed<0&&newValue<target)||(speed>0&&newValue>target)){
            newValue=target;
        }
        obj.style[ss]=newValue+"px";
        if(newValue===target){
            clearInterval(obj.timer);
            callback();
        }

    },30)
}
//b.获取对象的样式值，
//  参数：
//  obj：对象，
//  name：样式名
//  返回值：样式的值
function getStyle(obj,name) {
    if(window.getComputedStyle){
        //正常浏览器的方式，具有getComputedStyle()方法
        return getComputedStyle(obj,null)[name];
    }else{
        //IE8的方式，没getComeputedStyle方法
        return obj.currentStyle[name];
    }
}
// c.功能：给对象添加删除某个‘类样式’
//      参数：
//      obj：对象
//      cn：类的名称
function addClass(obj,cn) {
    if(!hasClass(obj,cn)){
        obj.className += " "+cn;
    }
}
function hasClass(obj,cn) {
    var reg=new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
}
function removeClass(obj,cn){
    var reg=RegExp("\\b"+cn+"\\b");
    obj.className = obj.className.replace(reg,"");

}
function toggleClass(obj,cn){
    if(hasClass(obj,cn)){
        removeClass(obj,cn);

    }else{
        addClass(obj,cn);

    }
}
//d.功能：使二级菜单缓慢上下移动，结合c功能使用
//          参数：obj：需要拉开或者集合的菜单对象
function toggleMeau(obj){
    var begin=obj.offsetHeight;
    toggleClass(obj,"collapsed");
    var end=obj.offsetHeight;

    obj.style.height=begin+"px";
    move(obj,"height",end,10,function () {
        obj.style.height="";
    })
}


