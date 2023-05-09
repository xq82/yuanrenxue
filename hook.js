(function(){
    // 在网页加载x第一个js的位置  第一行下断点，然后手动控制台输入hook 
    var aaa="";
    Object.defineProperty(document, "cookie", {
        set: function(val){
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

    Function.prototype.constructor_ = Function.prototype.constructor;
    Function.prototype.constructor = function(x){
    if (x!=='debugger'){return Function.prototype.constructor_(x)}
}


(function(){
    // 在网页加载第一个js的位置  第一行下断点，然后手动控制台输入hook 
    var aaa="";
    Object.defineProperty(document, "cookie", {
        set: function(val){
            if (val.indexOf("acw_tc") != -1){
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


eval_ = eval;
//下面这样写，是为了过瑞数的 eval.toString 检测
eval = function(a){if(a=='debugger'){return ''}else{return eval_(a)}}    
setInterval = function(){}

}())






Function.prototype.__constructor_back = Function.prototype.constructor;
Function.prototype.constructor = function() {
if(arguments && typeof arguments[0]==='string'){
    //alert("new function: "+ arguments[0]);
    if("debugger" === arguments[0]){
        //arguments[0]="console.log(\"anti debugger\");";
        //arguments[0]=";";
        return
    }
}
return Function.prototype.__constructor_back.apply(this,arguments);
}



(function(){
    // 在网页加载第一个js的位置  第一行下断点，然后手动控制台输入hook 
    var aaa="";
    Object.defineProperty(document, "cookie", {
        set: function(val){
            debugger;
            aaa = val;
            console.log(val);
            return val;
        },
        get:function(){
            // console.log("正在疑似发送请求。。。。")
            debugger;
            return aaa;
        }
    })

}())