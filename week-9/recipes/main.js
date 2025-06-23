import recipes from './recipes.mjs';

function randomNumber() {
const randomNum = Math.floor(Math.random()*5);
 return randomNum;
}
// console.log(randomNumber());

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}


console.log(getRandomListEntry(recipes));

function recipeTemplate(recipe) {
	return `<figure class="recipe">
	<img src="images/apple-crisp.jpg" alt="image of apple crisp on a plate" />
	<figcaption>
		<ul class="recipe__tags">
			<li>Dessert</li>
			<li>Fruit</li>
		</ul>
		<h2><a href="#">Apple Crisp</a></h2>
		<p class="recipe__ratings">
			<span
				class="rating"
				role="img"
				aria-label="Rating: 3 out of 5 stars"
			>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star-empty">☆</span>
			</span>
		</p>
		<p class="recipe__description">
			This apple crisp recipe is a simple yet delicious fall dessert
			that's great served warm with vanilla ice cream.
		</p>
</figcaption>
</figure>`;
}