function getPageContent (url, callback) {
    $.ajax({
        url: url,
        data: {},
        cache: false,
        dataType: "html",
        async: true,
        success: function(obj) {
        	var message = {};
        	message.active = "getContent";
            message.url = url,
        	message.html = obj;
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
	    console.log(response.farewell);
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