//
// ─── VARIABLES ───────────────────────────────────────────────────────────
//
const phonesPower = document.querySelector('.phones__power')
const phonesScreen = document.querySelector('.phones__screen')
const phonesPowerSony = document.querySelector('.phones__power--sony')
const phonesScreenSony = document.querySelector('.phones__screen--sony')
const burger = document.querySelector('.burger')
    
console.log(phonesPower, phonesScreen, phonesPowerSony, phonesScreenSony)

phonesPower.addEventListener('click', unlock)

phonesPowerSony.addEventListener('click', unlockSony)

burger.addEventListener('click', open)

//
// ─── FUNCTIONS FOR BOTH PHONES CLASSES ──────────────────────────────────────────
//

function open(){
    if(burger.classList.contains('active')){

    }
}
    
function unlock(){
    if(phonesScreen.classList.contains('active')){
        phonesScreen.classList.remove('active')
        console.log(phonesScreen.classList)
    }
    else{
        phonesScreen.classList.add('active')
        console.log(phonesScreen.classList)
    }
}

function unlockSony(){
    if(phonesScreenSony.classList.contains('active')){
        phonesScreenSony.classList.remove('active')
    }
    else{
        phonesScreenSony.classList.add('active')
    }
}
