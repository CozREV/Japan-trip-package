function ViewPacking(){
    let rows =  appState.packing.items.length === 0
        ? `<tr><td colspan="4">No items here. Add items below.</td></tr>` 
        : appState.packing.items.map((item, index) => /*html*/ `
        <tr data-index="${index}">
            <td class="itemList">${item.name}</td>
            <td class="itemList">${item.quantity}</td>
            <td class="itemList">${item.weight} ${item.unit}</td>
            <td class="itemList">${item.hasPacked}</td>
        </tr>
        `).join("")

        return /*html*/ `
        <section id="wrapper" class="${appState.app.deleteMode ? "deleteMode" : ""}">
            <div id="EveryTotal">
                <table>
                    <tr>
                        <th>Total Quantity</th>
                        <th>Total Weight</th>
                    </tr>
                    <tr>
                        <td>${GetTotalItems()}</td>
                        <td>${GetTotalWeight()}</td>
                    </tr>
                </table>
            </div>
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
    let editItem = appState.app.editIndex === null ? null :
                    appState.packing.items[appState.app.editIndex]
    return /*html*/ `
        <div id="popup-overlay" class="${appState.app.popupOpen ? "" : "hidden"}">
            <div id="popup-sheet">
                <table> 
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Weight</th>
                        <th>Packed</th>
                    </tr>
                    <tr>
                        <td class="pop-bubble"><input type="text" id="popup-name" 
                                                        value="${editItem ? editItem.name : ""}"></td>
                        <td class="pop-bubble"><input type="number" id="popup-quantity" 
                                                        value="${editItem ? editItem.quantity : ""}"></td>
                        <td class="pop-bubble"><input type="number" id="popup-weight" 
                                                        value="${editItem ? editItem.weight : ""}">
                            <select id="popup-unit">
                                <option value="kg" ${editItem && editItem.unit === "kg" ? "selected" : ""}>kg</option>
                                <option value="lbs" ${editItem && editItem.unit === "lbs" ? "selected" : ""}>lbs</option>
                            </select>
                        </td>
                        <td class="pop-bubble"><input type="checkbox" id="popup-packed" ${editItem && editItem.hasPacked ? "checked" : ""}></td>
                    </tr>
                </table>
                <button class="popup-btn" id="confirm">${appState.app.editIndex === null ? "Add" : "Save"}</button>
                <button class="popup-btn" id="cancel">Cancel</button>
            </div>
        </div>
    `
}

