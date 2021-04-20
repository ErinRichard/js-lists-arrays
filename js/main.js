//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

// convert dog_string into an array -- didn't end up using this
// Keeping for example re: converting string to array
// let split_dog_str = dog_string.split(" ")



let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]


// some() method tests whether at least one element in the array passes a test
function findWords(a_string, arr){
    if(dog_names.some(element => dog_string.includes(element))){
        return console.log("Matched dog_name")
    } else {
        return console.log("No Matches")
    }
}
// Call the function
console.log(findWords(dog_string,dog_names))    




//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr){
    // For Loop to get all names
    // And replace even indexes
    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
            // the 1 below signifies how many times we want the value to be deleted/asking it to free up one space inside the array
            // Telling it to remove 1 item each time our criteria is met
            arr.splice(i, 1, 'even index')
        }
    }

    return arr
}

console.log(replaceEvens(arr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]