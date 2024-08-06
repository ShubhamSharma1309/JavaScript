class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // get mai humesa return hoga,,
    // and this.(change karenge thoda) nhi karenge toh error aajayega bcoz constructor v initialze kar raha hai and set v ,, toh kiska sune,, toh maximum call stack exceed ka problem aajayega...
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);