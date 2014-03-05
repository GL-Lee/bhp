var wbs = [];
var message = {};
function getPageContent (url, callback) {
    // for(var i = 0; i < wbs.length; i++){
    //   if(url == wbs[i].url){
    //     message.active = "getContent";
    //     message.url = wbs[i].url,
    //     message.type = "wb";
    //     message.content = wbs[i].eleClone;
    //     sendToContent(message);
    //     return;
    //   }
    // }
    $.ajax({
        url: url,
        data: {},
        cache: false,
        dataType: "html",
        async: true,
        success: function(obj) {
        	message.active = "getContent";
          message.url = url;
          message.type = "html";
        	message.content = obj;
    		sendToContent(message);
        },
        error: function() {
			var a = arguments[0];
        }
    });
}
function sendToContent(message){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
	    // console.log(response.farewell);
	  });
	});
}
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.active == "getContent"){
      getPageContent(request.url, sendResponse);
    }
    if (request.active == "wbContent"){
      wbs.push(request.data);
    }
    return true;
      // sendResponse({farewell: "goodbye"});
});
chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    if(info.method == "POST"){
        var blog_body = info.requestBody.formData.blog_body[0].replace(/wb_pick_a_tag/g,"a");
        info.requestBody.formData.blog_body[0] = blog_body;
    }
    console.log("Cat intercepted: " + info.url);
    // Redirect the lolcal request to a random loldog URL.
  },
  // filters
  {
    urls: [
      "http://control.blog.sina.com.cn/*"
    ]
  },
  // extraInfoSpec
  ["requestBody"]);