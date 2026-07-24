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
        appState.currency.currencyValue = amount
        let converted = amount * appState.currency.rate
        let display = Number.isInteger(converted) ? converted : converted.toFixed(2)
        
        yenAmount.value = display
        appState.currency.yenValue = display
    })

    currencyAmount.addEventListener("input", function(){
        let amount = Number(currencyAmount.value)
        appState.currency.currencyValue = amount
        let converted = amount * appState.currency.rate
        let display = Number.isInteger(converted) ? converted : converted.toFixed(2)


        yenAmount.value = display
        appState.currency.yenValue = display
    })

    yenAmount.addEventListener("input", function(){
        if (appState.currency.rate === 0) return

        let amount = Number(yenAmount.value)
        appState.currency.yenValue = amount
        let converted = amount / appState.currency.rate
        let display = Number.isInteger(converted) ? converted : converted.toFixed(2)


        currencyAmount.value = display
        appState.currency.currencyValue = display
    })
}

async function getRate(currencyCode) {
    let response = await fetch(`https://api.frankfurter.dev/v2/rate/${currencyCode}/JPY`)
    let data = await response.json()

    appState.currency.rate = data.rate
}