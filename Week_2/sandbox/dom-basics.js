const newParagraph = document.createElement('p');
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);



const imageOne = document.createElement('img');
imageOne.setAttribute("src", "https://picsum.photos/200");
imageOne.setAttribute("alt", "Random image from picsum.")
document.body.appendChild(imageOne);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);


const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "DOM Basics";
const newParagraphTwo = document.createElement("p");
newParagraphTwo.innerText = "This was added through Javascript";
newSection.appendChild(newH2);
newSection.appendChild(newParagraphTwo);

document.body.appendChild(newSection);
