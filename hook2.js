(function(){
    // 在网页加载第一个js的位置  第一行下断点，然后手动控制台输入hook 
    var aaa="";
    Object.defineProperty(document, "cookie", {
        set: function(val){
            if (val.indexOf("steamLoginSecure") != -1){
                debugger;
            }
            debugger;
            aaa = val;
            console.log(val);
            return val;
        },
        get:function(){
            // console.log("正在疑似发送请求。。。。")
            // debugger;
            return aaa;
        }
    })
}())



(function(){
    // 在网页加载第一个js的位置  第一行下断点，然后手动控制台输入hook 
    var aaa="";
    Object.defineProperty(window, "byted_acrawler", {
        set: function(val){
            // if (val.indexOf("") != -1){
            //     debugger;
            // }
            debugger;
            aaa = val;
            console.log(val);
            return val;
        },
        get:function(){
            return aaa;
        }
    })
}())


(function(){
    // 在网页加载第一个js的位置  第一行下断点，然后手动控制台输入hook 
    var aaa="";
    Object.defineProperty(this, "m_rgRequestID", {
        set: function(val){
            // if (val.indexOf("") != -1){
            //     debugger;
            // }
            debugger;
            aaa = val;
            console.log(val);
            return val;
        },
        get:function(){
            return aaa;
        }
    })
}())
