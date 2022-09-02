import {} from '../assets/scss/fonts.scss'
import {} from "../assets/css/reset.css";
import {} from "../assets/scss/general.scss";
import {} from "../assets/scss/tournament/table.scss";
import {} from "../assets/scss/accredit/accredit.scss";
import {} from "../assets/scss/accredit/popup.scss";
import {thArrow} from './ts/table/thArrow';
import {popup} from './ts/popup'
import {upload} from './ts/main/upload'
import {btns} from './ts/main/btns'


document.addEventListener('DOMContentLoaded', (e) => {
    thArrow('.table-th')
    upload()
    popup('#ic_edit', '.popup-accredit', '.popup__close')
    btns('.sex-button')

})