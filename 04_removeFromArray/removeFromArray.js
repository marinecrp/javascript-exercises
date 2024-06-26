const removeFromArray = function() {
    let array = arguments[0];
    let removedItemsArray = [];
    for (let i = 1; i < arguments.length; i++){
        removedItemsArray.push(arguments[i]);
    }
    let newArray = [];
    for (const item of array){
        if (!removedItemsArray.includes(item)){
            newArray.push(item);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
