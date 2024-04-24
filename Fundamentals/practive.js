 console.log(Math.floor(Math.random() * 4) + 5); // random number between 5 and 8 both inclusive


for(let i = 1; i <= 1000; i++) {
  let x = Math.floor(Math.random() * (267 - 123 + 1)) + 123;
  
}

// Initialize an object to store the counts
let counts = {};

for (let i = 1; i <= 1000; i++) {
    // Generate a random number between 123 and 267 (inclusive)
    let randomNumber = Math.floor(Math.random() * (267 - 123 + 1)) + 123;

    // Increment the count for the generated number
    if (counts[randomNumber]) {
        counts[randomNumber]++;
    } else {
        counts[randomNumber] = 1;
    }

    // Log the generated number
    console.log(randomNumber);
}

// Output the counts
for (let number in counts) {
    console.log(`${number} appeared ${counts[number]} times.`);
}


// Initialize an object to store the counts


for (let i = 1; i <= 1000; i++) {
    // Generate a random number between 123 and 267 (inclusive)
    let randomNumber = Math.floor(Math.random() * (267 - 123 + 1)) + 123;

    // Increment the count for the generated number
    if (counts[randomNumber]) {
        counts[randomNumber]++;
    } else {
        counts[randomNumber] = 1;
    }
}

// Convert counts object to an array of [number, count] pairs
let countsArray = Object.entries(counts);

// Sort the array based on the count in descending order
countsArray.sort((a, b) => b[1] - a[1]);

// Output the counts
countsArray.forEach(([number, count]) => {
    console.log(`${number} appeared ${count} times.`);
});

