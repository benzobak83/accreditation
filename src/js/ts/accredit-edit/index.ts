const handlePage = (
  triggersSelector,
  createStatusSelector,
  zonesReactSelector,
  numberSelector
) => {
  const triggers = document.querySelectorAll(triggersSelector),
    createStatus = document.querySelector(createStatusSelector),
    zonesReact = document.querySelector(zonesReactSelector),
    number = document.querySelector(numberSelector),
    btnRole = triggers[0],
    btnNumber = triggers[1];

  const resetDisplay = () => {
    [createStatus, zonesReact, number].forEach((item) =>
      item.classList.contains("active") ? item.classList.remove("active") : null
    );
  };
  const resetButtons = () => {
    triggers.forEach((trigger) =>
      trigger.classList.contains("settings__btn_active")
        ? trigger.classList.remove("settings__btn_active")
        : null
    );
  };

  const handleRole = () => {
    resetDisplay();
    resetButtons();
    btnRole.classList.add("settings__btn_active");
    createStatus.classList.add("active");
    zonesReact.classList.add("active");
  };

  const handleNumber = () => {
    resetDisplay();
    resetButtons();
    btnNumber.classList.add("settings__btn_active");
    number.classList.add("active");
  };

  btnRole.addEventListener("click", handleRole);
  btnNumber.addEventListener("click", handleNumber);
};

export { handlePage };
