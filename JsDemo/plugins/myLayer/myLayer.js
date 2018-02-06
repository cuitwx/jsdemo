/**
 * author:王新
 *
 * time:2018/02/02
 *
 * describe:采用闭包方式 实现弹出层插件
 */

(function(){

	//首先定义默认参数
	var options = {
		width:"100px"
		,height:"100px"
		,title:"弹出层"		
	}


	//可定义其它方法


	//定义api
	var api = {
		//配置方法：修改默认参数
		//opts：新的参数
		config:function(opts){
			if(!opts) return options;

			//遍历
			for(var key in opts){
				options[key] = opts[key];
			}

			return this;
		}
		//监听方法：监听dom元素
		,listen:function(elems){

			document.write('old options title：' + options.title + '<br>');

			options.title = "新的弹出层";

			document.write('new options title：' + options.title);

		}
		//初始化弹出层
		,init:function(){
			
		}
	}


	//定义插件名字，将api结合起来
	this.myLayer = api;


})(); //匿名函数方式















