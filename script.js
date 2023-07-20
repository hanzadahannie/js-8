// const array = [1, 2, 3, 4, 5];
//
// const handleSum = (array) => {
//     let sum = 0;
//     for (let index = 0; index < array.length; index++){
//         sum +=array[index];
//     }
//     return sum;
// }
// console.log(handleSum(array));


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
//
// const handleSum = (array) => {
//     let sum = 0;
//     for (let index = 0; index < array.length; index++){
//         sum +=array[index];
//
//     }
//     return sum;
// }
// console.log(handleSum(array));

const array=[1, 2, 5, 9, 4, 13, 10]
let res=""
function handleSum (array) {
    for (let index = 0; index < array.length; index++){
        if(array[index] === 4){
            return 'Yes';
        }
    }
    return res
}
console.log(handleSum(array));