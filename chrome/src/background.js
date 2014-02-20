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
        	message.content = obj;
    		sendToContent(message);
        },
        error: function() {
			var a = arguments[0];
        }
    });
}
function sendToContent(content){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, content, function(response) {
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