chrome.action.onClicked.addListener((tab)=>{
    chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['scripts/scrapCandidates.js']
    })
});
chrome.runtime.onConnect.addListener((port)=>{
    if(!(port.name=="secureChannelScrap")) 
        throw new Error('Not secure channel');
    port.onMessage.addListener((message)=>{
        console.log(message);
    })
})