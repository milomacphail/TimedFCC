function whatIsInAName(collection, source) {
    var arr = [];
    
    arr = collection.filter(function (obj) {
        for (var i in source) {
            if (source[i] != obj[i]) {
                return false;
            }
        } return true;
    });
    return arr;
}
