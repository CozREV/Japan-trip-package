function ViewConvert() {
    let currency = appState.currency.convert.map(convert => /*HTML*/ `
        <option value="${convert.iso_code}" ${convert.iso_code === appState.currency.selected ? "selected" : ""}>${convert.name}</option>
        `).join("")

    let currencyBubble = /*HTML*/ `
        <div id="currency-con" class="pop-bubble con-bubble">
            <select id="from-currency">${currency}</select>
            <input type="number" id="currency-amount">
        </div>
    `

    let yenBubble = /*HTML*/ `
        <div id="yen-con" class="pop-bubble con-bubble">
            <span id="jpy-label">JPY</span>
            <input type="number" id="yen-amount">
        </div>
    `

    return /*HTML*/ `
    <section id="wrap-convert">
        <div id="converter">
            <div id="conversion-row">
                ${appState.currency.swapped ? yenBubble : currencyBubble}
                <button id="swap-btn"><i class="fa-solid fa-right-left"></i></button>
                ${appState.currency.swapped ? currencyBubble : yenBubble}
            </div>
            <div id="result"></div>
        </div>
    </section>
    `
}

async function getCurrencies() {
    let response = await fetch("https://api.frankfurter.dev/v2/currencies")
    let data = await response.json()

    appState.currency.convert = data
    
    UpdateView()
}