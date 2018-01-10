/**
 * Module化开发插件
 * 
 * wx
 * 
 * 2018/01/05 00:15
 * 
 * HelloWorld：给标签 打印HelloWorld
 * 
 */


var HelloWorld = function(objId){

	//获取dom对象
	var _get_dom = function(objId){
		return document.getElementById(objId);
	}

	//定义目标对象
	var _aim_obj = _get_dom(objId);

	//say hello world
	var _say_hello = function(str){
		_aim_obj.innerHTML = str;
	}

	return {
		sayHello = _say_hello
	}

}


















