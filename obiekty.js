//  this 

const user = {
    name : 'Zhenia',
    test () {
        console.log(this);
        console.log(this.name);
    }
}

user.test();