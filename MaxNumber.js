// Find The Maximum Number In Given Array


let numbers = [10, 45, 23, 89, 34];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++)
 {
    if (numbers[i] > max) 
        {
        max = numbers[i];
        }
}

console.log("Maximum number is:", max);
