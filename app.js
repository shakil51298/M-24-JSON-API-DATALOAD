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
    .then(json => displayNames(json))

    function displayNames(users){
        const userNames = users.map(user => user.username);
        const ul = document.getElementById('display-UserName');
        for (let i = 0; i < userNames.length; i++) {
            const user = userNames[i];
            const li = document.createElement("li");
            li.innerText = user;
            ul.appendChild(li);
            
        }


    }
