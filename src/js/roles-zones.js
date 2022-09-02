import {} from '../assets/scss/fonts.scss'
import {} from "../assets/css/reset.css";
import {} from "../assets/scss/general.scss";
import {} from "../assets/scss/roles-zones/roles-zones.scss";
import {editSection} from './ts/roles-zones/editSection'


document.addEventListener('DOMContentLoaded', (e) => {
    editSection('.zones__save', '.zone-card')
})