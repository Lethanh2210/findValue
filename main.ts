
let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let arr : number[] = [];
let i = 0;
while(i<= 10){
    if(numbers.indexOf(i) === -1){
        arr.push(i);
    }
    i++;
}
console.log(arr);