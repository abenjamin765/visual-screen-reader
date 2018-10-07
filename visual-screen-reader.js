// Wrap all content in #vsr-wrapper 

var pageContent = document.createElement("div"); 
pageContent.setAttribute("id", "vsr-wrapper");

while(document.body.firstChild)
    pageContent.appendChild(document.body.firstChild);

document.body.appendChild(pageContent);

// Prepend vsr-toggle
var vsrToggle = document.createRange().createContextualFragment("<input type='checkbox' name='sr-toggle' id='srToggle'><label for='srToggle' role='switch'>Screen reader</label>");
document.body.insertBefore(vsrToggle, pageContent);