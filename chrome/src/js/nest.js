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
			},
			content:{
				iframeSelector: "#SinaEditor_Iframe iframe",
				appendPosition: "body",
			}
		},
		{
			site: /.*blog\.sohu\.com*/,
			button:{
				position: "#menuContainer",
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
			},
			content:{
				iframeSelector: "#ifrEditorContainer iframe",
				appendPosition: "body"
			}
		}
	],
	wb_configs:[
		{
			site: /http:\/\/weibo\.com.*/,
			content:{
				headPic_selector: ".pf_head_pic img",
				username_selector: ".username strong, .pf_name .name",
				detail_selector:".WB_detail div:first",
				css:{},
				reg:"\"html\":(.*?)\\}\\)<\/script>",
				time:".WB_time",
				nbsp: ".icon_praised_b",
				hiddenItems:".loading_gif",
				a:".WB_time, .WB_handle a",
				homeUrl:".icother a:last,.pf_lin",
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
				time:".WB_time",
				nbsp: ".icon_praised_b",
				hiddenItems:".loading_gif",
				a:".WB_time, .WB_handle a",
				homeUrl:".logo_img",
				processContent:"function process(content, html){var a=content;}"
			}
		},
		{
			site: /http:\/\/t\.sohu\.com.*/,
			content:{
				headPic_selector: ".mainC .usr .avt a",
				username_selector: ".mainC .usr .pd .nm a",
				detail_selector:".twiC:first",
				css:{},
				processContent:"function process(content, html){var a=content;}"
			}
		}
	]
}
var wb_style = [
	{
		site:/http:\/\/weibo\.com.*/,
		style:[
			{
				selector: ".icon_praised_b",
				style: "padding-left:13px;width: 0px;height: 14px; display: inline-block; overflow:hidden; background-position: -75px 0;vertical-align: text-bottom;background-image: url('http://img.t.sinajs.cn/t5/style/images/common/icon.png?id=1392885674388')"
			},
			{
				selector: " .WB_info .WB_name",
				style: "text-decoration: none; color: rgb(51, 51, 51); font-size: 14px; font-weight: bold; line-height: 16px;"
			},
			{
				selector: " .approve_co",
				style: "display: inline-block; width: 16px; height: 14px; background-image: url(http://img.t.sinajs.cn/t5/style/images/global_nav/bg_line.png?id=1387879752263); margin-left: 2px; vertical-align: text-bottom; background-position: -75px -6px; background-repeat: no-repeat no-repeat;"
			},
			{
				selector: " .WB_text",
				style: "line-height: 23px; padding: 4px 0px; color: rgb(51, 51, 51); font-size: 14px; font-family: Arial, Helvetica, sans-serif;"
			},
			{
				selector: " .WB_text .a_topic",
				style: "text-decoration: none; color: rgb(10, 140, 210);"
			},
			{
				selector: " .WB_text a:eq(1)",
				style: "text-decoration: none; color: rgb(10, 140, 210);"
			},
			{
				selector: " .WB_media_list",
				style: "margin: 0px -20px 0px 0px; padding: 0px 0px 15px;"
			},
			{
				selector: " .WB_media_list li",
				style: "margin: 0px 9px 0px 0px; padding: 0px; list-style: none; display: inline; vertical-align: top;"
			},
			{
				selector: " .WB_media_list .chePicMin",
				style: "cursor: url(http://img.t.sinajs.cn/t5/style/images/common/big.cur), auto !important; background-color: rgb(230, 230, 230); display: inline-block; vertical-align: top; min-width: 36px; max-width: 120px; max-height: 120px; text-align: center;"
			},
			{
				selector: ".bigcursor, .bigcursor img",
				style: "cursor: pointer; max-width: 120px; max-height: 120px; vertical-align: top; display: inline-block;"
			},
			{
				selector: " .WB_func",
				style: "font: 12px/1.125 Arial,Helvetica,sans-serif;"
			},
			{
				selector: " .WB_func .WB_handle",
				style: "float: right;"
			},
			{
				selector: " .WB_func a",
				style: "color: rgb(10, 140, 210);"
			},
			{
				selector: " .WB_func .S_txt3",
				style: "color: rgb(174, 174, 174); margin: 0px 6px 0px 8px;"
			},
			{
				selector: " .WB_func .WB_from .WB_time",
				style: "text-decoration: none; color: rgb(108, 186, 228); margin: 0px 7px 0px 0px;"
			},
			{
				selector: " .WB_func .WB_from .S_txt2",
				style: "color: rgb(128, 128, 128);"
			},
			{
				selector: " .WB_func .WB_from .S_link2",
				style: "text-decoration: none; color: rgb(108, 186, 228);"
			},
			{
				selector: "address, caption, cite, code, dfn, em, i, th, var, b ",
				style:"font-style: normal;font-weight: normal;"
			}
		]
	}
]
allStyle = [
	{
		selector: ".wbpick-head-pic",
		style:"float: left;width: 50px; height: 50px; position: relative;"
	},
	{
		selector: ".wbpick-head-pic img",
		style:"width: 50px; height:50px;"
	},
	{
		selector: ".wbpick-username",
		style:"text-decoration: none; color: rgb(10, 140, 210); font: 14px/1.125 Arial,Helvetica,sans-serif; font-weight: bold; line-height: 16px;"
	},
	{
		selector: ".wbpick-detail",
		style:"margin-left: 65px; color: rgb(51, 51, 51); font-family: Arial, Helvetica, sans-serif; line-height: 13.5px; font-style:normal;"
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
function WB(configs, wb_style, bk_url, wb_url, pageHtml) {

	this.bk_config = null;
	this.wb_config = null;
	this.wb_style = null;
	this.bk_url = bk_url;
	this.wb_url = wb_url;
	var bk_configs = configs.bk_configs;
	for(var i = 0; i < bk_configs.length; i++){
		if(bk_configs[i].site.test(bk_url)){
			this.bk_config = bk_configs[i];
			break;
		}
	}
	var wb_configs = configs.wb_configs;
	for(var i = 0; i < wb_configs.length; i++){
		if(wb_configs[i].site.test(wb_url)){
			this.wb_config = wb_configs[i];
			break;
		}
	}

	for(var i = 0; i < wb_style.length; i++){
		if(wb_style[i].site.test(wb_url)){
			this.wb_style = wb_style[i].style;
			break;
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
	var bk_configc = this.bk_config.content;
	var wb_configc = this.wb_config.content;
	var wb_style = this.wb_style;
	var doc = $(bk_configc.iframeSelector)[0].contentWindow.document;
	var contentHTML =  	"<div class='wbpick_content'>"+
							"<div class='wbpick-user-info'>"+
								"<div class='wbpick-head-pic'>"+
									"<a/>"+
								"</div>"+
							"</div>"+
							"<div class='wbpick-detail'>"+
								"<div>"+
								"<a class='wbpick-username'/>"+
								"</div>"+
							"</div>"+
						"</div>";
	var wb_content = $(contentHTML);
	for(var i = 0; i < wb_style.length; i++){
		content.find(wb_style[i].selector).each(function(j, it){
			$(it).attr("style", $(it).attr("style") + ";" + wb_style[i].style);
		})
	}
	var wb_homeUrl = content.find(wb_configc.homeUrl).text();
	wb_content.find(".wbpick-head-pic a").attr("href", wb_homeUrl).append(content.find(wb_configc.headPic_selector));
	wb_content.find(".wbpick-username").attr("href", wb_homeUrl).append(content.find(wb_configc.username_selector));
	wb_content.find(".wbpick-detail").append(content.find(wb_configc.detail_selector));
	var timeEle = wb_content.find(wb_configc.time);
	timeEle.text(timeEle.attr("title"));
	wb_content.find(wb_configc.nbsp).text("x");
	wb_content.find(wb_configc.hiddenItems).hide();  
	wb_content.find(wb_configc.a).attr("href", this.wb_url);
	wb_content.find(wb_configc.ho).attr("href", this.wb_url);
	for(var i = 0; i < allStyle.length; i++){
		wb_content.find(allStyle[i].selector).each(function(j, it){
			$(it).attr("style", $(it).attr("style") + ";" + allStyle[i].style);
		})
	}

	// wb_content.find(".wbpick-detail").bind("click", )
	wb_content.appendTo($( bk_configc.appendPosition, doc));
}
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	    if (request.active == "getContent"){
	    	var wb_url = request.url;
	    	var bk_url = location.href;
	    	var pageHtml = request.html;
	    	var wb = new WB(configs, wb_style, bk_url, wb_url,  pageHtml);
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
