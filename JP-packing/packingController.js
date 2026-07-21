function initPackingBtns(){

    const addBtn = document.getElementById("AddBtn")
    const removeBtn = document.getElementById("RemoveBtn")
    const cancel = document.getElementById("cancel")
    const confirm = document.getElementById("confirm")
    const tableCon = document.getElementById("table-container")

    addBtn.addEventListener("click", function(){
        appState.app.editIndex = null
        appState.app.popupOpen = true
        UpdateView()
    })

    cancel.addEventListener("click", function(){
        appState.app.popupOpen = false
        UpdateView()
    })

    confirm.addEventListener("click", function(){
        const addList = {
            name: document.getElementById("popup-name").value,
            quantity: Number(document.getElementById("popup-quantity").value),
            weight: Number(document.getElementById("popup-weight").value),
            unit: document.getElementById("popup-unit").value,
            hasPacked: document.getElementById("popup-packed").checked
        }

        if (appState.app.editIndex === null){
            appState.packing.items.push(addList)
        } else {
            appState.packing.items[appState.app.editIndex] = addList
        }

        appState.app.popupOpen = false
        UpdateView()
    })
    
    removeBtn.addEventListener("click", function(){
        appState.app.deleteMode = !appState.app.deleteMode

        UpdateView()
    })

    tableCon.addEventListener("click", function(e){
        let row = e.target.closest("tr")
        
        if (!row) return
        if (row.dataset.index === undefined) return

        if(appState.app.deleteMode === true){
            let index = Number(row.dataset.index)
            appState.packing.items.splice(index, 1)
        } else {
            let index = Number(row.dataset.index)
            appState.app.editIndex = index

            document.getElementById("popup-name").value = appState.packing.items[index].name
            document.getElementById("popup-quantity").value = appState.packing.items[index].quantity
            document.getElementById("popup-weight").value = appState.packing.items[index].weight
            document.getElementById("popup-unit").value = appState.packing.items[index].unit
            document.getElementById("popup-packed").checked = appState.packing.items[index].hasPacked

            appState.app.popupOpen = true
        }

        UpdateView()
    })
}

function GetTotalWeight(){
    let total = 0

    for (let i = 0; i < appState.packing.items.length; i++){
        total += appState.packing.items[i].weight
    }
    return total

}

function GetTotalItems(){
    let items = 0

    for(let i = 0; i < appState.packing.items.length; i++){
        items += appState.packing.items[i].quantity
    }
    return items
}
