const footer = document.querySelector("footer");
footer.innerHTML = `
        <div class="footer__container">
            <div class="wrapper">
                <div class="logo">
                    <img class="logo__shadow" src="assets/img/footer/LogoBlur.png" alt="">
                    <img class="logo__main" src="assets/img/footer/logo.png" alt="">
                </div>
                <div class="footer__buttons">
                    <div class="buttons--top">
                        <a class="button">Trang chủ</a>
                        <a class="button">Nổi bật</a>
                    </div>
                    <div class="buttons--bottom">
                        <a class="button">Blog</a>
                        <a class="button">Liên hệ</a>
                    </div>
                </div>
                <div class="contact">
                    <label for="" class="contact__title">Liên hệ chúng tôi tại:</label>
                    <div class="contact__mail">
                        <img src="assets/img/footer/IconMail.png" alt="">
                        <span>mailexample@gmail.com</span>
                    </div>
                    <div class="contact__phone">
                        <img src="assets/img/footer/IconPhone.png" alt="">
                        <span>+099. 990888223</span>
                    </div>
                </div>
            </div>
            <div class="footer__copyright">Copyright © 2024 by WeBee Team</div>
        </div>
`
// link footer.css
document.querySelector('head').innerHTML += `
        <link rel="stylesheet" href="../assets/css/footer.css">
        `