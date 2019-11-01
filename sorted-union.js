function uniteUnique(arr) {
    var args = [].slice.call(arguments); 
    var test = {
        arr: [],
        push: function (item) {
            if (test.arr.indexOf(item) === -1) {
                test.arr.push(item);
            }
        }
    };
    for (var i = 0; i < args.length; i++) {
        for (var j = 0; j < args[i].length; j++) {
            test.push(args[i][j]);}
        }
        return test.arr;
}
