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
        //display user data in html list
        const bodyElement = document.querySelector('body');
        const displayUL = document.createElement('ul');
        for (User of userData){
            
            const displayLI = document.createElement('li');
        }
        bodyElement.appendChild(displayUL);
        displayUL.appendChild(displayLI);
        
    }
}

module.exports ={
    User
}