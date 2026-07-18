function ViewConvert() {
    let currency = appState.currency.convert.map(convert => /*HTML*/ `
        <option value="${convert.iso_code}">${convert.name}</option>
        `).join("")

    return /*HTML*/ `
    <section id="wrap-convert">
        <div id="converter">
            <div id="conversion-row">
                <div id="left-con" class="con-bubble">
                    <select id="from-currency">${currency}</select>
                    <input type="number" id="from-amount">
                </div>
                <div id="right-con" class="con-bubble">
                    <span id="jpy-label">JPY</span>
                    <input type="number" id="to-amount">
                </div>
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