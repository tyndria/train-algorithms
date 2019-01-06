/**
 * 
 * Insert Delete GetRandom O(1)
 * 
 * Design a data structure that supports all following operations in average O(1) time.
 * 
 * insert(val): Inserts an item val to the set if not already present.
 * remove(val): Removes an item val from the set if present.
 * getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
 * 
 */



/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map = new Map();
    this.array = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false;
    }
    
    this.map.set(val, this.array.length);
    this.array.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) {
        return false;
    }
    
    var deleteIndex = this.map.get(val);
    var lastKey = this.array[this.array.length - 1];
    
    this.map.set(lastKey, deleteIndex);
    this.array[deleteIndex] = lastKey;
    
    this.map.delete(val);
    this.array.pop();
    
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    var randomIndex = Math.floor(Math.random() * this.array.length);
    return this.array[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */