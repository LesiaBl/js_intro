const numbers  =[0, 3, -9, 5, 8];
//first positive
//first odd
let positive, odd, negative;
for(const n of numbers){
    if(n % 2  == 1 ){
        odd = n;
        break;
    }                                                 
}

for(const n of numbers){
    if(n > 0 ) {
        positive = n;
         break;
}   
}

for(const n of numbers){
    if(n < 0){
        negative = n;
        break;
    }
}
console.log(`The positive number is ${positive},
             and the odd number is ${odd}
             the negative is ${negative}`);


const nums  =[0, 3, -9, 5, 8];
//first positive
//first odd
let positiveN, oddN, negativeN, fP = false, fN = false, fO = false;

for(const n of nums){
    if(!fP && n > 0){
        positiveN = n;
        fP = true;
    }
    if(!fN && n < 0 ){
        negativeN = n;
        fN = true;
    }
    if(!fO && n % 2 == 1){
        oddN = n;
        fO= true;
    }
}
console.log(`The positive number is ${positiveN},
             and the odd number is ${oddN}
             the negative is ${negativeN}`);