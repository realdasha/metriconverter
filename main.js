//length function: convert to km
searchKM = function(word) {
    var query = word.selectionText;
    chrome.tabs.create({ url: "https://www.google.com/search?q=convert+to+km" + "+" + query });
};

chrome.contextMenus.create({
    title: "Convert to km",
    contexts: ["selection"],
    onclick: searchKM
});


//mass function: convert to kg
searchKG = function(word) {
    var query = word.selectionText;
    chrome.tabs.create({ url: "https://www.google.com/search?q=convert+to+kg" + "+" + query });
};

chrome.contextMenus.create({
    title: "Convert to kg",
    contexts: ["selection"],
    onclick: searchKG
});


//temperature function: convert to celsius
search_celsius = function(word) {
    var query = word.selectionText;
    chrome.tabs.create({ url: "https://www.google.com/search?q=convert+to+celsius" + "+" + query });
};

chrome.contextMenus.create({
    title: "Convert to celsius",
    contexts: ["selection"],
    onclick: search_celsius
});