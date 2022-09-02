import {} from '../assets/scss/fonts.scss'
import {} from "../assets/css/reset.css";
import {} from "../assets/scss/general.scss";
import {} from "../assets/scss/tournament/table.scss";
import {} from "../assets/scss/main/table.scss";
import {} from "../assets/scss/main/main.scss";
import {} from "../assets/scss/main/popup.scss";
import {upload} from './ts/main/upload'
import {btns} from './ts/main/btns'
import {popup} from './ts/popup'

document.addEventListener('DOMContentLoaded', (e) => {
    upload()
    popup('.main__btn-create', '.popup-accredit', '.popup__close')
    btns('.sex-button')
})