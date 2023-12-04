/*

class User{ //object constructor
    constructor(name, email, role, departament){
        this.name = name;
        this.email = email;
    }
    setRole(role){ //setter
        this.role = role;
    }
    setDepartament(departament){
        this.departament = departament;
    }
    getUserProfile(){ //getter
        return[
            this.name,
            this.email
        ]
    }
    getFullUserData(){  //getter
        return[
            this.name,
            this.email,
            this.role,
            this.departament
        ]
    }
    displayUI(userData){
        for (user of userData){

        }
    }
}

module.exports ={
    User
}

*/

class Products {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

module.exports = {
    Products
}