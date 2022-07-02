window.onload = function(){
    var outer = document.getElementById("outer");
    var imgList = document.getElementById("imgList");
    var arr =document.getElementsByTagName("img");
    imgList.style.width = 653*arr.length+"px";  
    var navDiv = document.getElementById("navDiv");
    navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/2 + "px";

    var index = 0;
    var arr2 = document.getElementsByTagName("a");
    arr2[index].style.backgroundColor = "gray";

    for(var i=0;i<arr2.length;i++)
    {
        arr2[i].num = i;
        arr2[i].onclick = function(){

            // 关闭自动切换的定时器 很重要

            clearInterval(timer);

            index = this.num;
            fun();
            // imgList.style.left = -653*index+"px";
            move(imgList,"left",-653*index,30,
                function(){
                    auto();
                    // 第20行把定时器给关了，动画执行完毕必须给再开开，
                    // 不然点击一次过后动画执行完后，自动切换就不会开启了，
                    // 整个js代码只执行一次，全局作用域的auto()关闭后不会
                    // 自动打开
                }
            );
            //auto();

            // auto放move的回调函数里与回调函数外有很大区别
            // 1.放回调函数里会保证在动画执行完毕后再次开启定时
            // 播放，这样保证了自己点击一次，点击完毕后开启自动
            // 播放
            // 2.而放在回调函数外，不会保证动画执行完毕后再开启定时器
            // 有可能在点击一次后，图片还没有完全翻到指定的地方定时器就开了
            // 也就是代码第25行执行完了，并不是move函数执行完了

        }
    }

    auto();
    
    function fun(){

        if(index>=arr.length-1)
        {
            index = 0;
            imgList.style.left = 0;
        }

        for(var i=0;i<arr2.length;i++)
        {
            arr2[i].style.backgroundColor = "";
            // 不让内联样式盖住样式表里的样式，不会把hover覆盖
        }
        arr2[index].style.backgroundColor = "gray";
    }

    
    
    function move(obj,styl,target,speed,callback){

        clearInterval(obj.timer);

        var nowLeft = parseInt(getStyle(obj,styl));
        if(nowLeft > target)
        {
            speed = -speed;
        }

        obj.timer = setInterval(function(){
            var oldLeft = parseInt(getStyle(obj,styl));
            var newLeft = oldLeft+speed;
            //向左移动时，需要判断newValue是否小于target
		    //向右移动时，需要判断newValue是否大于target
		    if((speed < 0 && newLeft < target) || (speed > 0 && newLeft > target)) {
			    newLeft = target;
		    }
            obj.style[styl] = newLeft+"px";
            if(newLeft === target)
            {
                clearInterval(obj.timer);
                callback();
            }
        },30)
    }

    function getStyle(obj,styl){
        return getComputedStyle(obj,null)[styl];
    }

    var timer;
    function auto(){
        timer = setInterval(function(){
            index++;
            index %= arr.length;
            move(imgList,"left",-653*index,30,function(){
                fun();
            });
        },3000)
    }
}
