function full_join(x, y, xField, yField) {
    var newArray = [];
    x.forEach(function (xItem) {
        var i = 0;
        y.forEach(function (yItem) {
            if (xItem[xField] == yItem[yField]) {
                var newX = new Object();
                for (var attrname in xItem) {
                    newX[attrname] = xItem[attrname];
                }
                for (var attrname in yItem) {
                    newX[attrname] = yItem[attrname];
                }
                newArray.push(newX);
                i++;
            }
        })
        if (i == 0) {
            newArray.push(xItem);
        }
    })

    y.forEach(function (yItem) {
        var j = 0;
        x.forEach(function (xItem) {
            if (xItem[xField] == yItem[yField]) {
                j++;
            }
        })
        if (j == 0) {
            newArray.push(yItem);
        }
    })

    return newArray;
};
