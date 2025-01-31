// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// original Array
// new Array - unique values 
// original array = new Array

arr = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {
    let newArr = []
    if (nums.length == 0) return null;

    for (let i = 0; i < nums.length; i++){
       if (nums[i-1] == nums[i]){
            nums.splice(i, 1)
       }
    }

    console.log(newArr)
    console.log(nums)
};

//console.log(removeDuplicates(arr)) // => 5, nums = [0,1,2,3,4,_,_,_,_,_]

let removeDuplicatesTwo = (nums) =>{
    if (nums.length == 0) return null;

    for (let i = 0; i < nums.length; i++){
        if(nums[i-1] == nums[i] || nums.includes(nums[i])){
            nums.splice(nums[i], 1)
        }
    }

    return nums
}

//console.log(removeDuplicatesTwo(arr))

let removeDuplicatesThree = (nums) =>{
   let freqCounter = {}
   for (let i = 0; i < nums.length; i++){
     freqCounter[nums[i]] = freqCounter[nums[i]] + 1 || 1
   }

   for (let num in freqCounter){
        if (freqCounter[num] > 1){
            nums.splice(nums[num], freqCounter[num] - 1)
        }
   }

    return nums
}

//console.log(removeDuplicatesThree(arr))

let removeDuplicatesFour = (nums) =>{
    let freqCounter = {}
    for (let i = 0; i < nums.length; i++){
      freqCounter[nums[i]] = freqCounter[nums[i]] + 1 || 1
    }
 
    for (let i = 0; i < nums.length; i++){
        if (freqCounter[i] > 1 && freqCounter[i] == i){
           console.log('same')
        }
   }
 
     return nums
}

//console.log(removeDuplicatesFour(arr))

let countFrequency = (nums) => {
    let freqCounter = {}
    for (let i = 0; i < nums.length; i++){
        freqCounter[nums[i]] = freqCounter[nums[i]] + 1 || 1
    }
    return freqCounter
}

let removeDuplicatesTwoFive = (nums) =>{ // worked for all cases
    if (nums.length == 0) return null;
    
    //for each index, if the index before the current index is the same value, remove the current index in place
    for (let i = 0; i < nums.length; i++){
        console.log(nums[i])
        if(nums[i-1] == nums[i]){
            nums.splice(i, 1)
        }
    }
    //count the frequency of the values in the array, if the frequency is grter than 1 run the function again
    let fc = countFrequency(nums)
    for(key in fc){
        if (fc[key] > 1){
            removeDuplicatesTwoFive(nums)
        }
    }

    return nums
}
//console.log(removeDuplicatesTwoFive(arr))
//console.log(removeDuplicatesTwoFive([1, 2]))
//console.log(removeDuplicatesTwoFive([-1,0,0,0,0,3,3]))

var removeDuplicatesAgain = function(nums) { // works better!!! 
    if (nums.length == 0) return null;

    let fc = countFrequency(nums)
    for (key in fc){
        if (fc[key] > 1){
            nums.splice(nums.indexOf(Number(key)), fc[key] - 1)
        }
    }
    console.log(nums)
};

removeDuplicatesAgain([1,2]) //[0,0,1,1,1,2,2,3,3,4] => [0,1,2,3,4]