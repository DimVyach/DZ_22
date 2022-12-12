
const obj1 = {
    x: 10,
    y: 20,
};
const obj2 = {
    z: 30,
} ;
const objOne = {
    x: 10,
};
const objTwo = {
    x: 20,
    y: 30,
};
function assignObjects(objOne,objTwo) {
    let newObj = {};
    for (let key in objOne) {
        newObj[key] = objOne[key];
    }
    for (let key in objTwo) {
        newObj[key] = objTwo[key];
    }
    return newObj;
}
console.log(assignObjects(obj1,obj2));
console.log(assignObjects(objOne,objTwo));