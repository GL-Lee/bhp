function nestButton(){
	configs: [
		{
			site: /.*blog\/.sina\/.com\/.cn.*/,
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
			if(site.test(url)){
				this.nest(configs[i]);
				break;
			}
		}
	}
	nest: function(config){
		this.button[config.nestFun]($(config.position));
	}
}
window.onload = nestButton.init;