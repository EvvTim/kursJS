const test = new Promise ((resolve, reject) => {
    const score = 2 + 1;

    if (score === 2) {
        resolve('ok');
    } else {
        reject('err')
    }
})


test
    .then(info => console.log(info))
    .catch(err => console.error(err))

