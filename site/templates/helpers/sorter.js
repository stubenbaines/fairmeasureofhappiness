var _ = require('underscore');

module.exports = function(data) {
    var items,
        sortedItems;
    
    sortedItems = _.sortBy(data, function(item){
        return item.date; 
    });
    items = _.toArray(sortedItems).reverse(); 
    return items;
};
