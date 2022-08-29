// alert("test")

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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
    a.setAttribute("href", menuLinks[i].href)
    a.textContent = `${menuLinks[i].text}`
    // console.dir(a)
    topMenuEl.appendChild(a)
}

// Task 4.0
let subMenuEl = document.getElementById("sub-menu")


// Task 4.1
subMenuEl.style.height = "100%"


// Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'


// Task 4.3
subMenuEl.classList.add("flex-around")


// Task 4.4
subMenuEl.style.position = 'absolute'


// Task 4.5
subMenuEl.style.top = '0'


// Task 5.1
let topMenuLinks = document.getElementsByTagName("a")
// console.log("top menu <a> elements...", topMenuLinks)

let showingSubMenu = false;


// Task 5.2
topMenuEl.addEventListener('click', function(event) {
  
  event.preventDefault()
  let target = event.target
  console.log(target)
  if (target.tagName != 'A') {
    return
  }
  if (target.classList.contains('active')) {
    target.classList.remove('active')
    showingSubMenu = false
    subMenuEl.style.top = '0'
    return
  }
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove('active')
  }
  target.classList.add('active')

  var links
  for (let i = 0; i < menuLinks.length; i++) {
    if (menuLinks[i].text == target.textContent) {
      links = menuLinks[i]
      console.log('link shows...', links)
      if ('subLinks' in menuLinks[i]){
        showingSubMenu = true
      } else {
        showingSubMenu = false
      }
    }
  }
  console.log(showingSubMenu)

  if (showingSubMenu) {
    buildSubMenu(links)
    subMenuEl.style.top = "100%"
  } else {
    mainEl.innerHTML = `<h1>${target.textContent}</h1>`
    subMenuEl.style.top = "0"
  }
})


function buildSubMenu (takesLinks) {
  subMenuEl.textContent = ""
  for (let i = 0; i < takesLinks.subLinks.length; i++) {
    var a = document.createElement('a')
    a.setAttribute('href', takesLinks.subLinks[i].href)
    a.textContent = `${takesLinks.subLinks[i].text}`
    subMenuEl.appendChild(a)
  }

  console.log('sub menu shows...', subMenuEl)

}

subMenuEl.addEventListener('click', function(event) {

  event.preventDefault()
  let target = event.target
  console.log("testing subMenuEl <a>...", target)
  if (target.tagName != 'A') {
    return
  }

  showingSubMenu = false
  subMenuEl.style.top = '0'

  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove('active')
  }

  mainEl.innerHTML = `<h1>${target.textContent}</h1>`
})