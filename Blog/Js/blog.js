const english = document.getElementById("english")
const languages = document.getElementById("languages")
const englishArrow = document.getElementById("english-arrow")

const usd = document.getElementById("usd")
const money = document.getElementById("money")
const usdArrow = document.getElementById("usd-arrow")

let upEnglish = true;
let upUSD = true;

english.onclick = function (){
    if(upEnglish){
        languages.style.display = "flex"
        englishArrow.style.rotate = "-180deg"
        upEnglish = false
        
        if(!upUSD){
            money.style.display = "none"
            usdArrow.style.rotate = "0deg"
            upUSD = true;
        }
    }
    else{
        languages.style.display = "none"
        englishArrow.style.rotate = "0deg"
        upEnglish = true;
    }
}

usd.onclick = function(){
    if(upUSD){
        money.style.display = "flex"
        usdArrow.style.rotate = "-180deg"
        upUSD = false

        if(!upEnglish){
            languages.style.display = "none"
            englishArrow.style.rotate = "0deg"
            upEnglish = true;
        }
    }
    else{
        money.style.display = "none"
        usdArrow.style.rotate = "0deg"
        upUSD = true;
    }
}

const home = document.getElementById("home")
const homeList = document.getElementById("home-list")
const homeArrow = document.getElementById("home-arrow")

let homeOpen = true

home.onclick = function(){
    if(homeOpen){
        homeList.style.display = "flex"
        homeArrow.style.rotate = "-180deg"
        homeOpen = false
    }
    else{
        homeList.style.display = "none"
        homeArrow.style.rotate = "0deg"
        homeOpen = true;
    }      
}

const docs = document.getElementById("docs")
const docsList = document.getElementById("docs-list")
const docsArrow = document.getElementById("docs-arrow")

let docsOpen = true

docs.onclick = function(){
    if(docsOpen){
        docsList.style.display = "flex"
        docsArrow.style.rotate = "-180deg"
        docsOpen = false
    }
    else{
        docsList.style.display = "none"
        docsArrow.style.rotate = "0deg"
        docsOpen = true;
    }      
}

const shop = document.getElementById("shop")
const shopList = document.getElementById("shop-list")
const shopArrow = document.getElementById("shop-arrow")

let shopOpen = true

shop.onclick = function(){
    if(shopOpen){
        shopList.style.display = "flex"
        shopArrow.style.rotate = "-180deg"
        shopOpen = false
    }
    else{
        shopList.style.display = "none"
        shopArrow.style.rotate = "0deg"
        shopOpen = true;
    }      
}

const page = document.getElementById("page")
const pageList = document.getElementById("pages")
const pageArrow = document.getElementById("page-arrow")

let pageOpen = true

page.onclick = function(){
    if(pageOpen){
        pageList.style.display = "flex"
        pageArrow.style.rotate = "-180deg"
        pageOpen = false
    }
    else{
        pageList.style.display = "none"
        pageArrow.style.rotate = "0deg"
        pageOpen = true;
    }      
}


const icon = document.getElementById("icon")
const iconList = document.getElementById("icon-list")
const iconArrow = document.getElementById("icon-arrow")

let iconOpen = true

icon.onclick = function(){
    if(iconOpen){
        iconList.style.display = "flex"
        iconArrow.style.rotate = "-180deg"
        iconOpen = false
    }
    else{
        iconList.style.display = "none"
        iconArrow.style.rotate = "0deg"
        iconOpen = true;
    }      
}

const list = document.getElementById("dropdown-list")
const dropDown = document.getElementById("dropdown")
const dropArrow = document.getElementById("dropdown-arrow")

let dropDownOpen = true


dropDown.onclick = function (){
    if(dropDownOpen){
        list.style.height = "100px"
        dropArrow.style.rotate = "-180deg"
        dropDownOpen = false
    }
    else{
        list.style.height = "0px"
        dropArrow.style.rotate = "0deg"
        dropDownOpen = true;
    }      
}

const navbar = document.getElementById("navbar")
const navbarList = document.getElementById("navbar-list")
const close = document.getElementById("close-icon")


navbar.onclick = function (){
    navbarList.style.transform = "translateX(0px)"
}

close.onclick = function (){
    navbarList.style.transform = "translateX(300%)"
}

