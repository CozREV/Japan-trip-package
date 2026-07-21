function initConvertBtns() {
    getRate(appState.currency.selected)

    const swapBtn = document.getElementById("swap-btn")
    const fromCurrency = document.getElementById("from-currency")
    const currencyAmount = document.getElementById("currency-amount")
    const yenAmount = document.getElementById("yen-amount")

    swapBtn.addEventListener("click", function(){
        appState.currency.swapped = !appState.currency.swapped
    
        UpdateView()
    })

    fromCurrency.addEventListener("change", async function(){
        let selected = fromCurrency.value
        appState.currency.selected = selected
        await getRate(selected)

        let amount = Number(currencyAmount.value)
        let converted = amount * appState.currency.rate
        yenAmount.value = converted
    })

    currencyAmount.addEventListener("input", function(){
        let amount = Number(currencyAmount.value)
        let converted = amount * appState.currency.rate

        yenAmount.value = converted
    })

    yenAmount.addEventListener("input", function(){
        let amount = Number(yenAmount.value)
        let converted = amount / appState.currency.rate

        currencyAmount.value = converted
    })
}

async function getRate(currencyCode) {
    let response = await fetch(`https://api.frankfurter.dev/v2/rate/${currencyCode}/JPY`)
    let data = await response.json()

    appState.currency.rate = data.rate
}