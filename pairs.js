//Function to find a pair in an array list, giving a number.
let findPairs = (array, sum) => {
  // Empty object to see the difference
  let hashMap = {},
      results = [] // Empty array to save the results
  // Traverse the array
  for (let i = 0; i < array.length; i++) {
    //check if pair exists on index, and extra verification for 0 case.
    if (hashMap[array[i]] || hashMap[array[i]] === 0) {
      // push the numbers that sum the target into results
      results.push([hashMap[array[i]], array[i]])
    } else {
      // store index number
      hashMap[sum - array[i]] = array[i];
    }
  }
  //verificates if array contains a pair and return the results
  return results.length !== 0 ? results : "Pairs were not found";
}
console.log(findPairs([1,9,5,0,20,-4,12,16,7], [12]));