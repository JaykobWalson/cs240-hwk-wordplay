let limitedDictionary = [];
for(let word of dictionary){
    if(word.length ==6){
        limitedDictionary.push(word);
    }
}
let random = Math.floor(Math.random()*limitedDictionary.length);
let word = limitedDictionary [random];
if(word.length == 6){//6 character limit for the word
console.log("The letters of the words are the following:");
let wordArray = word.split("");
    for(let i = 0; i < wordArray.length; i++){
        let rng = Math.floor(Math.random()*wordArray.length);
        let hold = wordArray[i];
        wordArray[i] = wordArray[rng];
        wordArray[rng] = hold;
    }
    word = wordArray.join("");
    console.log(word);
    let done = false;
    var resp = prompt("Enter the possible 3-6 character permutations (words out of these letters). Type DONE to exit.");
    // var ans = "";
    if(resp.length >= 3 && resp.length <= 6){
        console.log("You typed " + resp + ".");
    for(let x of dictionary){
        if(x == resp){
        
        // for(let i = 0; i < x.length; i++){
        //     if(x.includes(word[i])){
        //         ans += word[i];
        //         console.log("A word is: " + ans);
        //     }
        // }
        console.log("One of the words is " + x);
    }
        else{
            console.log("Sorry! Not one of the words.");
        }
        }
        
    }
    else if(resp.length < 3){
        console.log("Guess is too short.");
        resp;
    }  
    else{
        console.log("Guess is too long.");
        resp;
    }

    }
    
