import {} from '../assets/scss/fonts.scss'
import {} from "../assets/css/reset.css";
import {} from "../assets/scss/general.scss";
import {} from "../assets/scss/tournament/table.scss";
import {} from "../assets/scss/manager/manager.scss";
import {} from "../assets/scss/roles/roles.scss";
import {} from "../assets/scss/roles/popup.scss";
import {popup} from './ts/popup'
import {thArrow} from './ts/table/thArrow';
import {zones} from './ts/roles/zones';
import { colors } from './ts/roles/colors';

document.addEventListener('DOMContentLoaded', (e) => {
    thArrow('.table-th')
    zones('.zones__item-wrapper')
    colors('.colors__item-wrapper', '#color')
    popup('.roles-btn', '.popup-new-role', '.popup__close')
    popup('#ic_edit', '.popup-edit-role', '.popup__close')
 
})