///////// Zadanie 1 ///////////////////////////////

let arr = [1, 2, 3, 4, 5];

for(i = 0; i < arr.length; i++){
    document.write(arr[i]);
}

document.write('<br/>');


///////// Zadanie 2 ///////////////////////////////

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
 
for(i = 0; i < arr1.length; i++){
    if(arr1[i] > -10 && arr1[i] < -3) 
        document.write(arr1[i]);
}

///////// Zadanie 3 ///////////////////////////////

// метод for ////////////////////////////////

let arr2 = [],
    sum = 0;

for(i = 23; i <= 57; i++){
    arr2.push(i);
}

console.log(arr2);

for(i = 0; i < arr2.length; i++){
    sum = sum + arr2[i];
}

console.log(`Сумма чисел ${sum}`);



// метод while ////////////////////////////////

// let i1 = 23,
//     arr2 = [];

// while(i1 <= 57){
//     arr2.push(i1);
//     i1++;
// }

// console.log(arr2);


///////// Zadanie 4 ///////////////////////////////

let arr3 = ['10', '20', '30', '50', '235', '3000'];


