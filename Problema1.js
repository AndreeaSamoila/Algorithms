// Problema 1:
// Sa se calculeze maximul si minimul dintre
// trei numere. Rezultatele vor fi salvate in variabilele max, respectiv min

// varianta 1: 

n = 3;
let a = [43, 456, 13];
let min = a[0];
let max = a[0];

for(let i=0; i<=a.length; i++) {
    if(min >= a[i]) {
    min = a[i]
}
    if( max <= a[i]) {
    max = a[i];
}
}
console.log("Minimul dintre cele trei numere este: ", min);
console.log("Maximul dintre cele trei numere este: ", max);
 
// varianta 2: 

/* 
const a=12, b=4, c=6;
let min, max;

if( a < b ) {
    min = a; 
    if( a < c) {
        min = a;
    }   else if (a > c) {
        min = c;
    }
} else if ( a > b) {
    min = b; 
    if( b < c) {
        min = b;
    }   else if (b > c) {
        min = c;
    }
}
console.log("Minimul dintre cele trei numere este: ", min);

if ( b > a) {
    max = b;
    if(b > c)  {
        max = b;
    } else if ( c > b) {
        max = c;
    }
} else if ( b < a) {
    max = a; 
    if( a > c) {
        max = a;
    }   else if (a < c) {
        max = c;
    }
}
console.log("Maximul dintre cele trei numere este: ", max);

*/

//varianta 3: 
/* 

const a=455, b=4, c=24;
let min, max;

if ( a <= b && a <= c) {
    min = a;
} else if ( b <= a && b <=c) {
    min = b;
} else if( c <= a && c <= b) {
    min = c;
}
console.log("Minimul dintre cele trei numere este: ", min);

if( a >= b && a >= c) {
    max = a;
} else if ( b >= a && b >= c) {
    max = b;
} else if ( c >= a && c >= b) {
    max = c;
}
console.log("Maximul dintre cele trei numere este: ", max);

*/