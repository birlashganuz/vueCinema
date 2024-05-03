import React from 'react'
import google_play from '../assets/images/google_play.svg'
import app_store from '../assets/images/app_store.svg'

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="container">
                    <div class="footer__box">
                        <div class="footer__left">
                            <a href="#!" class="footer__link"><img src={google_play} alt="" /></a>
                            <a href="#!" class="footer__link"><img src={app_store} alt="" /></a>
                        </div>
                        <p class="footer__text">© PROWEB. В целях обучения 2021</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer