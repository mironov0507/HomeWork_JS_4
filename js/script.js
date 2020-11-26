///////// Zadanie 1 ///////////////////////////////

let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++){
    document.write(arr[i]);
}

document.write('<br/>');


///////// Zadanie 2 ///////////////////////////////

let arr1 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
 
for(let i = 0; i < arr1.length; i++){
    if(arr1[i] > -10 && arr1[i] < -3) 
        document.write(arr1[i]);
}

///////// Zadanie 3 ///////////////////////////////

// метод for ////////////////////////////////

let arr2 = [],
    sum = 0;

for(let i = 23; i <= 57; i++){
    arr2.push(i);
}

console.log(arr2);

for(let i = 0; i < arr2.length; i++){
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

document.write('<br/>');

let arr3 = ['10', '20', '30', '50', '235', '3000'],
    str;

for(let i = 0; i < arr3.length; i++){
    str = arr3[i];
    if(+str[0] == 1 || +str[0] == 2 || +str[0] == 5){
    document.write(arr3[i]);
    document.write(' ');
    }
}

///////// Zadanie 5 ///////////////////////////////

document.write('<br/>');


let arr4 = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'];

for(let i = 0; i < arr4.length; i++){

    if(i == 5 || i == 6){
        document.write(`<strong>${arr4[i]}</strong>`);
        document.write(' ');

    }else {
    document.write(arr4[i]);
    document.write(' ');
    }

}

///////// Zadanie 6 ///////////////////////////////

let arr5 = [45, 7, 60, 'qwerty'];

    arr5[arr5.length] = 122;

    console.log(arr5[arr5.length-1]);

///////// Zadanie 7 ///////////////////////////////

  /*  document.write('<br/>');

let a,
    arr6 = [];    
  
    for(let i=0; ; i++){
        a = prompt('Введите число');
        if(a == ' ')break;
        arr6.push(a);

    }
    document.write(arr6);
    
    arr6.sort(function(a, b){
        return a - b;
    });

    document.write('<br/>');
    document.write(arr6);*/

///////// Zadanie 8 ///////////////////////////////
// метод reverse /////////////////////////////

/*let arr7 = [12, false, 'Текст', 4, 2, -5, 0];

    arr7.reverse();

    console.log(arr7);*/


// метод while //////////////////////////////

let arr7 = [12, false, 'Текст', 4, 2, -5, 0],
    arr8 = [];

let i2 = arr7.length - 1;

while(i2 >= 0){
    arr8.push(arr7[i2]);
    i2--;
}
console.log(arr8);

///////// Zadanie 9 ///////////////////////////////

let arr9 = [5, 9, 21,,,9, 78,,,, 6],
    count = 0;

for(let i = 0; i < arr9.length; i++){
    if(arr9[i] == undefined) count++;
}
console.log(`Количество пустых элементов массива = ${count}`);

///////// Zadanie 10 ///////////////////////////////

let arr10 = [1,8,0,13,76,8,7,0,22,0,2,3,2],
    arr11 = [],
    sum1 = 0;

    if(arr10.indexOf(0) == -1){
        console.log(0);
    }else {
        arr11 = arr10.slice(arr10.indexOf(0) + 1);
        if(arr11.lastIndexOf(0) == -1){
            console.log(0);
        }else{
            arr11.length = arr11.lastIndexOf(0);

            for(let i = 0; i < arr11.length; i++){
                sum1 +=arr11[i];
            }
            console.log(`Сумма : ${sum1}`);
        }
    } 

///////// Zadanie 11 ///////////////////////////////

document.write('<br/>');

let height = 5;

for(let i = 1; i <= height; i++){
    for(let k = 1; k <= height - i; k++){
        document.write('&ensp;');
    }
    for(let j = 1; j <= i + i - 1; j++){
        document.write('^');
    }
    document.write('<br/>');
}