// find sum of numbers divisible by 4 between 1 and 40

let sum = 0;
for(let i=1;  i<=40;  i++)
{
    if(i%4 == 0)
    {
        sum = sum + i;
    }
}

console.log(sum);
        
    
