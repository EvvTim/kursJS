function checkAge(age) {

    return new Promise((resolve, reject) => {

        console.log(`Twój wiek to: ${age}`);

        if (age >= 18) {
            resolve('Jest ok, możesz wejść')
        } else {
            reject('Niestety jesteś za młody...')
        }

    })
};

function doubleCheck(ageConfirm) {
    return new Promise((resolve, reject) => {

        console.log('Sprawdze jeszcze raz.');
        resolve(`Faktycznie: ${ageConfirm}`)
    })
};


// checkAge(2)
//     .then(res => {
//         console.log(`.then RES: ${res}`);
//         return doubleCheck(res);
//     })
//     .then(doubleCheck => {
//         console.log(doubleCheck);
//     })
//     .catch(err => {
//         console.log(err);
//     })



async function checkAge2() {

  try {
        const age = await checkAge(2)

    console.log(age);

    const dblCheck = await doubleCheck(age)

    console.log(dblCheck);
} catch(err) {
    console.log(err);
}
  }


checkAge2()