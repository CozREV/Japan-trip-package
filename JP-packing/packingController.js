function initPackingBtns(){

    const addBtn = document.getElementById("AddBtn")
    const removeBtn = document.getElementById("RemoveBtn")
    const cancel = document.getElementById("cancel")
    const confirm = document.getElementById("confirm")
    const tableCon = document.getElementById("table-container")

    addBtn.addEventListener("click", function(){
        document.getElementById("popup-overlay").classList.remove("hidden")
    })

    cancel.addEventListener("click", function(){
        document.getElementById("popup-overlay").classList.add("hidden")
    })

    confirm.addEventListener("click", function(){
        const addList = {
            name: document.getElementById("popup-name").value,
            quantity: Number(document.getElementById("popup-quantity").value),
            weight: Number(document.getElementById("popup-weight").value),
            unit: document.getElementById("popup-unit").value,
            hasPacked: document.getElementById("popup-packed").checked
        }

        appState.packing.items.push(addList)

        UpdateView()
    })
    
    removeBtn.addEventListener("click", function(){
        appState.app.deleteMode = !appState.app.deleteMode

        UpdateView()
    })

    tableCon.addEventListener("click", function(e){
        let row = e.target.closest("tr")

        if(appState.app.deleteMode === true){
            let index = Number(row.dataset.index)
            appState.packing.items.splice(index, 1)
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
