chrome.browserAction.onClicked.addListener(function (tab) {
  if (tab.url.indexOf("https://github.com/") != -1){
    chrome.tabs.executeScript(tab.id, {
      "file": "content.js"
    }, function (){
    })
  }
})
