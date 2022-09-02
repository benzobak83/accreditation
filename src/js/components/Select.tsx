import React, { useRef, useState, useEffect } from "react";

import img_arrowDown from "../../assets/img/input_arrow-down.svg";
import img_arrowUp from "../../assets/img/input_arrow-up.svg";
import { SelectContent } from "./SelectContent";


import img_search from "../../assets/img/ic_search-green.svg";

const Select = (props) => {
  const {selectCurrent, selectItems, color=false, isSearch=false, isAddNewRole=false, changeRoleSvg=false } = props;

  const [selectItemsUpdate, setSelectItemsUpdate] = useState(selectItems)


  const selectValue = useRef();
  const selectBody = useRef();
  const optionValue = useRef();
  let search = false;
  let searchImg = false;
  let addNewRole = false;
  let addNewRoleBtn = false
  if (isSearch) {
    search = useRef();
    searchImg = useRef();
  } 
  if (isAddNewRole) {
    addNewRole = useRef();
    addNewRoleBtn = useRef();
  }

  
useEffect(() => {
  changeRoleSvg? document.querySelector('#svg-role').innerHTML = optionValue.current.value : null
}, [])

  const activeItemSelect = (e) => {
    const arr = [...e.target.parentNode.children]
    
      arr.forEach((item) =>
        item.classList.contains("select__item_active")
          ? item.classList.remove("select__item_active")
          : null);
      e.target.classList.add('select__item_active')

      changeRoleSvg? document.querySelector('#svg-role').innerHTML = e.target.innerHTML : null
    
  };
  

  const handleSelect = () => {
    setSelectItemsUpdate([addNewRole.current.value, ...selectItems])
  }
  return (
    <>
      <select name="status" id="select">
        <option  ref={optionValue} value={selectCurrent} ></option>
      </select>

      <div className="select" ref={selectBody}>
        <div
          className={color? "select__header color" : "select__header"}
          onClick={(e) => {
            selectBody.current.classList.toggle("is-active");
            search ? search.current.classList.toggle("is-active") : null;
            search ? searchImg.current.classList.toggle("is-active") : null;
            isAddNewRole ? addNewRole.current.classList.toggle("is-active") : null;
            isAddNewRole ? addNewRoleBtn.current.classList.toggle("is-active") : null;
          }}
        >
          <span className="select__current" ref={selectValue}>
            <SelectContent selectCurrent={selectCurrent} />
          </span>
          <img className="select__icon" src={img_arrowDown}></img>
        </div>

        <div className="select__body-wrapper">
          <div
            className={search||isAddNewRole ? "select__body" : "select__body without-search"}
            onClick={(e) => {
              selectValue.current.innerHTML = e.target.innerHTML;
              
              search ? search.current.classList.remove("is-active") : null;
              search ? searchImg.current.classList.remove("is-active") : null;
              isAddNewRole ? addNewRole.current.classList.remove("is-active") : null;
            isAddNewRole ? addNewRoleBtn.current.classList.remove("is-active") : null;
              selectBody.current.classList.remove("is-active");
              optionValue.current.value = selectValue.current.innerHTML
            }}
          >
            <div
                  className={color? "select__item select__item_active color" : "select__item select__item_active"}
                  onClick={(e) => activeItemSelect(e)}
                ><SelectContent selectItem={selectCurrent} /></div>
            {selectItemsUpdate.map((selectItem, index) => {
              return (
                <div
                  key={index}
                  className={color? "select__item color" : "select__item"}
                  onClick={(e) => activeItemSelect(e)}
                >
                  <SelectContent selectItem={selectItem} />
                </div>
              );
            })}
       
          </div>
        </div>
      </div>
     {isSearch?  <div className="select__search-block">
                  <input
                    type="text"
                    placeholder="Найти"
                    className="search-zone"
                    ref={search}
                  ></input>
                  <img
                    src={img_search}
                    alt=""
                    className="select__search-img"
                    ref={searchImg}
                  />
                </div> : null}

    {isAddNewRole?  <div className="select__search-block">
                  <input
                    type="text"
                    placeholder="Введите роль"
                    className="search-zone add-new-role-input"
                    ref={addNewRole}
                  ></input>
                 <button
                 type="button"
                    className="add-new-role-btn"
                    onClick={handleSelect}
                    ref={addNewRoleBtn}>
                      Добавить
                   
                    </button>
                </div> : null}
    </>
  );
};

export { Select };
