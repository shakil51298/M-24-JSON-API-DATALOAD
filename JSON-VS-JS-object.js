const user = {id: 10413, name:'shakil khan'};
         const userJson = JSON.stringify(user);
         const userFromJson = JSON.parse(userJson);
         console.log("javascript Object",userJson);
         console.log('JSON :',userFromJson);