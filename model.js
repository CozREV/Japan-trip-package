const appState = {
    app: {  currentView: "Menu", 
            deleteMode: false,
            editIndex: null,
            popupOpen: false
        },
    packing: { items: [] },
    budget: { expenses: [ ] },
    currency: { convert: [],
                selected: "USD",
                rate: 0,
                swapped: false
            }
}