//
// ─── IPHONE VARIABLES ───────────────────────────────────────────────────────────
//
const phonesPower = document.querySelector('.phones__power')
const phonesScreen = document.querySelector('.phones__screen')
//
// ─── SONY VARIABLES ─────────────────────────────────────────────────────────────
//
const phonesPowerSony = document.querySelector('.phones__power--sony')
const phonesScreenSony = document.querySelector('.phones__screen--sony')
    
console.log(phonesPower, phonesScreen, phonesPowerSony, phonesScreenSony)

phonesPower.addEventListener('click', unlock)

phonesPowerSony.addEventListener('click', unlock(phonesScreenSony))

//
// ─── VOLUME ANIMATIONS??? ───────────────────────────────────────────────────────
//

// while(phonesScreen.classList.contains('active')){
//     phonesScreen.addEventListener()
// }

//
// ─── FUNCTIONS FOR BOTH PHONES CLASSES ──────────────────────────────────────────
//
    
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
