window.onload=function(){
    //获取meau类
    var meau=document.querySelectorAll(".meau");
    var my_meau=document.getElementById("my_meau");

    //为span绑定单击响应函数
    for(var i=0;i<meau.length;i++){
        meau[i].onclick=function () {
            var parentDiv = this.parentNode;

            toggleMeau(parentDiv);
            // removeClass(parentDiv,"collapsed");
            // teggleClass(this.parentNode,"collapsed");
            if(openDiv !=parentDiv && !hasClass(openDiv,"collapse") ){
                toggleMeau(openDiv);
            }
        }
    }

    openDiv=parentDiv;
    //切换菜单,使之能够上下缓慢移动
    function toggleMeau(obj){
        var begin=obj.offsetHeight;
        toggleClass(obj,"collapsed");
        var end=obj.offsetHeight;

        obj.style.height=begin+"px";
        move(obj,"height",end,10,function () {
            obj.style.height="";
        })
    }

}