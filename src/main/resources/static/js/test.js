var uiWrapPos = {
    uiWrapId: '#Wraper',
    defaultTop: 20,    //设置默认top值
    init: function() {
        var self = this;
        this.setFormPos();
        $(window).resize(function(){
            self.setFormPos();
        });
    },
    setFormPos: function() {
        var uiWrap = $(this.uiWrapId),
            uiWrapWidth = uiWrap.width(),    //获取自适应div宽度
            uiWrapHeight = uiWrap.height(),    //获取自适应div高度
            winWidth = $('html').width(),    //获取屏幕宽度
            winHeight = $('html').height(),    //获取屏幕高度
            top = (winHeight - uiWrapHeight) / 2 - this.defaultTop > 0 ? (winHeight - uiWrapHeight) / 2 - this.defaultTop : (winHeight - uiWrapHeight) / 2,    //设置top值
            left = (winWidth - uiWrapWidth) / 2;   //设置left值
        uiWrap.css({ 'top': top, 'left': left })
    }
}

$(function(){
    // 位置重设
    uiWrapPos.init();
});