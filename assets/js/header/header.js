document.querySelector('header').innerHTML = `
            <div class="wrapper">
            <div class="header--left">
                <img class="header--logo logo" src="../assets/img/header/Logo.png" alt="Website Logo">
            </div>
            <div class="header--right">
                <ul class="header__nav nav">
                    <li class="nav__link"><a href="index.html">Trang chủ</a></li>
                    <li class="nav__link"><a href="featured.html">Nổi bật</a></li>
                    <li class="nav__link"><a href="blog.html">Blog</a></li>
                    <li class="nav__link"><a href="contact.html">Liên hệ</a></li>
                </ul>
                <div class="header__input">
                    <div class="header__searchbox">
                        <input class="searchbox__input" type="text" placeholder="Tìm kiếm">
                        <div class="searchbox__button">
                            <img class="searchbox__img" src="../assets/img/header/icons8-search-144.png" alt="Search Icon">
                        </div>
                    </div>
                    <button class="header__login">
                        <img class="login__img" src="../assets/img/header/LoginButton-header.png" alt="Login Button">
                    </button>
                </div>
            </div>
        </div>
    `
document.querySelector('head').innerHTML += `
        <link rel="stylesheet" href="../assets/css/basic.css">
        <link rel="stylesheet" href="../assets/css/header/header.css">
`
setTimeout(() => {
    document.querySelector(".searchbox__input").style.transition = "all 0.2s linear";
}, 100);
const searchbox__input = document.querySelector('.searchbox__input');
searchbox__input.addEventListener('focus', function() {
    document.querySelector(".header__searchbox").style.background = "linear-gradient(to left, #F0721F 10%,#C2020B 90%)"
    document.querySelector(".header--right").style.gap = "30.82px"
    document.querySelector(".searchbox__input").style.width = "195px"
    document.querySelector(".searchbox__input").placeholder = "_______________________"
    document.querySelector(".searchbox__input").style.paddingLeft = "16px";
    document.querySelector(".searchbox__input").style.right = "0px"
    document.querySelector(".searchbox__input").style.color = "white"
    document.querySelector(".searchbox__input").style.left = "0px";
    document.querySelector(".header__searchbox").style.width = "250px"
});
searchbox__input.addEventListener('blur', function() {
    let value = document.querySelector(".searchbox__input").value
    if(value == "") {
        document.querySelector(".header--right").style.gap = "177.82px"
        document.querySelector(".searchbox__input").style.width = "55px"
        document.querySelector(".searchbox__input").style.paddingLeft = "12px";
        document.querySelector(".searchbox__input").placeholder = "Tìm kiếm"
        document.querySelector(".searchbox__input").style.right = "initial"
        document.querySelector(".header__searchbox").style.width = "103px"
        setTimeout(() => {
            console.log("run")
            document.querySelector(".header__searchbox").style.background = "linear-gradient(to left, #FFFFFF 10%,#FFFFFF 80%)"
        }, 1);
    }
});