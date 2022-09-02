import React from "react";
import ReactDOM from "react-dom";
import {Select} from './components/Select';
import {zones} from './ts/roles/zones';
import {handlePage} from './ts/accredit-edit/index';
import {styleBagick} from './ts/accredit-edit/styleBagick';
import {days} from './ts/accredit-edit/days';
import {popup} from './ts/popup'
import { colors } from './ts/roles/colors';

import {} from '../assets/scss/fonts.scss'
import {} from "../assets/css/reset.css";
import {} from "../assets/scss/general.scss";
import {} from "../assets/scss/accredit-edit/accredit-edit.scss";
import {} from "../assets/scss/roles/popup.scss";
import {} from "../assets/scss/accredit-edit/popup.scss";

const arrayRole = ['Player doctor','Player','Coach','Manager', 'Player’s masseur']
const arrayStatus = ['Неаккредитован', 'Верификация']
const arrayZones = [
    "ITF Event Manager - ITF EM",
    "ITF Photographer - ITF Ph",
    "ITF Event Manager - ITF EM",
    "ITF Event Manager - ITF EM",
    "ITF Event Manager - ITF EM",
    "ITF President - ITF Pr",
    "ITF Event Manager - ITF EM",
    "ITF Event Manager - ITF EM",
  ]

document.addEventListener("DOMContentLoaded", (e) => {

    ReactDOM.render(<Select selectCurrent='Backend' selectItems={arrayRole} color={false} isAddNewRole={true} changeRoleSvg={true}/>, document.querySelector("#select-react"));
    ReactDOM.render(<Select selectCurrent='Аккредитован' selectItems={arrayStatus} color={true}/>, document.querySelector("#status-react"));
    ReactDOM.render(<Select selectCurrent='KTF - KTF' selectItems={arrayZones} color={true} isSearch={true}/>, document.querySelector("#zones-react"));
    zones('.zones__item-wrapper')
    handlePage('.settings__btn', '.create-status', '.zones-react', '.number')
    popup('.create-status__wrapper', '.popup-new-role', '.popup__close')
    popup('.accredit-card__style-btn', '.popup-style', '.popup__close')
    colors('.colors__item-wrapper', '#color')
    styleBagick('.cards__content')
    days('.day__wrapper')
});