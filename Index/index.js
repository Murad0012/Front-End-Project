const english = document.getElementById("english")
const languages = document.getElementById("languages")
const englishArrow = document.getElementById("english-arrow")
const usd = document.getElementById("usd")
const money = document.getElementById("money")
const usdArrow = document.getElementById("usd-arrow")
let upEnglish = true;
let upUSD = true;

english.onclick = function(){
    if(upEnglish && !upUSD || upEnglish){
        languages.style.display = "flex"
        englishArrow.style.rotate = "-180deg"
        upEnglish = false
        
        if(upUSD === false){
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

        if(upEnglish === false){
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