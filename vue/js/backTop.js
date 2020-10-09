var backTopVue = new Vue({
    el : "#back-to-top",
    data : {
        //是否显示回到顶部
        backTopShow : false,
        // 是否允许操作返回顶部
        backTopAllow : true,
        // 返回顶部所需时间
        backSeconds : 100,
        // 往下滑动多少显示返回顶部（单位：px）
        showPx : 200
    },
    mounted : function() {
        window.addEventListener("scroll", this.backTopShowOperate, true);
    },
    methods : {
        backTopShowOperate : function() {
            if (!this.backTopAllow) return;
            if (document.body.scrollTop > this.showPx) {
                this.backTopShow = true;
            } else {
                this.backTopShow = false;
            }
        },
        backToTop : function() {
            if (!this.backTopAllow) return;
            this.backToTopShow = false;
            this.backTopAllow = false;
            var step = document.body.scrollTop / this.backSeconds;
            var backTopInterval = setInterval(function() {
                if (document.body.scrollTop > 0) {
                    document.body.scrollTop -= step;
                } else {
                    backTopVue.backTopAllow = true;
                    clearInterval(backTopInterval);
                }
            }, 1);
        }
    }

});