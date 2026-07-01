function ViewList(){
    let html = items.map(item => /*html*/ `
        <table>
            <tr>
                <td class="itemList">${item.name}</td>
                <td class="itemList">${item.quantity}</td>
                <td class="itemList">${item.hasPacked}</td>
            </tr>
        </table>
        `).join("")

    return `<ul>${html}</ul>`
}

document.getElementById("main").innerHTML = ViewList()

