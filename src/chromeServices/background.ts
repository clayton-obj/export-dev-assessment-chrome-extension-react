import "../types";

chrome.action.onClicked.addListener(function (activeTab) {
  chrome.tabs.create({ url: "./index.html", selected: true, active: true });
});
