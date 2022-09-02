const btns = (btnsSelector) => {
  const buttons = document.querySelectorAll(btnsSelector);

  const handleClick = (e) => {
    buttons.forEach((btn) => btn.classList.remove("settings__btn_active"));
    e.target.classList.add("settings__btn_active");
  };

  buttons.forEach((btn) =>
    btn.addEventListener("click", (e) => handleClick(e))
  );
};

export { btns };
