var nestButton = {
	configs: [
		{
			site: /.*blog\.sina\.com\.cn.*/,
			position: "#base_tools",
			nestFun: "appendTo",
		}
	],
	weibocss:[
		{
			site: /.*weibo\.com.*/,
			css:[
				{
					selector: ".WB_face",
					style: "float: left; width: 50px; position: relative; color: rgb(51, 51, 51); font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 13.5px; background-color: rgb(190, 225, 245);"
				},
				{
					selector: " .W_face_radius",
					style: "text-decoration: none; color: rgb(10, 140, 210); border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; height: 50px; display: block; overflow: hidden;"
				},
				{
					selector: " .W_btn_b",
					style: "color: rgb(10, 140, 210); display: inline-block; border: 1px solid rgb(217, 217, 217); border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; overflow: hidden; vertical-align: middle; cursor: pointer; background-color: rgb(242, 242, 242); margin: 5px 0px 0px 2px;"
				},
				{
					selector: " .W_btn_b>span",
					style: "padding: 0px 5px 0px 4px; white-space: nowrap; display: inline-block; border: 1px solid rgb(255, 255, 255); border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; height: 18px; line-height: 18px; color: rgb(51, 51, 51);"
				},
				{
					selector: " .W_btn_b .addicon",
					style: "font-weight: bold; font-size: 16px; line-height: normal; font-family: Arial; height: 16px; color: rgb(255, 160, 10); margin-right: 2px; vertical-align: -2px;"
				},
				{
					selector: " .WB_detail",
					style: "margin-left: 65px; color: rgb(51, 51, 51); font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 13.5px; background-color: rgb(190, 225, 245);"
				},
				{
					selector: " .WB_detail .WB_info .WB_name",
					style: "text-decoration: none; color: rgb(51, 51, 51); font-size: 14px; font-weight: bold; line-height: 16px;"
				},
				{
					selector: " .WB_detail .approve_co",
					style: "display: inline-block; width: 16px; height: 14px; background-image: url(http://img.t.sinajs.cn/t5/style/images/global_nav/bg_line.png?id=1387879752263); margin-left: 2px; vertical-align: text-bottom; background-position: -75px -6px; background-repeat: no-repeat no-repeat;"
				},
				{
					selector: " .WB_detail .WB_text",
					style: "line-height: 23px; padding: 4px 0px; color: rgb(51, 51, 51); font-family: Arial, Helvetica, sans-serif; background-color: rgb(190, 225, 245);"
				},
				{
					selector: " .WB_detail .WB_text .a_topic",
					style: "text-decoration: none; color: rgb(10, 140, 210);"
				},
				{
					selector: " .WB_detail .WB_text a:eq(1)",
					style: "text-decoration: none; color: rgb(10, 140, 210);"
				},
				{
					selector: " .WB_detail .WB_media_list",
					style: "margin: 0px -20px 0px 0px; padding: 0px 0px 15px;"
				},
				{
					selector: " .WB_detail .WB_media_list li",
					style: "margin: 0px 9px 0px 0px; padding: 0px; list-style: none; display: inline; vertical-align: top;"
				},
				{
					selector: " .WB_detail .WB_media_list .chePicMin",
					style: "cursor: url(http://img.t.sinajs.cn/t5/style/images/common/big.cur), auto !important; background-color: rgb(230, 230, 230); display: inline-block; vertical-align: top; min-width: 36px; max-width: 120px; max-height: 120px; text-align: center;"
				},
				{
					selector: ".bigcursor, .bigcursor img",
					style: "cursor: pointer; max-width: 120px; max-height: 120px; vertical-align: top; display: inline-block;"
				},
				{
					selector: " .WB_detail .WB_func .WB_handle",
					style: "float: right;"
				},
				{
					selector: " .WB_detail .WB_func a",
					style: "color: rgb(10, 140, 210);"
				},
				{
					selector: " .WB_detail .WB_func .icon_praised_b",
					style: "display: inline-block; width: 13px; height: 14px; background-image: url(http://img.t.sinajs.cn/t5/style/images/common/icon.png?id=1392885674388); vertical-align: text-bottom; position: relative; background-position: -75px 0px; background-repeat: no-repeat no-repeat;"
				},
				{
					selector: " .WB_detail .WB_func .S_txt3",
					style: "color: rgb(174, 174, 174); margin: 0px 6px 0px 8px;"
				},
				{
					selector: " .WB_detail .WB_func .WB_from .WB_time",
					style: "text-decoration: none; color: rgb(108, 186, 228); margin: 0px 7px 0px 0px;"
				},
				{
					selector: " .WB_detail .WB_func .WB_from .S_txt2",
					style: "color: rgb(128, 128, 128);"
				},
				{
					selector: " .WB_detail .WB_func .WB_from .S_link2",
					style: "text-decoration: none; color: rgb(108, 186, 228);"
				}
			],
			getAddingContent: function(pageContent){
				var headPic = pageContent.find(".pageContent img").attr("src");
				var name = pageContent.find(".username strong, .pf_info .name").text();
				var rz = pageContent.find(".identity_img").length > 0;
				var wb_face = $('<div class="WB_face" style="float: left; width: 50px; position: relative; color: rgb(51, 51, 51); font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 13.5px; background-color: rgb(190, 225, 245);"><a class="W_face_radius" action-type="feed_list_ad" href="http://weibo.com/tjyuku?from=feed&amp;loc=avatar" title="鱼酷活鱼现烤" style="text-decoration: none; color: rgb(10, 140, 210); border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; height: 50px; display: block; overflow: hidden;"><img data-mark="mark=3_29BBE01FE8AF4450BDE87275C327B82749148DDD386F64659667C41143E17B527CF97D6816C7BB997703DED5909056ADC2B5C6BD6788B0742A2AFFBD66F7ADE3AF5599A1B3A81809CDF4F1C6399CE6F03F784745B9118C624033B894F775B709C2A022E13D20B04E11BE086215A4E0825835C62713C0F58587024B80710EBFD5" extra-data="type=face" usercard="id=1989154831" title="鱼酷活鱼现烤" alt="" width="50" height="50" src="http://tp4.sinaimg.cn/1989154831/50/22831171908/0"></a><a class="W_btn_b" node-type="feedfollow" data-mark="mark=3_29BBE01FE8AF4450BDE87275C327B82749148DDD386F64659667C41143E17B527CF97D6816C7BB997703DED5909056ADC2B5C6BD6788B0742A2AFFBD66F7ADE3AF5599A1B3A81809CDF4F1C6399CE6F03F784745B9118C624033B894F775B709C2A022E13D20B04E11BE086215A4E0825835C62713C0F58587024B80710EBFD5" action-data="uid=1989154831&amp;fnick=鱼酷活鱼现烤&amp;f=1" diss-data="refer_sort=feedad" action-type="feedfollow" feedfollow_uid="1989154831" style="color: rgb(10, 140, 210); display: inline-block; border: 1px solid rgb(217, 217, 217); border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; overflow: hidden; vertical-align: middle; cursor: pointer; background-color: rgb(242, 242, 242); margin: 5px 0px 0px 2px;"><span style="padding: 0px 5px 0px 4px; white-space: nowrap; display: inline-block; border: 1px solid rgb(255, 255, 255); border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px; height: 18px; line-height: 18px; color: rgb(51, 51, 51);"><span class="addicon" style="font-weight: bold; font-size: 16px; line-height: normal; font-family: Arial; height: 16px; color: rgb(255, 160, 10); margin-right: 2px; vertical-align: -2px;">+</span>关注</span></a></div>')
				// wb_face.find(".W_face_radius img").attr("src", )
				return wb_face;
			}
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
			chrome.runtime.sendMessage({active: "getContent",url: "http://weibo.com/2167446614/AxIOuxjjh?ref=home"}, function(response) {
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
	    	var doc = $("#SinaEditor_Iframe iframe")[0].contentWindow.document;
	    	// var text = $(request.content);
	    	var css = nestButton.weibocss[0].css;
	    	nestButton.weibocss[0].getAddingContent($(request.content)).appendTo($( "body", doc));
	    	var text = eval("\""+request.content.match(/.*(<div class=\\"PRF_modwrap PRF_onefeed clearfix.*div>).*/)[1]+"\"");
	    	// text = $(text[text.length - 6]).text();
	    	// text = text.match(/.*(<div.*div>).*/)[1];
	    	var content = $(text);
	    	content.appendTo($( "body", doc));
	    	for(var i = 0; i < css.length; i++){
	    		$(css[i].selector, doc).attr("style", css[i].style);
	    	}
	    }
	      // sendResponse({farewell: "goodbye"});
	});
}