function convertHTML(str) {
    converted = {
    "&" : "&amp;",
    "<" : "&lt;",
    ">" : "&gt;",
    "\\\'": "&quot;",  
    "\\":  "&apos";
};

return str.split('').map(function(char){
    return converted[char] || char; }).join('');
}