setInterval(function () {
  var names = localStorage.getItem("website_names");
  console.log(names);

  // Save it using the Chrome extension storage API.
  chrome.storage.local.set({ 'websites': names }, function () {
    console.log("Settings saved");
  });
}, 1000);

/*
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  // gets current url and makes it lower case
  var tab = tabs[0];
  var link = tab.url;
  link.toString();
  link.toLowerCase();
  console.log(link);

  var array_length = names.length;

  for (let i = 0; i < array_length; i++) {
    var formatted_string = names[i]
      .toLowerCase()
      .replace(/[\[\]']+/g, "")
      .replace(/['"]+/g, "");

    if (link.includes(formatted_string)) {
      console.log("Yes");

      break;
    } else {
      console.log("no");
    }
  }
});

chrome.runtime.onInstalled.addListener(() => {
  console.log("back");
});
*/