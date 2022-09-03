let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  

    // Part 1
    let mainId = document.getElementById("main-title");
    
    mainId.innerHTML = `<h1>I'm Dom</h1>`;

    // Part 2
    let body = document.querySelector("body");

    body.style.backgroundColor = "lightgray";
  
    // Part 3
    let favoriteThings = document.getElementById("favorite-things");
    
    // favoriteThings.removeChild(favoriteThings.childNodes[5]);
     
    let list = favoriteThings.querySelectorAll("li");

    // console.log("this shows...", favoriteThings)

    // console.log("this shows...", list)
    
    list[5].remove();

    // console.log(favoriteThings)
    // console.log(list)


    // Part 4
    let specialTitle = document.getElementsByClassName("special-title")

    // console.log(specialTitle)

    // console.log("length of specialTitle...", specialTitle.length)

    for (let i = 0; i < specialTitle.length; i++) {
        specialTitle[i].style.fontSize = "2rem"
        // specialTitle[i].style.color = "blue"
    }

    // console.log(specialTitle)

    // Part 5​​

    let pastRaces = document.querySelectorAll("#past-races li")

    for (let i = 0; i < pastRaces.length; i++) {
        if (pastRaces[i].textContent == "Chicago") {
            pastRaces[i].remove()
        }
    }

    // console.log(pastRaces)
    
    // Part 6​

    let newLi = document.createElement("li")
    newLi.innerText = "Berlin"
    let past = document.getElementById("past-races")
    past.appendChild(newLi)

  
    // Part 7
    let blogPost = document.createElement("div")
    let h1 = document.createElement("h1")
    let p = document.createElement("p")
    blogPost.classList.add("blog-post", "purple")
    blogPost.appendChild(h1)
    blogPost.appendChild(p)
    h1.innerText = "Berlin"
    p.innerText = "I PLAYED FUSSBALL AGAINST FC FRANKFURT"

    let main = document.getElementsByClassName("main")
    // console.log(main[0])
    main[0].appendChild(blogPost)
    console.log(main[0])

    // Part 8
    let quoteTitle = document.querySelector("#quote-title")
    
    quoteTitle.addEventListener('click', randomQuote)



    // Part 9
    let allBlogs = document.querySelectorAll(".blog-post")

    // console.log(allBlogs)

    allBlogs.forEach(element => {
      element.addEventListener('mouseout', () => {
        element.classList.toggle("purple")
      })
      element.addEventListener('mouseenter', () => {
        element.classList.toggle("red");
      })
    })
  

  
  });