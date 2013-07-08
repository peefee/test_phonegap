var TEST = (function(module)  {

	module.ClickMe = function(resultObject) {
		resultObject.prepend(Date() + '<br/>');
	};
	return module;
}(TEST || {}));