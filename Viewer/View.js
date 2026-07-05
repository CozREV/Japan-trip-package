function UpdateView(){
    let html = ""

    if(appState.app.currentView === "Menu"){
        html = MenuView()
    }
    else if(appState.app.currentView === "Packing"){
        html = ViewPacking()
    }
    else if (appState.app.currentView === "Converter"){
        html = ViewConvert()
    }
    else if (appState.app.currentView === "Budget"){
        html = ViewBudget()
    }

    document.getElementById("main").innerHTML = html
    
    if (appState.app.currentView === "Packing"){
        initPackingBtns()
    }
}
