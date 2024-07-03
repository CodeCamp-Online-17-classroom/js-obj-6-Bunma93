// write code here
let user = {
    // name: "James"
};
let isEmpty = (obj) => {
    for (let key in obj){
    if (obj.hasOwnProperty(key)) {
        return false;
        }
    } 
    return true;
}

console.log(isEmpty(user));