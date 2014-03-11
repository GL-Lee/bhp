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
					border: "1px solid #E4DEDE",
					"margin-top": "5px",
					color: "#000100",
					"border-radius": "1px",
					"background-color": "#F5F5F5",
					"margin-left": "4px",
					"text-align": "center",
					"text-decoration": "none"
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
					eles = $(".fWrap .btn, #articlePostBtn");
					if(i > 10 || eles.length > 0){
						for(var i = 0; i < eles.length; i++){
							eles[i].addEventListener("click",function(){
								var doc = $("#SinaEditor_Iframe iframe")[0].contentWindow.document;
								var t = $(".wbpick_content", doc);
								t.find("a").each(function(i, it){
									var $it = $(it);
									if(!$it.attr("addspan")){
										var span = $("<span/>").insertBefore($it);

										span.append($it).attr("style", $it.attr("style"));
										$it.attr("addspan", true);
									}
								})
								$(".hh, .close-button", doc).remove();

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
				username_selector: "#place strong, .pf_name .name",
				detail_selector:".WB_detail div:first",
				css:{},
				reg:"\"html\":(.*?)\\}\\)<\/script>",
				time:".WB_time",
				nbsp: ".icon_praised_b,.WB_info .W_ico16",
				emspan:".ico_playvideo",
				hiddenItems:".loading_gif,.icother a:last,.pf_lin, .icother a:last,.W_level_ico,.CH,.feed_tag_list_form,.layer_menu_list",
				a:".WB_time, .WB_handle a",
				homeUrl:".icother a:last,.pf_lin",
				onclickA:".WB_from a[onclick]",
				host:"http://weibo.com/",
				spec:[
					{
						src:".WB_feed_spec .WB_feed_spec_pic a",
						closest:".WB_feed_spec",
						to:".WB_feed_spec_info .W_btn_a"
					},
					{
						src:".WB_media_expand .WB_time",
						closest:".WB_media_expand ",
						to:".W_btn_c"
					}
				],
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
			// {
			// 	selector:".WB_arrow em",
			// 	style:"margin-top:-18px;position:relative;"
			// },
			// {
			// 	selector:".WB_arrow em",
			// 	style:"margin-top:-17px;position:relative;"
			// }
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
				selector:".WB_detail",
				style:"font: 12px/1.125 Arial,Helvetica,sans-serif;"
			},
			{
				selector:".WB_arrow",
				style:"margin-top:-18px !important;"
			},
			{
				selector:"span, em",
				style:"line-height:140%;"
			},
			{
				selector:".WB_feed_datail",
				style:"width:570px;padding: 10px 10px;	border: solid 1px rgb(230, 225, 225);	border-radius: 3px;position:relative;"
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
			if((left + 500) > document.body.clientWidth) left = document.body.clientWidth -500;
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
							'<div class="tip-cover">正在载入微博...</div>'+
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
			panel.addClass("wb_pick-panel-loading");
			panel.find(".tip-cover").text("正在载入微博...");
			event.preventDefault();
			event.stopPropagation();
			setTimeout(function(){
				panel.find(".tip-cover").text("加载失败，请重新加载。");
				setTimeout(function(){
					panel.removeClass("wb_pick-panel-loading");
				}, 2000)
			},10000)
		})
		panel.find(".close").bind("click", function(){
			panel.hide();
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
		panel.hide().hide().removeClass("wb_pick-panel-loading").find("input").val("");
	}
}
function WB(configs, bk_url, wb_url, content) {
	this.type = configs.type;
	this.bk_url = bk_url;
	this.wb_url = wb_url;
	this.bk_config = configs.bk_config;
	this.wb_config = configs.wb_config;
	this.wb_style = configs.wb_style;

	this.content = content.replace(/\\n/g,"").replace(/>\s*/g,">").replace(/\s*?</g,"<");
}
WB.prototype.get_wbContent = function(){
	var html = this.content;
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
	var wb_content = $("");
		var bk_configc = this.bk_config.content;
		var doc = $(bk_configc.iframeSelector)[0].contentWindow.document;
	if(this.type == "wb"){
		wb_content = $(this.content);
	}else if(this.type == "html"){
		var content = this.get_wbContent();
		var bk_configc = this.bk_config.content;
		var wb_configc = this.wb_config.content;
		var wb_style = this.wb_style;

		var wb_homeUrl = content.find(wb_configc.homeUrl).text();
		if(!wb_homeUrl)wb_homeUrl = content.find(wb_configc.homeUrl).attr("href");
		content.find(wb_configc.hiddenItems).remove();
		
		var contentHTML =  	"<div class='wbpick_content' draggable='true' >"+
							"<div class='WB_feed_datail'>"+
								'<div class="WB_face">'+
	                				'<a class="W_face_radius">'+
	                					'<img width="50" height="50"/>'+
	                				'</a>'+
								"</div>"+
								"<div class='WB_detail'>"+
									'<div class="WB_info">'+
										'<a class="WB_name S_func1">'+
										'</a>'+
					                '</div>'+
								"</div>"+
							"</div>"+
							"</div>";
		wb_content = $(contentHTML);
		wb_content.find(".W_face_radius").attr("href", wb_homeUrl);
		wb_content.find(".WB_face img").attr("src",content.find(wb_configc.headPic_selector).attr("src"));
		wb_content.find(".WB_name").attr("href", wb_homeUrl).text(content.find(wb_configc.username_selector).text());
		wb_content.find(".WB_detail").append(content.find(wb_configc.detail_selector));
		wb_content.find(".WB_info").append(content.find(".pf_icon a, .icother a"))//暂时用以新浪微薄,以后需要放到设置里面

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
		// wb_content.find(wb_configc.emspan).each(function(i, it){
		// 	var $it = $(it);
		// 	var em = $("<em>x</em>").appendTo($it).css("font-size", "0px");
		// })
		var _url = "";
		wb_content.find(wb_configc.a).each(function(i, it){
			$it = $(it);
			_url = wb_configc.host + $it.closest(".WB_func").find(".WB_time").attr("href");
			$it.attr("href", _url);
		})
		// wb_content.find(wb_configc.a).attr("href", this.wb_url);
		// wb_content.find(wb_configc.ho).attr("href", this.wb_url);
		if(wb_configc.spec){
			var spec = wb_configc.spec;
			for(var i = 0; i < spec.length; i ++){
				var closest = spec[i].closest;
				wb_content.find(spec[i].src).each(function(j, it){
					$it = $(it);
					var c = $it.closest(closest);
					var url = $it.attr("href");
					c.find(spec[i].to).attr("href", url);
				})
			}
		}	
		var onclickA = wb_content.find(wb_configc.onclickA);
		onclickA.each(function(i, it){
			var $it = $(it);
			var clickHref= $it.attr("onclick").match(/.*(http:.*?)("|').*/);
			if(clickHref){
				$it.attr("href", clickHref[1]).attr("target", "_blank").removeAttr("onclick");
			}
		})
		var len = sina_skin? sina_skin.length: 0;
		for(var i = 0; i < len; i++){
			wb_content.find(sina_skin[i].selector).each(function(j, it){
				$(it).attr("style", $(it).attr("style") + ";" + sina_skin[i].style);
			})
		}
		len = sina_home_frame? sina_home_frame.length: 0;
		for(var i = 0; i < len; i++){
			wb_content.find(sina_home_frame[i].selector).each(function(j, it){
				$(it).attr("style", $(it).attr("style") + ";" + sina_home_frame[i].style);
			})
		}
		len = sina_home_A? sina_home_A.length: 0;
		for(var i = 0; i < len; i++){
			wb_content.find(sina_home_A[i].selector).each(function(j, it){
				$(it).attr("style", $(it).attr("style") + ";" + sina_home_A[i].style);
			})
		}
		len = wb_style? wb_style.length: 0;
		for(var i = 0; i < len; i++){
			wb_content.find(wb_style[i].selector).each(function(j, it){
				$(it).attr("style", $(it).attr("style") + ";" + wb_style[i].style);
			})
		}
		
		for(var i = 0; i < allStyle.length; i++){
			wb_content.find(allStyle[i].selector).each(function(j, it){
				$(it).attr("style", $(it).attr("style") + ";" + allStyle[i].style);
			})
		}
		// wb_content.find(".wbpick-detail").bind("click", )
	}
		wb_content.appendTo($( bk_configc.appendPosition, doc));
		dragUtil.init(doc, wb_content);
		$("<div><br/></div>").insertAfter(wb_content);
		var hcss = {
			position: "absolute",
			cursor:"pointer"
		}
		var contentDetail = wb_content.children().eq(0);
		var htop = $("<div class='htop hh'/>").appendTo(contentDetail);
		var hright = $("<div class='hright hh'/>").appendTo(contentDetail);
		var hbottom = $("<div class='hbottom hh'/>").appendTo(contentDetail);
		var hleft = $("<div class='hleft hh'/>").appendTo(contentDetail);
		contentDetail.find(".hh").css(hcss);

		var range = doc.createRange();
		var selection = doc.getSelection();
		setTimeout(function(){
			var style = doc.defaultView.getComputedStyle(contentDetail[0],null);
			var width = style.width;
			var height = style.height;
			var margintop = -(parseInt(height) +10)+"px";
			htop.css("height", "10px").css("width", parseInt(width)+20).css("margin-top", margintop).css("margin-left", "-10px");
			hright.css("height", parseInt(height)+20).css("width", "10px").css("margin-top", margintop).css("margin-left", width);
			hbottom.css("height", "10px").css("width", parseInt(width)+20).css("margin-left", "-10px");;
			hleft.css("height", parseInt(height)+20).css("width", "10px").css("margin-left", "-10px").css("margin-top", margintop);
			contentDetail.find(".hh").bind("click", function(event){
				var $this = $(this);
				contentDetail.css("background-color", "rgb(160, 160, 178)").parent().addClass("selectedContent");
				contentDetail.find(".close-button").css("display", "block");
				$this.css("background-color", "");
				execUtil.init(doc);
				
				event.stopPropagation();
			}).bind("mousedown", function(){
				dragUtil.dragedwb = wb_content;
			}).bind("mouseup", function(){
				dragUtil.dragedwb = $();
			}).hover(function(){
				if($(this).parents(".selectedContent").length == 0)
				$(this).css("background-color", "gray");
			}, function(){
				$(this).css("background-color", "");
			})
		},100)
		var closebtn = $("<a title='删除' onclick='javascript:void(0)' class='close-button' style='position:absolute; right:0px;top:0px;display:none;width:18px;height:18px;border:solid 1px gray;cursor:pointer;z-index:1024;'></a>");
		closebtn.css("background-image", "url(data:image/gif;base64,R0lGODlhEgASAPIGAHd3d4iIiKqqqru7u93d3e7u7v///wAAACH5BAAAAAAALAAAAAASABIAAANKaLrc/pCNJ+Cs0uCs9uzcUn1KsWnNWQQO+6xQUDRw5Brz/ZCLafUzkeNTKMpKvsVgViSwZMUCAcAQNG8BgpSacjayXMdpEY6YDQkAOw==)")
		closebtn.appendTo(contentDetail).bind("click", function(){
			wb_content.remove();
		})
		closebtn.hover(function(event){
			$(this).css("border-color", "black")
		}, function(){
			$(this).css("border-color", "gray")
		})
		$(doc).bind("click", function(){
			$(".selectedContent",doc).removeClass("selectedContent").children().css("background-color","").find(".close-button").css("display","none");
		})

}
var execUtil = {
	doc: null,
	wb:null,
	cut: function(){
		execUtil.wb = $(".selectedContent", execUtil.doc);
		execUtil.wb.remove();
	},
	paste: function(){
		var p = $(this.doc.getSelection().anchorNode);
		if(p[0] == this.doc.body)
			p = $("<div/>").appendTo(this.doc.body);
		execUtil.wb.insertAfter(p);
		// if(execUtil.wb.last().next("div").length == 0)
		// 	$("<div><br/></div>").appendTo($(execUtil.doc.body));
		var wb = execUtil.wb;
		for(var i = 0; i < wb.length; i++){
			$(wb[i]).find(".hh").bind("click", function(event){
				var $this = $(this);
				var content = $this.parents(".WB_feed_datail");
				content.css("background-color", "rgb(160, 160, 178)").parent().addClass("selectedContent");
				content.find(".close-button").css("display", "block");
				$this.css("background-color", "");
				event.stopPropagation();
			}).hover(function(){
				if($(this).parents(".selectedContent").length == 0)
				$(this).css("background-color", "gray");
			}, function(){
				$(this).css("background-color", "");
			})
			var closebtn = $(wb[i]).find(".close-button");
			closebtn.bind("click", function(){
				$(this).parents(".wbpick_content").remove();
			})
			closebtn.hover(function(event){
				$(this).css("border-color", "black")
			}, function(){
				$(this).css("border-color", "gray")
			})
			$("<div><br/></div>").insertAfter($(wb[i]));
		}
		execUtil.wb.length = 0;
	},
	init: function(doc){
		if(!this.doc){
			this.doc = doc;
			this.bindEvents();
		}
	},
	bindEvents: function(){
		var _this = this;
		this.doc.addEventListener("keydown", function(event){
			if(event.ctrlKey && event.keyCode == 88){
				_this.cut();
			}
		},true)
		this.doc.addEventListener("keydown", function(event){
			if(event.ctrlKey && event.keyCode == 86 && _this.wb.length > 0){
				_this.paste();
				event.stopPropagation();
				event.preventDefault();
			}
		},true)
	}
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
	    	var tconfigs = {};
			for(var i = 0; i < configs.bk_configs.length; i++){
				if(configs.bk_configs[i].site.test(bk_url)){
					tconfigs.bk_config = configs.bk_configs[i];
					break;
				}
			}
			for(var i = 0; i < configs.wb_configs.length; i++){
				if(configs.wb_configs[i].site.test(wb_url)){
					tconfigs.wb_config = configs.wb_configs[i];
					break;
				}
			}

			for(var i = 0; i < wb_style.length; i++){
				if(wb_style[i].site.test(wb_url)){
					tconfigs.wb_style = wb_style[i].style;
					break;
				}
			}
	    	var d = new Date().getTime();
	    	tconfigs.type = request.type;
	    	var wb = new WB(tconfigs, bk_url, wb_url,  request.content);
	    	wb.insert();
	    		    	
	    	var m = new Date().getTime();
	    	console.log((m-d)/1000);
	    	inputPanel.hide();
	    }
	}
);
var dragUtil = {
	wb:null,
	dragedwb:null,
	doc:null,
	container:null,
	init: function(doc,wb){
		if(this.doc != doc){
			this.doc = doc;
			this.bindEvents();
		}
		this.wb = wb;
	},
	drop: function(ev){
		if(dragUtil.container.length > 0){
			dragUtil.dragedwb.insertAfter(dragUtil.container);
			if(dragUtil.dragedwb.next("div").length == 0){
				$("<div><br/></div>").insertAfter(dragUtil.dragedwb);
			}
			dragUtil.container = $();
		}
		ev.preventDefault();
	},
	dragstart: function(ev){
		dragUtil.dragedwb = $(ev.target);
	},
	dragover: function(ev){
		if(ev.target.tagName.toLowerCase() != "body"){
			dragUtil.container = $(ev.target);
			if(dragUtil.container.parents(".wbpick_content").length > 0)
				dragUtil.container = dragUtil.container.parents(".wbpick_content");
		}
		else{
			dragUtil.container = $();
		}
		if(dragUtil.dragedwb.length > 0 && dragUtil.dragedwb[0].isEqualNode(dragUtil.container[0])){
			dragUtil.container = $();
		}
		ev.preventDefault();
	},
	bindEvents: function(){
		$(this.doc.body).bind("dragover", this.dragover).bind("drop", this.drop);
		// this.wb.bind("dragstart", function(){console.log(1)})
	}
}
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
function printStyles(elem,exp,exa,eleClone) {
		$(eleClone).removeClass();
        var allStyle;
           allStyle = document.defaultView.getComputedStyle(elem,null);
        var s = "";
        var t = "";
        for(var i in allStyle){
        	if(isNaN(i) && allStyle[i] && allStyle[i]!= "auto" && typeof(allStyle[i]) == "string" && (i.indexOf("webkit") < 0)){
        		var flg = false;
        		for(var j = 0; j < exp.length; j++){
        			if(i.indexOf(exp[j]) == 0){
        				flg = true;
        				break;
        			}
        		}
        		if(!flg){
	        		for(var j = 0; j < exa.length; j++){
	        			if(i == exa[j] ){
	        				flg = true;
	        				break;
	        			}
	        		}
        		}
        		if(flg){
	         		t = i + ":" + allStyle[i]+";";
	        		s += t;
        		}
        	}
        		// 
        }
        $(eleClone).attr("style",s);
        var s = $(eleClone).attr("style");
        s = s.replace(/-webkit.*?;/g,"");
		// for(var j = 0; j < ex.length; j++){
		// 	s = s.replace(ex[j],"");
		// }
        $(eleClone).attr("style",s);
        for(var i =0; i < elem.children.length; i++){
        	printStyles(elem.children[i], exp,exa,eleClone.children[i]);
        }
    }
function css(a) {
    var sheets = document.styleSheets, o = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (a.is(rules[r].selectorText)) {
                o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
            }
        }
    }
    return o;
}

function css2json(css) {
    var s = {};
    if (!css) return s;
    if (css instanceof CSSStyleDeclaration) {
        for (var i in css) {
            if ((css[i]).toLowerCase) {
                s[(css[i]).toLowerCase()] = (css[css[i]]);
            }
        }
    } else if (typeof css == "string") {
        css = css.split("; ");
        for (var i in css) {
            var l = css[i].split(": ");
            s[l[0].toLowerCase()] = (l[1]);
        }
    }
    return s;
}
// window.addEventListener("contextmenu", function(event){
// 			if(event.button !== 2 || event.target.tagName.toLowerCase != "") return;
// 	    	var d = new Date().getTime();
// 	    	var p = $(event.target).parents(".WB_feed_datail");
// 	    	var ex = [
// 				/; [^ ]*?(top|left|right|bottom): (0px|auto)/g,
// 				/; [^ ]*?opacity: 1/g,
// 				/; [^ ]*?: auto/g,
// 				/background-position: 0% 0%;/g,
// 				/; [^ ]*?: 0px/g,
// 				/position:static;/g,
// 				/resize:none;/g,
// 				/textAlign:start;/g,
// 				/textAnchor:start;/g,
// 				/text-align: start;/g,
// 	    		/writingMode.*?;/g,
// 	    		/wordSpacing.*?;/g,
// 	    		/wordBreak.*?;/g,
// 	    		/vectorEffect.*?;/g,
// 	    		/unicodeBidi.*?;/g,
// 	    		/transitionTimingFunction.*?;/g,
// 	    		/transitionProperty.*?;/g,
// 	    		/transitionDuration.*?;/g,
// 	    		/transitionDelay.*?;/g,
// 	    		/touchActionDelay.*?;/g,
// 	    		/textTransform.*?;/g,
// 	    		/tabSize.*?;/g,
// 	    		/stroke.*?;/g,
// 	    		/stop.*?;/g,
// 	    		/speak.*?;/g,
// 	    		/paddingTop.*?;/g,
// 	    		/paddingRight.*?;/g,
// 	    		/paddingLeft.*?;/g,
// 	    		/paddingBottom.*?;/g,
// 	    		/overflowWrap.*?;/g,
// 	    		/objectPosition.*?;/g,
// 	    		/objectFit.*?;/g,
// 	    		/mask.*?;/g,
// 	    		/marker.*?;/g,
// 	    		/marginTop.*?;/g,
// 	    		/marginRight.*?;/g,
// 	    		/marginLeft.*?;/g,
// 	    		/marginBottom.*?;/g,
// 	    		/listStyle.*?;/g,
// 	    		/lineHeight.*?;/g,
// 	    		/lightingColor.*?;/g,
// 	    		/justifyContent.*?;/g,
// 	    		/glyphOrientationHorizontal.*?;/g,
// 	    		/fontWeight.*?;/g,
// 	    		/fontVariant.*?;/g,
// 	    		/fontFamily.*?;/g,
// 	    		/floodOpacity.*?;/g,
// 	    		/floodColor.*?;/g,
// 	    		/flex.*?;/g,
// 	    		/colorInterpolationFilters.*?;/g,
// 	    		/colorInterpolation.*?;/g,
// 	    		/clipRule.*?;/g,
// 	    		/clipPath.*?;/g,
// 	    		/captionSide.*?;/g,
// 	    		/boxSizing.*?;/g,
// 	    		/boxShadow.*?;/g,
// 	    		/borderWidth.*?;/g,
// 	    		/borderT.*?;/g,
// 	    		/borderSpacing.*?;/g,
// 	    		/borderR.*?;/g,
// 	    		/borderL.*?;/g,
// 	    		/borderI.*?;/g,
// 	    		/borderC.*?;/g,
// 	    		/borderB.*?;/g,
// 	    		/backgroundP.*?;/g,
// 	    		/baselineShift.*?;/g,
// 	    		/backgroundRepeat.*?;/g,
// 	    		/backgroundOrigin.*?;/g,
// 	    		/backgroundImage.*?;/g,
// 	    		/backgroundC.*?;/g,
// 	    		/backgroundAttachment.*?;/g,
// 	    		/alignSelf.*?;/g,
// 	    		/alignItems.*?;/g,
// 	    		/alignContent.*?;/g,
// 	    		/touch-action-delay.*?;/g,
// 	    		/background-clip.*?;/g,
// 	    		/verticalAlign.*?;/g,
// 	    		/border-image-slice.*?;/g,
// 	    		/border-image-repeat: stretch;/g,
// 	    		/color-interpolation[^;]*;/g
// 	    	]

// 	    	var exp = [
// 	    	"background-",
// 			"border-",
// 			"box-",
// 			"font-",
// 			"line-",
// 			"list-",
// 			"max-",
// 			"outline-",
// 			"overflow",
// 			"overflow-",
// 			"padding-",
// 			"text-",
// 			"vertical-",
// 			"word-",
// 			"align-"
// 			];
// 			var exa = [
// 			"clear",
// 			"border",
// 			"color",
// 			"display",
// 			"float",
// 			"font",
// 			"height",
// 			"margin",
// 			"opacity",
// 			"outline",
// 			"position",
// 			"background",
// 			"white-space",
// 			"visibility",
// 			"width"
// 			]
// 	    	if(p.length > 0){
// // var style = css(p);
// // p.css(style);
// 				var eleClone = p[0].cloneNode(true);
// 	    		printStyles(p[0],exp, exa, eleClone);
// 	    		// $(p[0]).parent().append(eleClone);
// 	    	chrome.runtime.sendMessage({active: "wbContent",data:{url:event.target.baseURI ,eleClone: eleClone.outerHTML}}, function(response) {
// 			 	console.log(response.farewell);
// 			});
// 	    	}

// 	    	var m = new Date().getTime();
// 	    	console.log((m-d)/1000);
// }, true)