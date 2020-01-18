// const test = new Promise((resolve,reject) => {
//     const score = 1+3;

//     if (score === 2) {
//         resolve('ok');
//     } else {
//         reject('edef');
//     }
// })

// test
//     .then(info => console.log(info))
//     .catch(err => console.log(err))


function checkAge (age) {
    return new Promise((resolve, reject) => {
        console.log(`Twój wiek to: ${age}`);

        if (age >= 18) {
             resolve('Jest ok, możesz wejść');
        } else {
            reject('Niestety jesteś za młody... ')
        }
    })
}


function doubleCheck(ageConfirm) {
    return new Promise((resolve, reject) => {
        console.log(`Sprawdze jeszcze raz.`);
        resolve(`Faktycznie: ${ageConfirm}`)
    })
};


checkAge(2)
    .then(res => {
        console.log(`.then RES: ${res}`);
    })









                                  


