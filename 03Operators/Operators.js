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
        console.log('logical operator ||')
        let a = 15;
        let b = 7;

        if (a > 10 || b > 20) {
            console.log("At least one condition is true");
        } else {
            console.log("Both conditions are false");
        }
        console.log('logical operator !')
        let loggedIn = false;

        if (!loggedIn) {
            console.log("User is not logged in");
        } else {
            console.log("User is logged in");
        }
        console.log('coparison operator ? => ternary operator  ')

        let isEven = 10 % 2 === 0 ? true : false;

        console.log(isEven);
