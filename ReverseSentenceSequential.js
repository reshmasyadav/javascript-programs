// print Reverse sentence word by word

let sentence = "I love JavaScript very much";
let result = "";
let word = "";

for (let i = sentence.length - 1; i >= 0; i--) 
{

  if (sentence[i] === " ") 
    {
    result += word + " ";
    word = "";
    } else {
    word = sentence[i] + word;
  }
}

result += word;

console.log(result);
