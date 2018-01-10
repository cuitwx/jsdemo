
/**
 * 第一个插件
 * 2018-01-06 23:55
 * 王新
 */

; //加上这个分号的目的是为了防止前面的代码影响到下面的代码，可能会引起报错
var plug = (function(){

	var _print_str = function(str){
		document.write(str);
	};

	return {
		print_str : _print_str
	}

})();