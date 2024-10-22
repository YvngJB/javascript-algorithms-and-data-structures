let sum = 0;
let average = 0;

function getAverage(scores) {
 for (let i = 0; i < scores.length; i++) {
    sum += scores[i] 
    console.log(sum)
    average = sum / scores.length;
 }
    sum=0;
    return average;
}





console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));



function getAverage(scores) {
   let sum = 0;
 
   for (const score of scores) {
     sum += score;
   }
 
   return sum / scores.length;
 }