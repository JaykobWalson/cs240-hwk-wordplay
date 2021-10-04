let limitedDictionary = [];
fill();
searchForWord();
console.log(matchingWords());
//fills up the limited dictionary.
function fill() {
  for (let word of dictionary) {
    if (word.length == 6) {
      limitedDictionary.push(word);
    }
  }
}

//returns the word in scrambled form.
function scrambledWord() {
  let random = Math.floor(Math.random() * limitedDictionary.length);
  let word = limitedDictionary[random];
  if (word.length == 6) {
    //6 character limit for the word
    console.log("The letters of the words are the following:");
    let wordArray = word.split("");
    for (let i = 0; i < wordArray.length; i++) {
      let rng = Math.floor(Math.random() * wordArray.length);
      let hold = wordArray[i];
      wordArray[i] = wordArray[rng];
      wordArray[rng] = hold;
    }
    word = wordArray.join("");
    console.log(word);
    return word;
  }
}

//Determines if the letters are the same in another word
//@param letters are the letters of the base word
//@param branchWord is another word in the dictionary.
function containsAlphabet(letters, branchWord) {
  for (let x in branchWord) {
    if (letters.includes(branchWord[x])) {
      letters.splice(x, 1);
    } else {
      return false;
    }
  }
  return true;
}

//Fills and returns an array of matching words
function matchingWords() {
  let matches = [];
  let wordToHold = scrambledWord(); //"holds on" to the scrambled word.
  for (let x in dictionary) {
    if (containsAlphabet(wordToHold, x) && x.length >= 3 && x.length <= 6) {
      console.log(x);
      matches.push(x);
    }
  }
  return matches;
}

function searchForWord() {
  //searches for word user enters. Backbone of the code.
  var resp = prompt(
    "Enter the possible 3-6 character permutations (words out of these letters). Type DONE to exit."
  );
  let counter = 0;
  if (resp != null) {
    if (resp.length >= 3 && resp.length <= 6) {
      console.log("You typed " + resp + ".");
      for (let x of dictionary) {
        if (x == resp) {
          console.log(resp + " exists in dictionary.");
          counter++;
        }
      }
    } else if (resp.length < 3) {
      console.log("Guess is too short.");
      resp;
    } else {
      console.log("Guess is too long.");
      resp;
    }
    // let random = Math.floor(Math.random() * limitedDictionary.length);
    // let word = limitedDictionary[random];
    // if (word.length == 6)
    //   //6 character limit for the word
    //   console.log("The letters of the words are the following:");
    // let wordArray = word.split("");
    // for (let i = 0; i < wordArray.length; i++) {
    //   let rng = Math.floor(Math.random() * wordArray.length);
    //   let hold = wordArray[i];
    //   wordArray[i] = wordArray[rng];
    //   wordArray[rng] = hold;
    // }
    // word = wordArray.join("");
    // console.log(word);
    // return counter;
  }
}
