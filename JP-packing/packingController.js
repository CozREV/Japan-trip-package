function initPackingBtns(){

    const addBtn = document.getElementById("AddBtn")
    const removeBtn = document.getElementById("RemoveBtn")

    addBtn.addEventListener("click", function(){
        const addList = {
            name: "",
            quantity: 0,
            weight: 0,
            hasPacked: false
        }
    
        appState.packing.items.push(addList)
    
        UpdateView();
    })
    
    removeBtn.addEventListener("click", function(){
    
    })
}
