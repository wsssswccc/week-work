// 对象转换为数组
let object = {
    age:20,
    sex:"woman"
};
window.console.log(object);

// 1.Object.keys()-返回属性名-不会改变原对象
window.console.log(Object.keys(object));
// 2.Object.values()-返回属性值-不会改变原对象
window.console.log(Object.values(object));
// 3.Object.entries()-返回属性名和属性值-不会改变原对象
window.console.log(Object.entries(object));
// window.console.log(object);

// 4.for of-不会改变原对象
let {keys,values,entries}=Object;
for(let arr1 of keys(object)){
    window.console.log(arr1);  
}
for(let arr2 of values(object)){
    window.console.log(arr2);
}
for(let arr3 of entries(object)){
    window.console.log(arr3);
}
window.console.log(object);
//注：4虽然与1.2.3调取的数据一样,但是1.2.3都只转成一个数组,4转成n(对象属性个数)个数组

// 5.for in-返回属性值-不会改变原对象
let arr1=[];
for(let i in object){
    arr1.push(object[i]);
}
window.console.log(arr1);

// 6.map-必须与Object.keys()连用(不建议)-不会改变原对象
let arr6 = Object.keys(object).map(function(i){return object[i]});
window.console.log(arr6);

// 数组转换为对象
let arr = ['I','love','CQUPT'];

// 1.forEach-不会改变原数组
let obj1 = {};
arr.forEach((item,index)=>{obj1[index] = item});
window.console.log(obj1);

// 2.Object.assign()-会改变原数组
window.console.log(Object.assign({},arr));
window.console.log(typeof(arr));

// 3.自定义函数-会改变原数组
// function toObj(arr) {
//     let result = {};
//     for(var a=0; a<arr.length; a++) {
//         result[a] = arr[a];
//     }
//     return result;
// }
// window.console.log(toObj(arr));
// window.console.log(typeof(arr));

