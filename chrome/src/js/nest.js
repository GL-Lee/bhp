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
			},
			addListener: function(){
				var i = 0;
				var eles = null;
				var interval =setInterval(function(){
					eles = $(".fWrap .btn:first");
					if(i > 10 || eles.length > 0){
						for(var i = 0; i < eles.length; i++){
							eles[i].addEventListener("click",function(){
								var t = $(".wbpick_content", $("#SinaEditor_Iframe iframe")[0].contentWindow.document);
								t.find("a").each(function(i, it){
									var $it = $(it);
									var span = $("<span/>").insertBefore($it);
									span.append($it).attr("style", $it.attr("style"));
								})
								// var te = t.innerHTML;
								// te = te.replace(/<a /g, "<wb_pick_a_tag ");
								// te = te.replace(/\/a>/g,"/wb_pick_a_tag>");
								// t.innerHTML = te;
								// var textArea = $("#SinaEditorTextarea");
								// var blog_body = textArea.val();
								// blog_body = blog_body.replace(/<a /g, "<wb_pick_a_tag ");
								// blog_body = blog_body.replace(/\/a>/g,"/wb_pick_a_tag>");
								// textArea.val(blog_body);
							},true);
						}
						clearInterval(interval);
					}
				}, 1000)
				
			}
		},
		{
			site: /.*blog\.163\.com*/,
			button:{
				position: ".zibx",
				nestFun: "appendTo",
				buttonStyle: {
				}
			},
			content:{
				iframeSelector: ".zebx iframe",
				appendPosition: "body"
			}
		},
		{
			site: /.*blog\.sohu\.com*/,
			button:{
				position: "#menuContainer",
				nestFun: "appendTo",
				buttonStyle: {
				}
			},
			content:{
				iframeSelector: ".editor_bg iframe",
				appendPosition: "body"
			}
		},
		{
			site: /.*blog\.ifeng\.com*/,
			button:{
				position: "#edui69",
				nestFun: "appendTo",
				buttonStyle: {
				}
			},
			content:{
				iframeSelector: "#edui1_iframeholder iframe",
				appendPosition: "body"
			}
		}
	],
	wb_configs:[
		{
			site: /http:\/\/weibo\.com.*/,
			content:{
				headPic_selector: ".pf_head_pic img",
				username_selector: "#place, .pf_name",
				detail_selector:".WB_detail div:first",
				css:{},
				reg:"\"html\":(.*?)\\}\\)<\/script>",
				time:".WB_time",
				nbsp: ".icon_praised_b,.approve_co,.approve",
				hiddenItems:".loading_gif,.icother a:last,.pf_lin,.W_level_ico,.pf_icon .CH,.feed_tag_list_form,.layer_menu_list",
				a:".WB_time, .WB_handle a",
				homeUrl:".icother a:last,.pf_lin",
				onclickA:".WB_from a[onclick]",
				host:"http://weibo.com/",
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
				timeT:".info",
				nbsp: ".icon_praised_b",
				hiddenItems:".loading_gif, .W_no_border .turn_left, .W_no_border .turn_right, .W_no_border .W_vline",
				a:".WB_time, .info span a",
				homeUrl:".logo_img",
				onclickA:".info a[onclick]",
				processContent:"function process(content, html){var a=content;}"
			}
		},
		{
			site: /http:\/\/t\.sohu\.com.*/,
			content:{
				headPic_selector: ".mainC .usr .avt a",
				username_selector: ".mainC .usr .pd .nm a",
				detail_selector:".twi:first",
				css:{},
				hiddenItems:".crJs_fav,.crJs_plus2,",
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
				selector: "address, caption, cite, code, dfn, em, i, th, var, b ",
				style:"font-style: normal;font-weight: normal;"
			},
			{
				selector:".approve",
				style:"background-position: -50px -6px;width: 16px;height: 14px;display:block; margin-left: 2px;vertical-align: text-bottom;background-image: url('http://img.t.sinajs.cn/t5/style/images/global_nav/bg_line.png?id=1387879752263');"
			},
			{
				selector:".ico_member1",
				style:"background-position: -300px -325px;vertical-align: text-bottom;margin-left: 2px;width: 16px;height: 14px;display:block;background-image:url('http://img.t.sinajs.cn/t5/style/images/common/icon.png?id=1392885674388');"
			},
			{
				selector:".ico_member2",
				style:"background-position: -300px -350px;vertical-align: text-bottom;margin-left: 2px;width: 16px;height: 14px;display:block;background-image:url('http://img.t.sinajs.cn/t5/style/images/common/icon.png?id=1392885674388');"
			},
			{
				selector:".ico_member3",
				style:"background-position: -300px -375px;vertical-align: text-bottom;margin-left: 2px;width: 16px;height: 14px;display:block;background-image:url('http://img.t.sinajs.cn/t5/style/images/common/icon.png?id=1392885674388');"
			},
			{
				selector:".ico_member4",
				style:"background-position: -300px -400px;vertical-align: text-bottom;margin-left: 2px;width: 16px;height: 14px;display:block;background-image:url('http://img.t.sinajs.cn/t5/style/images/common/icon.png?id=1392885674388');"
			},
			{
				selector:".ico_member5",
				style:"background-position: -300px -425px;vertical-align: text-bottom;margin-left: 2px;width: 16px;height: 14px;display:block;background-image:url('http://img.t.sinajs.cn/t5/style/images/common/icon.png?id=1392885674388');"
			},
			{
				selector:".ico_member6",
				style:"background-position: -300px -450px;vertical-align: text-bottom;margin-left: 2px;width: 16px;height: 14px;display:block;background-image:url('http://img.t.sinajs.cn/t5/style/images/common/icon.png?id=1392885674388');"
			},
			{
				selector:".pf_icon",
				style:"float: left;display: inline;line-height: 14px;padding-top: 2px;"
			},
			{
				selector:".pf_name ",
				style:"overflow:hidden;"
			},
			{
				selector:".pf_name .name",
				style:"margin-right: 3px;float: left;line-height:16px;color: rgb(10, 140, 210);font-weight: bold;height:16px;"
			},
			{
				selector:".pf_icon .icon_bed",
				style:"float: left;display: inline;"
			},
			{
				selector:"#place",
				style:"color: rgb(10, 140, 210);font: 14px/1.125 Arial,Helvetica,sans-serif;font-weight: bold;line-height: 16px;margin: 0px;"
			},
			{
				selector:".lotspic_list",
				style:"float: left;width: 255px;margin-left: -5px;font-size: 0;"
			},
			{
				selector:".lotspic_list li, .lotspic_video li",
				style:"float: left;display: inline;width: 80px;height: 80px;margin: 5px 0 0 5px;overflow: hidden;position: relative;vertical-align: top;list-style: none;"
			}
		]
	},
	{
		site:/http:\/\/e\.weibo\.com.*/,
		style:[
			{
				selector:"p[node-type=feed_list_content]",
				style:"margin: 0px; padding: 0px 0px 10px; zoom: 1; color: rgb(68, 68, 68); font-family: Arial, Helvetica, sans-serif; line-height: 22px; background-color: rgb(255, 255, 255);"
			},
			{
				selector:".piclist ",
				style:"margin: 0px; padding: 0px 0px 10px; color: rgb(68, 68, 68); font-family: Arial, Helvetica, sans-serif; line-height: 22px; background-color: rgb(255, 255, 255);"
			},
			{
				selector:".info",
				style:"margin: 0px; padding: 3px 0px 0px; color: rgb(153, 153, 153); cursor: default; font-size: 12px; zoom: 1; font-family: Arial, Helvetica, sans-serif; line-height: 22px; background-color: rgb(255, 255, 255);"
			},
			{
				selector:".info span",
				style:"float: right;"
			},
			{
				selector:".info span a",
				style:"color: rgb(145, 184, 39); word-wrap: break-word;"
			},
			{
				selector:" .W_vline",
				style:"display: inline-block; color: rgb(230, 230, 230); margin: 0px 5px;"
			},
			{
				selector:".comment",
				style:"margin: 0px 0px 7px; padding: 15px 20px 13px; color: rgb(119, 119, 119); background-color: rgb(243, 243, 243); border: 1px solid rgb(230, 230, 230); zoom: 1; line-height: 20px; font-size: 12px; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;"
			},
			{
				selector:".W_bgcolor_arrow",
				style:"margin: -25px 0px 0px; padding: 0px; width: 25px; height: 11px; overflow: hidden;"
			},
			{
				selector:".W_arrline",
				style:"color: rgb(230, 230, 230); font-family: SimSun; overflow: hidden; font-size: 21px; display: block; height: 10px;"
			},
			{
				selector:".W_bgcolor_arrow span:last",
				style:"color: rgb(243, 243, 243); font-family: SimSun; overflow: hidden; font-size: 21px; display: block; height: 10px; margin: -9px 0px 0px;"
			},
			{
				selector:".expand",
				style:"margin: 0px; padding: 0px 0px 15px;"
			},
			{
				selector:".expand .W_no_border",
				style:"margin: 0px; padding: 0px 0px 10px; border-width: 0px; border-right-color: rgb(230, 230, 230); border-bottom-color: rgb(230, 230, 230); border-left-color: rgb(230, 230, 230); background-image: none; zoom: 1;"
			},
			{
				selector:".expand .show_big",
				style:"text-decoration: none; color: rgb(27, 143, 44); background-image: url(http://img.t.sinajs.cn/t4/appstyle/e/images/common/ico.png?id=1352776751224); padding: 0px 0px 0px 12px; word-wrap: break-word; margin: 0px 10px; background-position: 0px -910px; background-repeat: no-repeat no-repeat;"
			},
			{
				selector:".expand .turn_left",
				style:"color: rgb(27, 143, 44); background-image: url(http://img.t.sinajs.cn/t4/appstyle/e/images/common/ico.png?id=1352776751224); padding: 0px 0px 0px 12px; word-wrap: break-word; margin: 0px 10px; background-position: 0px -937px; background-repeat: no-repeat no-repeat;"
			},
			{
				selector:".expand .turn_right",
				style:"color: rgb(27, 143, 44); background-image: url(http://img.t.sinajs.cn/t4/appstyle/e/images/common/ico.png?id=1352776751224); padding: 0px 0px 0px 12px; word-wrap: break-word; margin: 0px 10px; background-position: 0px -966px; background-repeat: no-repeat no-repeat;"
			},
			{
				selector:".expand .turn_right",
				style:"color: rgb(27, 143, 44); background-image: url(http://img.t.sinajs.cn/t4/appstyle/e/images/common/ico.png?id=1352776751224); padding: 0px 0px 0px 12px; word-wrap: break-word; margin: 0px 10px; background-position: 0px -966px; background-repeat: no-repeat no-repeat;"
			},
			{
				selector: "address, caption, cite, code, dfn, em, i, th, var, b ",
				style:"font-style: normal;font-weight: normal;"
			}
		]
	},
	{
		site:/http:\/\/t\.sohu\.com.*/,
		style:[
			{
				selector:".avt .img, .avt img ",
				style:"width: 48px;height: 48px;display:block;margin: 0;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius: 3px;"
			},
			{
				selector:".twiB",
				style:"margin-left: -175px;_zoom: 1;clear: left;margin-top: 11px;text-align: right;font-size: 12px;"
			},
			{
				selector:".from",
				style:"vertical-align: middle;"
			},
			{
				selector: ".twiB .tm, .twiB .from",
				style:"vertical-align: middle;"
			},
			{
				selector:".from",
				style:"white-space: nowrap;"
			},
			{
				selector:"b",
				style:"font-size: 1em;font-weight: normal;"
			},
			{
				selector:".from .t1",
				style:"margin: 0 0 0 3px;"
			},
			{
				selector:".twiB a",
				style:"color: #999;"
			},
			{
				selector:".twiB .tags",
				style:"display: inline-block;padding-left: 9px;margin-left: 8px;background: url(//s4.cr.itc.cn/img/s/lin/vr_sd_c2.gif) no-repeat 0;"
			},
			{
				selector:".tag, .tabsM li",
				style:"display: inline-block;padding: 0 0 0 6px;margin: 0 0 0 5px;text-indent: 0;_text-indent: -11px!important;white-space: nowrap;vertical-align: middle;list-style:none;display: inline-block;"
			},
			{
				selector:".tm, .tm a, .q, .from, .from a, .ttl q, .memo, .t1 a",
				style:"font-weight: normal;"
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
		style:"margin-left: 65px; color: rgb(51, 51, 51); font: 12px/1.125 Arial,Helvetica,sans-serif;font-style:normal;"
	},
	{
		selector:"i, cite, em, var, dfn, address",
		style:"font-style: normal;"
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
			var top = event.clientY + document.body.scrollTop+20;
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
		// var panelHTML = "<div id='bhp-bbb'>"+
		// 					"<input/>"+
		// 					"<a href='javascript:void(0)'>insert</a>"+
		// 					"<span style='display:none'>载入中...</span>"
		// 				"</div>";

		// var divcss = {
		// 	position: "absolute",
		// 	"background-color": "white",
		// 	border: "solid 1px",
		// 	padding: "5px"
		// }
		// var inputcss = {
		// 	height: "25px",
		// 	width: "200px",
		// 	"margin-right": "10px"
		// }
		var panelHTML = '<div class="wb_pick-panel">'+
							'<a class="close"></a>'+
							'<div class="outer-div">'+
								'<div class="middle-div">'+
									'<p>右键点击微博发布时间，复制地址粘贴</p>'+
									'<div class="inner-div">'+
										'<input/>'+
										'<button>确定</button>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'
		var panel = this.panel = $(panelHTML).appendTo($("body"));
		// panel.css(divcss);
		// panel.find("input").css(inputcss);
	},
	bindEvents: function(){
		var panel = this.panel;
		panel.find("button").bind("click", function(){
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
	var contentDetail = content.find(wb_configc.detail_selector);
	var len = sina_home_frame? sina_home_frame.length: 0;
	for(var i = 0; i < len; i++){
		contentDetail.find(sina_home_frame[i].selector).each(function(j, it){
			$(it).attr("style", $(it).attr("style") + ";" + sina_home_frame[i].style);
		})
	}
	len = sina_home_A? sina_home_A.length: 0;
	for(var i = 0; i < len; i++){
		contentDetail.find(sina_home_A[i].selector).each(function(j, it){
			$(it).attr("style", $(it).attr("style") + ";" + sina_home_A[i].style);
		})
	}
	len = wb_style? wb_style.length: 0;
	for(var i = 0; i < len; i++){
		content.find(wb_style[i].selector).each(function(j, it){
			$(it).attr("style", $(it).attr("style") + ";" + wb_style[i].style);
		})
	}
	var wb_homeUrl = content.find(wb_configc.homeUrl).text();
	if(!wb_homeUrl)wb_homeUrl = content.find(wb_configc.homeUrl).attr("href");
	wb_content.find(".wbpick-head-pic a").attr("href", wb_homeUrl).append(content.find(wb_configc.headPic_selector));
	wb_content.find(".wbpick-username").attr("href", wb_homeUrl).append(content.find(wb_configc.username_selector));
	wb_content.find(".wbpick-detail").append(content.find(wb_configc.detail_selector));
	if(wb_configc.time){
		var timeEle = wb_content.find(wb_configc.time);
		timeEle.text(timeEle.attr("title"));
	}
	if(wb_configc.timeT){
		var timeEle = wb_content.find(wb_configc.timeT);
		var timeTextnode = timeEle.contents().filter(function(){return this.nodeType == 3});
		var time =timeTextnode.text();
		var timeN = time.match(/.*(\d\d)分钟前.*/);
		if(timeN){
			var timeS = this.convertTime(timeN[1]);
			timeTextnode.text(time.replace(/\d\d分钟前/, timeS))
		}
	}
	wb_content.find(wb_configc.nbsp).text("x").css("font-size","0px");
	wb_content.find(wb_configc.hiddenItems).remove();
	var _url = "";
	wb_content.find(wb_configc.a).each(function(i, it){
		$it = $(it);
		_url = wb_configc.host + $it.closest(".WB_func").find(".WB_time").attr("href");
		$it.attr("href", _url);
	})
	// wb_content.find(wb_configc.a).attr("href", this.wb_url);
	wb_content.find(wb_configc.ho).attr("href", this.wb_url);
	var onclickA = wb_content.find(wb_configc.onclickA);
	onclickA.each(function(i, it){
		var $it = $(it);
		var clickHref= $it.attr("onclick").match(/.*(http:.*?)("|').*/);
		if(clickHref){
			$it.attr("href", clickHref[1]).attr("target", "_blank").removeAttr("onclick");
		}
	})
	
	for(var i = 0; i < allStyle.length; i++){
		wb_content.find(allStyle[i].selector).each(function(j, it){
			$(it).attr("style", $(it).attr("style") + ";" + allStyle[i].style);
		})
	}

	// wb_content.find(".wbpick-detail").bind("click", )
	wb_content.appendTo($( bk_configc.appendPosition, doc));
}
WB.prototype.convertTime = function(min){
	var min = parseInt(min);
	var date = new Date().getTime();
	date = date - min * 60 * 1000;
	date = new Date(date);
	date = {
		"y"  : date.getFullYear(),
	    "M+" : date.getMonth()+1,                 //月份   
	    "d+" : date.getDate(),                    //日   
	    "h+" : date.getHours(),                   //小时   
	    "m+" : date.getMinutes(),                 //分   
	    "s+" : date.getSeconds(),                 //秒   
	    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
	    "S"  : date.getMilliseconds()             //毫秒   
	}
	date = date["y"]+"-"+date["M+"]+"-"+date["d+"]+" "+date["h+"]+":"+date["m+"];
	return(date);
}
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	    if (request.active == "getContent"){
	    	var wb_url = request.url;
	    	var bk_url = location.href;
	    	var pageHtml = request.html;
	    	var d = new Date().getTime();
	    	var wb = new WB(configs, wb_style, bk_url, wb_url,  pageHtml);
	    	wb.insert();
	    	var m = new Date().getTime();
	    	console.log((m-d)/1000);
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
	bk_config.addListener && bk_config.addListener();
}
