/* 
        '==' :equal to 
        '===' :eual value and type
        '!=' :not equal
        '!==' :not equal value or not equal type
*/

console.log('logical operator &&')

        let x = 5;
        let y = 10;

        if (x > 0 && y < 20) {
            console.log("Both conditions are true");

        } else {
          
            console.log("At least one condition is false");
        }

        /* 
          && operator working
             x      y      x&&y
           false  false   false 
           false  true    false
           true   false   false
           true   true    true
        */
        
        console.log('logical operator ||')

        let a = 8;
        let b = 7;

        if (a > 10 || b > 20) {
            console.log("At least one condition is true");
        } else {
            console.log("Both conditions are false");
        }
        console.log('logical operator !')

       
          
      /* 
          || operator working
             x      y     x||y
           false  false   true
           false  true    true
           true   false   true
           true   true    false 
      */
     

           /* not operator */
           let loggedIn = false;
        
        if (!loggedIn) {
            console.log("User is not logged in");
        } else {
            console.log("User is logged in");
        }
        /* ternary operator */
        console.log('coparison operator ? => ternary operator  ')
        let number=100;
        let first_number=2;
        let isEven = number % first_number === 0 ? "the given number is even " : "the given number is odd";

        console.log(isEven);
