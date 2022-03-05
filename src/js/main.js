function openNav() {
    const sideBar = document.getElementById("mySidebar");
    if (sideBar.style.width == '250px')
    {
        sideBar.style.width = '0px';
    }
    else 
    {
        sideBar.style.width = '250px';
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function hideSub(){
    let x = document.getElementById("subTable");
    if (x.style.display === "block") {
      x.style.display = "none";
    } 
  }
  function showSub() {
    let x = document.getElementById("subTable");
    x.style.display = "block"
    
  }