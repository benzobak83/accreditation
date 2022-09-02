import React, { useState, useEffect, useRef } from "react";
import { Select } from "./Select";
import { Svg } from "./Svg";
import img_add from "../../assets/img/ic_add.svg";
import {zones} from '../ts/tournament/zones'
import img_search from "../../assets/img/ic_search-green.svg";

function Card(props) {
  const { dragHandlers } = props;
  const [role, setRole] = useState(false);
  const search = useRef();
  const searchImg = useRef();



  const roleTrue = () => {
    setRole(true);
  };
  const roleFalse = () => {
    setRole(false);
  };

  useEffect(() => {
    zones('.settings__zone-number-wrapper')
  }, [])

  return (
    <div className="card-user__inner">
      <div className="card-user__title">
        <div className="card-user__text">Карточка участника</div>
        <div className="card-user__delete">Удалить</div>
      </div>

      <div className="card-user__content">
        <div className="card-user__card card" id="editor-card">
          <Svg dragHandlers={dragHandlers} />
        </div>
        <div className="card-user__settings settings">
          <div className="settings__inner">
            <div className="settings__buttons">
              <button className="settings__btn" onClick={roleTrue}>
                Роль
              </button>
              <button
                className="settings__btn settings__btn_active"
                onClick={roleFalse}
              >
                Цифры
              </button>
            </div>
            {role && (
              <form className="settings__form">
                <div className="settings__create-zone create-status"></div>
                <Select
                  search={search}
                  searchImg={searchImg}
                  selectCurrent="KTF - KTF"
                  selectItems={[
                    "ITF Event Manager - ITF EM",
                    "ITF Photographer - ITF Ph",
                    "ITF Event Manager - ITF EM",
                    "ITF Event Manager - ITF EM",
                    "ITF Event Manager - ITF EM",
                    "ITF President - ITF Pr",
                    "ITF Event Manager - ITF EM",
                    "ITF Event Manager - ITF EM",
                  ]}
                  color={true}
                  isSearch={true}
                />
                    

                
              </form>
            )}
            <div className="settings__zone">
              <div className="settings__zone-text">Зоны доступа</div>
              <div className="settings__zone-number">
                <div className="settings__zone-number-wrapper settings__zone-number-wrapper_active">
                  <div className="settings__zone-number-item">1</div>
                </div>
                <div className="settings__zone-number-wrapper settings__zone-number-wrapper_active">
                  <div className="settings__zone-number-item">2</div>
                </div>
                <div className="settings__zone-number-wrapper settings__zone-number-wrapper_active">
                  <div className="settings__zone-number-item">3</div>
                </div>
                <div className="settings__zone-number-wrapper settings__zone-number-wrapper_active">
                  <div className="settings__zone-number-item">4</div>
                </div>
                <div className="settings__zone-number-wrapper settings__zone-number-wrapper_active">
                  <div className="settings__zone-number-item">5</div>
                </div>
                <div className="settings__zone-number-wrapper">
                  <div className="settings__zone-number-item">6</div>
                </div>
                <div className="settings__zone-number-wrapper">
                  <div className="settings__zone-number-item">7</div>
                </div>
                <div className="settings__zone-number-wrapper">
                  <div className="settings__zone-number-item">8</div>
                </div>
                <div className="settings__zone-number-wrapper">
                  <div className="settings__zone-number-item">9</div>
                </div>
                <div className="settings__zone-number-wrapper">
                  <div className="settings__zone-number-item">10</div>
                </div>
                <div className="settings__zone-number-wrapper">
                  <div className="settings__zone-number-item">11</div>
                </div>
                <div className="settings__zone-number-wrapper">
                  <div className="settings__zone-number-item">12</div>
                </div>
              </div>
              <div className="settings__create-zone">
                <img
                  src={img_add}
                  alt=""
                  className="settings__create-zone-img"
                />
                <div className="settings__create-zone-text">
                  Создать зону доступа
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
