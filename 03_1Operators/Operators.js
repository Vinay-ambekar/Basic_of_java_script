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
                /* oprators */
        /* arithematic opratros */
        number3=5;
        number4=6
        console.log(number3+number4);//addtion
        console.log(5-10);//subtraction
        console.log(5*10);//multiplication
        console.log(5/10);//division
        console.log(5%10);//modules or remainder

        /* increement and dcrement has to used with variabels*/
        var number1=20
        console.log(++number1) ;//pre incremenet
        console.log(number1++) //post increment
        var number2=10
        console.log(--number2) ;//pre decrement
        console.log(number2--);//post decrement

        /* Assignment Operators: */
        var number3=10
        console.log(number3+=20);//euals to number5 = number5 + 20
        console.log(number3-=20);//euals to number5 = number5 - 20
        console.log(number3*=20);//euals to number5 = number5 * 20
        console.log(number3/=20);//euals to number5 = number5 / 20

        /* Comparison Operators */
        console.log("comparison operators")
        console.log("gretor than 5>3 = " +(5>3));// o/p true
        console.log("less than 7<6 = " +(7<6));//o/p false
        console.log("gretor than or equal to 6>=9 = " +(6>=9)); //o/p false
        console.log("less than or equal to 8<=7 = " +(8<=7));//o/p false
        console.log(  "double equal == operator : "+(10=="10"));//o/p true compare only value
        console.log("thriple equal to === operator : "+(10==="10"));//o/p false compare both type and value
        console.log("not equal to != operator : "+(10!=10))//false
        console.log("not double equal to !== opertor : "+(10!=='10'))//true it chect both type and value
        /* Logical oprator */
        /* and && */
        console.log("logical operator and &&")
        console.log("true && true = " +( true && true))
        console.log("true && false = " +(true && false))
        console.log("false && true = " +(false && true))
        console.log("false && false = " +(false && false))

        console.log("logical operator or ||")
        console.log("true || true = " +(true || true))
        console.log("true || false = " +(true || false))
        console.log("false || true = " +(false || true))
        console.log("false || false = " +(false || false))

        console.log("not opertor not !")
        console.log("not ! opertor !false = " +(!false))
        
        
        //conditional operator
        let num1=25;
        let num2=20;
        console.log(num1>num2?"a is gretaor than b ":"b is greator than a")