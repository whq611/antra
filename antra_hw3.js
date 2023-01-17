//have your own implementation of Array.prototype.map, filter, reduce
const arr = [1, 2, 3, 4, 5];
console.log("original array: ", arr);

//Array.prototype.map
//map()
const mapArray = arr.map((e) => e + 5);
console.log("map:", mapArray);
//myMap()
Array.prototype.myMap = function(cb) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(cb(this[i]));
    }
    return arr;
};
const myMapArray = arr.myMap((e) => e + 5);
console.log("myMapArray:", myMapArray);

//Array.prototype.filter
//filter()
const filterArr = arr.filter((e) => e % 2 == 0);
console.log("filter: ", filterArr);
//myFilter()
Array.prototype.myFilter = function(cb) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
};
const myFilterArr = arr.myFilter((e) => e % 2 == 0);
console.log("myFilterArray: ", myFilterArr);

//Array.prototype.reduce
//reduce()
const reduceSum = arr.reduce((total, e) => {
    return total + e;
});
console.log("reduceSum ", reduceSum);
//myReduce()
Array.prototype.myReduce = function(cb) {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum = cb(sum, this[i]);
    }
    return sum;
};

const myReduceSum = arr.myReduce((total, e) => total + e);
console.log("myReduceSume ", myReduceSum);