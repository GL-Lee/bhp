var nestButton = {
	configs: [
		{
			site: /.*blog\.sina\.com\.cn.*/,
			position: "#base_tools",
			nestFun: "appendTo"
		}
	],
	init: function(){
		var buttonHTML = "<a href='javascript:void(0)'>ref</a>";
		this.button = $(buttonHTML);
		var configs = this.configs;
		var url = location.href;
		for(var i = 0; i < configs.length; i++){
			if(configs[i].site.test(url)){
				this.nest(configs[i]);
				this.bindEvents();
				break;
			}
		}

	},
	bindEvents: function(){
		var _this = this;
		this.button.bind("click", function(event){
			// _this.openInput();
			chrome.runtime.sendMessage({active: "getContent",url: "http:www.baidu.com"}, function(response) {
			  console.log(response.farewell);
			});
			event.preventDefault();
			event.stopPropagation();
		});
	},
	nest: function(config){
		this.button[config.nestFun]($(config.position));
	},
	openInput: function(){
		var inputPanel = $("#bhp-bbb");
		if(inputPanel.length == 0){
			var panelHTML = "<div id='bhp-bbb'>"+
								"<input/>"+
							"</div>";
			var css = {
				position: "absolute",
				display: "none"
			}
			inputPanel = $(panelHTML).appendTo($("body"));
			inputPanel.css(css);
		}
		inputPanel.show();
	}
}
window.onload = function(){
	nestButton.init();
	chrome.runtime.onMessage.addListener(
	  function(request, sender, sendResponse) {
	    console.log(sender.tab ?
	                "from a content script:" + sender.tab.url :
	                "from the extension");
	    if (request.active == "getContent"){
	    	$(request.content).find("#content").appendTo($( "body",window.frames[1].document))
	    }
	      // sendResponse({farewell: "goodbye"});
	});
}