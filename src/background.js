chrome.browserAction.onClicked.addListener(function (tab) {
  if (tab && tab.url) {
    if (tab.url.match( /https:\/\/github.com.*?\/wiki.*?/ )){
      chrome.tabs.executeScript(tab.id, {
        "file": "content.js"
      }, function (){
      })
    }
  }
})
