import {} from '../assets/scss/fonts.scss'
import {} from "../assets/css/reset.css";
import {} from "../assets/scss/general.scss";
import {} from "../assets/scss/auth/auth.scss";
import {checkbox} from '../js/ts/auth/checkbox'
import {hiddenPass} from '../js/ts/auth/hiddenPass'


document.addEventListener('DOMContentLoaded', (e) => {
    checkbox('.auth__checkbox', '.auth__img-checkbox')
    hiddenPass('.password-visible', 'input[type="password"]')
})