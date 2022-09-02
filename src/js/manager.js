import {} from '../assets/scss/fonts.scss'
import {} from "../assets/css/reset.css";
import {} from "../assets/scss/general.scss";
import {} from "../assets/scss/tournament/table.scss";
import {} from "../assets/scss/manager/manager.scss";
import {} from "../assets/scss/manager/popup.scss";
import {thArrow} from './ts/table/thArrow';
import {popup} from './ts/popup'


document.addEventListener('DOMContentLoaded', (e) => {
    thArrow('.table-th')
    popup('#ic_edit', '.popup-detalis', '.popup__close')
    popup('.new-tournament__btn-create', '.popup-manager', '.popup__close')
})