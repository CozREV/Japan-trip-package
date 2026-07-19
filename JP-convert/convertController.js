function initConvertBtns() {
    
    const swapBtn = document.getElementById("swap-btn")
    const fromCurrency = document.getElementById("from-currency")

    swapBtn.addEventListener("click", function(){
        appState.currency.swapped = !appState.currency.swapped
    
        UpdateView()
    })

    fromCurrency.addEventListener("change", function(){
        let selected = fromCurrency.value
        appState.currency.selected = selected
        getRate(selected)
    })
}

async function getRate(currencyCode) {
    let response = await fetch(`https://api.frankfurter.dev/v2/rate/${currencyCode}/JPY`)
    let data = await response.json()

    appState.currency.rate = data.rate

    UpdateView()
}