// document to acces the DOM

// document object has methods we can use to traverse the DOM
// one method is called getElementById


let h1Tag = document.getElementById("title")


// h1Tag is an element modelled as an object
// it has a BUNCH of properties we can access
// with dot notation

// select an element by its tag name (p)
let pTag = document.querySelector(".p-tag")

// select an element by its class name ("main-title")
// let pTag = document.querySelector(".main-title")

// select an element by its id name ("title")
// let pTag = document.querySelector("#title")

// let pEl = document.querySelector(".cool")

// console.log(pEl)

// console.log(pTag)

// console.dir(h1Tag)

// console.log(h1Tag.innerText)

// gives us everything inside the tag, including HTML tags
console.log(pTag.innerHTML)

// gives us only the text inside the tag
console.log(pTag.textContent)

console.dir(pTag)
// console.log(pTag.innerText)

h1Tag.style.textAlign = "center"

pTag.style.color = "blue"

let aTag = document.querySelector("a")

aTag.setAttribute("href","https://www.google.com")

// pTag.setAttribute("class", "my-special-class-name")

console.log(pTag.classList)

// selecting multiple elements by tag name
let liTags = document.getElementsByTagName("li")
console.log("by TagName method: ", liTags)

// selecting multiple elements by class name
let liTags2 = document.getElementsByClassName("comment")
console.log("by ClassName method:" , liTags2)

// selecting multiple elements by whatever you like
let liTags3 = document.querySelectorAll(".comment")
console.log("by QuerySelectorAll method:", liTags3)

let marioTag = document.querySelector("mario")
console.log("the mario tag...", marioTag)
// we can iterate over our array of elements
// (HTMLCollection or NodeList)

// with a for of loop...
// for (let li of liTags3) {
//     console.log(li)
// }
// console.log("looping for of...")

// with a regular for loop...
// for (let i = 0; i < liTags3.length; i++) {
//     console.log(liTags3[i])
// }
// console.log("looping regular for...")

// with a forEach array method
// liTags3.forEach((element) => console.log(element))
// console.log("looping forEach...")

// exercise/practice
for (let li of liTags) {
    li.style.fontSize = "30px";
}


/*

REVIEW:

There is a special document keyword (represents the DOM)

We can use methods to select specific elements:
    - getElementByID
    - querySelector

Access the text and innerHTML of an element with:
    - textContent
    - innerHTML

The style property (object) can be used to make changes in CSS:
    - style

It has a bunch of properties that represent CSS Properties for that element
    - color
    - backgroundColor
    - textAlign

*/






































/*
    Open in Browser
    - Click on index.html file
    - Hold down Alt + B
    - Or right click HTML file and select "Open in Browser"

    Live Server
    - Click on the "Go Live" button at the bottom blue 


*/