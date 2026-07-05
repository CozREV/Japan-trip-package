function ViewPacking(){
    let rows = appState.packing.items.map(item => /*html*/ `
        <tr>
            <td contenteditable="true" class="itemList">${item.name}</td>
            <td contenteditable="true" class="itemList">${item.quantity}</td>
            <td contenteditable="true" class="itemList">${item.weight}</td>
            <td contenteditable="true" class="itemList">${item.hasPacked}</td>
        </tr>
        `).join("")

        return /*html*/ `
            <table>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Weight</th>
                    <th>Packed</th>
                </tr>
                ${rows}
            </table>
            <div id="AddRemoveBtns">
                <button class="AddRemove-btn" id="AddBtn">Add row</button>
                <button class="AddRemove-btn" id="RemoveBtn">Remove row</button>
            </div>
            `
}

