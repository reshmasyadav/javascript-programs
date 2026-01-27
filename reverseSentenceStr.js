// print a reversed string sentence

let sentence = "I love JavaScript";
let rev = "";

for (let i = sentence.length - 1; i >= 0; i--) {
  rev += sentence[i];
}

console.log(rev);