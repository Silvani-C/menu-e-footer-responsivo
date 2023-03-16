/*Formatação do btn toggle*/
    function toggkeMenu() {
    const menuToggle = document.querySelector('.menuTobble')
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

/*Formatação do btn pesquisar*/
  let inputBox = document.querySelector(".input-box"),
        searchIcon = document.querySelector(".search"),
        closeIcon = document.querySelector(".close");

    searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
    closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));

 
