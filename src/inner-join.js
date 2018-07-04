function inner_join(x, y, xField, yField) {
    var newArray = [];
    x.forEach(function (xItem) {
        y.forEach(function (yItem) {
            if (xItem[xField] == yItem[yField]) {
                var newX = new Object();
                for(var attrname in xItem){
                    newX[attrname] = xItem[attrname];
                }
                for (var attrname in yItem) {
                    newX[attrname] = yItem[attrname];
                }
                newArray.push(newX);
            }
        })
    })
    return newArray;
};