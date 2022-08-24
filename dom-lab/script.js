// alert("test")

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector("main")
console.log(mainEl)

mainEl.style.backgroundColor = "var(--main-bg)"

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

mainEl.classList.add("flex-ctr") // mainEl.setAttribute("class", "flex-ctr")

let topMenuEl = document.getElementById("top-menu")
console.log(topMenuEl)

topMenuEl.style.height = "100%"

topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

topMenuEl.classList.add("flex-around")

for (let i = 0; i < menuLinks.length; i++) {
    var a = document.createElement('a')
    a.setAttribute("href", "menuLinks[i].href")
    console.log(a)
    a.textContent = `${menuLinks[i].text}`
    topMenuEl.append(a)
}