// const user = {
//     id: 10413,
//     name: 'shakil khan',
//     friendsAge: [12, 25, 30, 40],
//     friendsName: ['shakil', 'shakib', 'azad']
// };
// const userJson = JSON.stringify(user);
// const userFromJson = JSON.parse(userJson);
// console.log("javascript Object", userJson);
// console.log('JSON :', userFromJson);

//data load from Backend
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => userInfo(json))

function userInfo(userData) {
    const userEmail = userData.map(x => x.email);
    const ol = document.getElementById('display-UserName')
    const displaId = document.getElementById('display-id')
    for (let i = 0; i < userEmail.length; i++) {
        const email = userEmail[i];

        const li = document.createElement("li");
        li.innerText = email;
        ol.appendChild(li);
    }
    const userId = userData.map(user => user.name);

    for (let i = 0; i < userId.length; i++) {
        const Id = userId[i];

        const li = document.createElement("li");
        li.innerText = Id;
        displaId.appendChild(li);
    }

}