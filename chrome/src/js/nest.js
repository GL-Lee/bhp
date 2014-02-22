var configs = {
	bk_configs:[
		{
			site: /.*blog\.sina\.com\.cn.*/,
			button:{
				position: "#base_tools",
				nestFun: "appendTo",
				buttonStyle: {
					display: "block",
					float: "right",
					width: "75px",
					height: "25px",
					"line-height": "25px",
					border: "solid 2px",
					"margin-top": "5px",
					"font-weight": "bold",
					color: "blue",
					"border-color": "grey",
				}
			}
		}
	],
	wb_configs:[
		{
			site: /http:\/\/weibo\.com.*/,
			content:{
				headPic_selector: ".pf_head_pic img",
				username_selector: ".username strong, .pf_name .name",
				detail_selector:".WB_detail",
				css:{},
				reg:"\"html\":(.*?)\\}\\)<\/script>",
				iframeSelector: "#SinaEditor_Iframe iframe",
				appendPosition: "body",
				processContent:"function process(content, html){var a=content;}"
			}
		},
		{
			site: /http:\/\/e\.weibo\.com.*/,
			content:{
				headPic_selector: ".logo_img img",
				username_selector: ".title_big",
				detail_selector:".content",
				css:{},
				reg:"\"html\":(.*?)\\}\\)<\/script>",
				iframeSelector: "#SinaEditor_Iframe iframe",
				appendPosition: "body",
				processContent:"function process(content, html){var a=content;}"
			}
		}
	]
}
var wb_confings = [
	{
		site:/http:\/\/weibo\.com.*/,
		headPicSrc: ".pf_head_pic img", //img
		name:".username strong, .pf_info .name", //a
		text:".WB_text",
		media_list:".WB_media_list",
		media_expand:"",
		func:".WB_func",
		content: "",
		render: function(html){
			var wcontent = $(html);
			var scripts = html.match(/.*<script.*?\}\)<\/script>/g);
			var tmpStr = "";
			for(var i = 0; i < scripts.length; i++){
				var result = scripts[i].match(/.*"html":(.*)\}\)<\/script>.*/);
				if(result){
					tmpStr = eval(result[1]);
					wcontent = wcontent.add(tmpStr);
				}
			}
	    	return wcontent;
		}
	},
	{
		site:/http:\/\/e\.weibo\.com.*/,
		content:"",
		css:[
			{
				selector:"",
				style:{

				}
			}
		]
	}
]
var nestButton = {
	inited: false,
	button:null,
	css:{},
	init: function(config){
		if(this.inited || !config) return;
		this.config = config; 
		var position = config.position;
		var positionEle = null;
		var times = 0;
		var _this = this;
		var interval = setInterval(function(){
			positionEle = $(position);
			if(positionEle.length > 0 || times > 20){
				_this.render();
				_this.bindEvents();
				_this.inited = true;
				clearInterval(interval);
			}
		}, 1000)
	},
	render: function(){
		var config = this.config;
		var positionEle = $(config.position);
		var buttonHTML = "<a href='javascript:void(0)'>pick weibo</a>";
		this.button = $(buttonHTML)[config.nestFun](positionEle);
		this.button.css(this.css);
		this.button.css(config.buttonStyle);
	},
	bindEvents: function(){
		var _this = this;
		this.button.bind("click", function(event){
			var left = event.clientX + document.body.scrollLeft;
			var top = event.clientY + document.body.scrollTop+20
			inputPanel.show(left, top);
			event.preventDefault();
			event.stopPropagation();
		});
	},
	openInput: function(left, top){
		var inputPanel = $("#bhp-bbb");
		if(inputPanel.length == 0){
		}
		inputPanel.show();
	}
}
var inputPanel = {
	inited:false,
	init: function(){
		if(this.inited) return;
		this.render();
		this.bindEvents();
		this.inited = true;
	},
	render: function(){
		var panelHTML = "<div id='bhp-bbb'>"+
							"<input/>"+
							"<a href='javascript:void(0)'>insert</a>"+
							"<span style='display:none'>载入中...</span>"
						"</div>";
		var divcss = {
			position: "absolute",
			"background-color": "white",
			border: "solid 1px",
			padding: "5px"
		}
		var inputcss = {
			height: "25px",
			width: "200px",
			"margin-right": "10px"
		}
		var panel = this.panel = $(panelHTML).appendTo($("body"));
		panel.css(divcss);
		panel.find("input").css(inputcss);
	},
	bindEvents: function(){
		var panel = this.panel;
		panel.find("a").bind("click", function(){
			var url = panel.find("input").val();
			if(!url) return;
			chrome.runtime.sendMessage({active: "getContent",url: url}, function(response) {
			 	console.log(response.farewell);
			});
			panel.find("span").show();
			event.preventDefault();
			event.stopPropagation();
		})
	},
	show: function(left, top){
		if(!this.inited){
			this.init();
		}
		var panel = this.panel;
		panel.css("left", left);
		panel.css("top", top);
		panel.show();
	},
	hide: function(){
		var panel = this.panel;
		panel.hide().find("span").hide();
	}
}
function WB(configs, bk_url, wb_url, pageHtml) {
	this.bk_config = null;
	this.wb_config = null;
	var bk_configs = configs.bk_configs;
	for(var i = 0; i < bk_configs.length; i++){
		if(bk_configs[i].site.test(bk_url)){
			this.bk_config = bk_configs[i];
		}
	}
	var wb_configs = configs.wb_configs;
	for(var i = 0; i < wb_configs.length; i++){
		if(wb_configs[i].site.test(wb_url)){
			this.wb_config = wb_configs[i];
		}
	}
	this.pageHtml = pageHtml;
}
WB.prototype.get_wbContent = function(){
	var html = this.pageHtml;
	var content = $(html);
	var configc = this.wb_config.content;
	if(configc.reg){
		var reg = new RegExp(configc.reg, "g");
		var result = null;
		while(result = reg.exec(html)){
			content = content.add(eval(result[1]));
		}
	}
	if(configc.processContent){
		eval(configc.processContent);
		process(content, html);
	}
	return content;
}
WB.prototype.insert = function(){
	var content = this.get_wbContent();
	var configc = this.wb_config.content;
	var doc = $(configc.iframeSelector)[0].contentWindow.document;
	var contentHTML =  	"<div class='wbpick_content'>"+
							"<div class='wbpick-user-info'>"+
								"<img class='wbpick-head-pic'/>"+
								"<span class='wbpick-username'>"+
							"</div>"+
							"<div class='wbpick-detail'/>"+
						"</div>";
	var wb_content = $(contentHTML);
	wb_content.find(".wbpick-head-pic").attr("src", content.find(configc.headPic_selector).attr("src"));
	wb_content.find(".wbpick-username").text(content.find(configc.username_selector).text());
	wb_content.find(".wbpick-detail").append(content.find(configc.detail_selector));

	wb_content.appendTo($( configc.appendPosition, doc));
}
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	    if (request.active == "getContent"){
	    	var wb_url = request.url;
	    	var bk_url = location.href;
	    	var pageHtml = request.html;
	    	var wb = new WB(configs, bk_url, wb_url,  pageHtml);
	    	wb.insert();
	    	inputPanel.hide();
	    }
	}
);
var bk_url = location.href;
var bk_config = null;
var bk_configs = configs.bk_configs;
for(var i = 0; i <　bk_configs.length; i++){
	if(bk_configs[i].site.test(bk_url)){
		bk_config = bk_configs[i];
		break;
	}
}
if(bk_config){
	nestButton.init(bk_config.button);
}
