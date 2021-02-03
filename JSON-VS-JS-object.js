const user = {
    id: 10413,name: 'shakil khan',friendsAge:[12, 25, 30, 40],friendsName :['shakil', 'shakib', 'azad']
};
const userJson = JSON.stringify(user);
const userFromJson = JSON.parse(userJson);
console.log("javascript Object", userJson);
console.log('JSON :', userFromJson);