let pass = 'awfefefefeffefefefef!!!5';
let passLength = 20;


if (pass.length > passLength && pass.includes('!')) {
    console.log('Masz bardzo dobre hasło!');
} else if (pass.length > passLength) {
    console.log('Masz dobre hasło');
} else {
    console.log('Masz za słabe hasło!');
}

