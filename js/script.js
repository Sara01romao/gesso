
//MENU

openMenu.addEventListener("click", function(){

    document.getElementById("navMobile").classList.remove("navNone");
    document.getElementById("openMenu").style.display="none";
    document.getElementById("closeMenu").classList.remove("close")
});

closeMenu.addEventListener("click", function(){

    document.getElementById("navMobile").classList.add("navNone");
    document.getElementById("openMenu").style.display="block";
    document.getElementById("closeMenu").classList.add("close")
})


