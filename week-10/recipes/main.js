import recipes from './recipes.mjs';

function randomNumber() {
const randomNum = Math.floor(Math.random()*5);
 return randomNum;
}
// console.log(randomNumber());

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = randomNumber(listLength);
	return list[randomNum];
}


console.log(getRandomListEntry(recipes));

function recipeTemplate(recipe) {
	return `<div class="parent">
        <div class="recipe-img-container">
          <img src='${recipe.image}' alt="Apple crisp on a plate">
        </div>
        <div class="recipe-content">
          ${tagsTemplate(recipe.tags)}
          <h2 class="recipe-name">${recipe.name}</h2>
          ${ratingTemplate(recipe.rating)}
          <p class="recipe-description">${recipe.description}</p>
        </div>
      </div>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    let html = '';    
    tags.forEach(element => {
            html += `<div class="tag">${element}</div>`
        });
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
        for (let i = 1; i <= 5; i++) {
            // check to see if the current index of the loop is less than our rating
            if (i <= rating) {
                // if so then output a filled star
                html += '<span class="icon-star">⭐</span>';
            } else {
                // else output an empty star
                html += '<span class="icon-star-empty">☆</span>'
            }
        }


	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

// const recipe = getRandomListEntry(recipes);
// console.log(recipeTemplate(recipe));

function renderRecipes(recipe) {
	// get the element we will output the recipes into
   const parent =  document.querySelector(".parent")
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    parent.innerHTML = recipeTemplate(recipe)
	// Set the HTML strings as the innerHTML of our output element.

}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes(recipe);
}
init();

const inputButton = document.querySelector(".search-button");
const inputSearch = document.querySelector(".search-input");

inputButton.addEventListener("click", searchHandler)

function searchHandler() {
    const query = inputSearch.value.trim().toLowerCase();
    const results = filterRecipes(query);
    console.log(results);
    return query;
}

function filterFunction(recipe) {
  return recipe.name.toLowerCase().includes(currentQuery); // filter by name
}

function filterRecipes(query) {
  return recipes
    .filter(recipe => recipe.name.toLowerCase().includes(query))
    .sort((a, b) => a.name.localeCompare(b.name));
}