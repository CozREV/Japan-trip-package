function ViewPacking(){
    let rows = appState.packing.items.map((item, index) => /*html*/ `
        <tr data-index="${index}">
            <td contenteditable="true" class="itemList">${item.name}</td>
            <td contenteditable="true" class="itemList">${item.quantity}</td>
            <td contenteditable="true" class="itemList">${item.weight}</td>
            <td contenteditable="true" class="itemList">${item.hasPacked}</td>
        </tr>
        `).join("")

        return /*html*/ `
        <section id="wrapper" class="${appState.app.deleteMode ? "deleteMode" : ""}">
            <div id="table-container">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Weight</th>
                        <th>Packed</th>
                    </tr>
                    ${rows}
                </table>
            </div>
            <div id="AddRemoveBtns">
                <button class="AddRemove-btn" id="AddBtn">Add row</button>
                <button class="AddRemove-btn" id="RemoveBtn">Remove row</button>
            </div>
        </section>
        ${ViewPopup()}
            `
}

function ViewPopup(){
    return /*html*/ `
        <div id="popup-overlay" class="hidden">
            <div id="popup-sheet">
                <table> 
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Weight</th>
                        <th>Packed</th>
                    </tr>
                    <tr>
                        <td><input type="text" id="popup-name"></td>
                        <td><input type="number" id="popup-quantity"></td>
                        <td><input type="number" id="popup-weight"></td>
                        <td><input type="checkbox" id="popup-packed"></td>
                    </tr>
                </table>
                <button class="popup-btn" id="confirm">Add</button>
                <button class="popup-btn" id="cancel">Cancel</button>
            </div>
        </div>
    `
}

