const user = {
    name: 'Zhenia',
    age: 25,
    sex: 'male',
    'hair-color': 'blonde',
}


for (const data  in user) {
    console.log(data + ' -> ' + user[data]);
}