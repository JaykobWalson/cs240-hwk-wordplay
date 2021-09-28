let random = Math.floor(Math.random()*dictionary.length);
let word = dictionary [random];
if(word.length == 6){//6 character limit for the word
console.log("The letters of the words are the following:");
    for(let i = 0; i < word.length; i++){//Prints out the words in random order.
        let position = Math.floor(Math.random()*word.length);
        console.log(word[position]);
    }
console.log("Enter all possible 3-6 character words");
    for(let w in dictionary){
       if(w.length >= 3 && w.length <= 6){
           for(let i = 0; i < word.length; i++){
            if(w[i]){

            }
           }

       }
    }
}