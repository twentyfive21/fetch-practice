
// Every fetch is commented out so start at the top and move down to get familiar with each fetch. There are 
// Link for fetches returns one object remove the /1 to return more 
// https://jsonplaceholder.typicode.com/todos/1

// ~~~~~~~ EXERCISE 1 FETCH ~~~~~~~~~

// fetch(` https://jsonplaceholder.typicode.com/todos/1`)
// .then(res=>res.json())
// .then(json=>console.log(json))
// .catch(err=>console.log(err));

// ~~~~~~~ EXERCISE 2 ASYNC FETCH ~~~~~~~~~

// const fetchData = async () => {
//   try{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
//     const jsonData = await res.json();
//     console.log(jsonData)
//   } catch(err) {
//     console.log(err);
//   }
// };
// You need to call the function or it won't fetch since it is async. Fetch exercise 1 doesn't need to be called since it does it by itself. 
// fetchData();

// ~~~~~~~ EXERCISE 3 AXIOS FETCH ~~~~~~~~~
// For any axios fetch you will need to install the package from 
// https://www.npmjs.com/package/axios
// In your terminal type in npm install axios
// Make sure to import it in the file your doing the fetch and then your all set!


        
// ~~~~~~~ EXERCISE 4 ASYNC AXIOS FETCH ~~~~~~~~~


// ~~ FETCH EXERCISE 5 ASYNC FETCH with header authorization ~~~~
// for this one you will need to have you own api key connected to your file
// This is a little advanced, but I am leaving the syntax here for you to mess around with and learn from. I also gave this so when you see a fetch that needs a header you can reference this. 

// const fetchData = async () => {
//     try {
//       const response = await fetch(`https://api.pexels.com/v1/search?query=${userInput}&page=${pageNum}&per_page=16`, {
//         headers: {
//           Authorization: apiKey
//         }
//       });
//       const jsonData = await response.json();
//       // console.log(jsonData)
//       setPhotos(jsonData?.photos)
//       setTotalPages(Math.ceil(jsonData?.total_results / 16))
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   fetchData();