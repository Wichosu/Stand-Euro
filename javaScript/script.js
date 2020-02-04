const phonesPower = document.querySelector('.phones__power')
const phonesScreen = document.querySelector('.phones__screen')

console.log(phonesPower, phonesScreen)

phonesPower.addEventListener('click', unlock)

while(phonesScreen.classList.contains('active')){
    phonesScreen.addEventListener()
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
