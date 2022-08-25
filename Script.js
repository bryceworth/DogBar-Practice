// scroll down to the bottom of the page to see the instructions 

let pups = [
    {
      "id": 1,
      "name": "Mr. Bonkers",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
    },
    {
      "id": 2,
      "name": "Nugget",
      "isGoodDog": false,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_2.jpg"
    },
    {
      "id": 3,
      "name": "Skittles",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_3.jpg"
    },
    {
      "id": 4,
      "name": "Buttercup",
      "isGoodDog": false,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_4.jpg"
    },
    {
      "id": 5,
      "name": "Lucipher",
      "isGoodDog": false,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_5.jpg"
    },
    {
      "id": 6,
      "name": "Snooper Pooper",
      "isGoodDog": false,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_6.jpg"
    },
    {
      "id": 7,
      "name": "Puddles",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_7.jpg"
    },
    {
      "id": 8,
      "name": "Mittens",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
    },
    {
      "id": 9,
      "name": "Middens",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_2.jpg"
    },
    {
      "id": 10,
      "name": "Fido",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_5.jpg"
    }
  ]


//  Question One: On the page, there is a div with the id of "dog-bar". Display each dog's name in the dog bar.

//itterate through pups, get each name
const pupsNames = pups.map(pups => pups.name);

// display it in dog bar
let dogBarContent = document.getElementById('dog-bar').innerHTML = pupsNames;


// Question Two: When a user clicks on a pup's span in the div#dog-bar, that pup's info (image, name, and isGoodDog status) should show up in the div with the id of "dog-info". Display the pup's info in the div with the following HTML elements:
// 1. an img tag with the pup's image url
// 2. an h2 with the pup's name
// 3. a button that says "Good Dog!" or "Bad Dog!" based on whether isGoodDog is true or false. 

//  Example: 
//         <img src="dog_image_url" />
//         <h2>Mr. Bonkers</h2>
//         <button>Good Dog!</button>

// Question Three: When a user clicks the Good Dog/Bad Dog button, two things should happen:
// 1. The button's text should change from Good to Bad or Bad to Good

 //Grab button from index.html, assign this to btn

const btn = document.getElementById("good-dog-filter");

// Toggle button text on click
btn.addEventListener('click', function handleClick() {
  const initialText = 'Good Dogs';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.innerHTML =
      '<span>Bad Dogs</span>';
    //return back to initial text when clicked again
  } else {
    btn.textContent = initialText;
  }
});


// 2. The corresponding pup object in the array should be updated to reflect the new isGoodDog value
const goodPups = pups.map(pups => pups.isGoodDog);

function doggyStyle() {
  if (goodPups == true) {
    return pups.name;
  }
  else {
    return pups.name;
 }
  
}

 doggyStyle()


console.log(pups)

// Question Four: When a user clicks on the Filter Good Dogs button, two things should happen:

// 1. The button's text should change from "Filter good dogs: OFF" to "Filter good dogs: ON", or vice versa.
// 2. If the button now says "ON" (meaning the filter is on), then the Dog Bar should only show pups whose isGoodDog attribute is true. If the filter is off, the Dog Bar should show all pups (like normal).

