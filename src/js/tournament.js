import React from "react";
import ReactDOM from "react-dom";
// import { App } from "./App.tsx";
import {} from '../assets/scss/fonts.scss'
import {} from "../assets/css/reset.css";
import {} from "../assets/scss/general.scss";
import {} from "../assets/scss/tournament/content.scss";
import {} from "../assets/scss/tournament/card-user.scss";
import {} from "../assets/scss/tournament/table.scss";
import {} from "../assets/scss/tournament/popup.scss";
import {EditorPhoto} from './components/EditorPhoto';
import {createTournament} from './ts/tournament/createTournament'
import {btns} from './ts/tournament/btns'

import {popup} from './ts/popup'
import {thArrow} from './ts/table/thArrow';



document.addEventListener("DOMContentLoaded", (e) => {
  ReactDOM.render(<EditorPhoto />, document.querySelector("#section-card"));
  createTournament('.new-tournament__btn-create',['.new-tournament__title', '.basic-data', '.card-user'], '.tournament-search', '.new-tournament__button-back')
  popup('.settings__create-zone', '.popup', '.popup__close')
  thArrow('.table-th')
  btns('.settings__btn')
});
