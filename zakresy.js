 const name = 'Żenia';

 function test() {
     const name = `EV`;
     let age = 25;
     console.log(`CLG w funkcjj - ${name}`);
     console.log(age);

     function test2() {
         console.log(`TEST2 - ${name}`);
         console.log(`TEST2 - ${age}`);
     }
        test2()

    }
    
    test();
    
    console.log(`CLG poza funkcą - ${name}`);
    // console.log(age);