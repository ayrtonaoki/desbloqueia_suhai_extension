chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},function(tab){
    chrome.tabs.executeScript(tab[0].id, {
        "file": "js/funcao.js"
    });
})