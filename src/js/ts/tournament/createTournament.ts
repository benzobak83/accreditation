const createTournament = (
  trigger,
  selectorForAactive,
  selectorForHide,
  selectorBack
) => {
  const btnCreateTournir = document.querySelector(trigger),
    activeWindow = document.querySelector(selectorForAactive[0]),
    hiddenWindow = document.querySelector(selectorForHide),
    btnBack = document.querySelector(selectorBack);

  const handleActive = () => {
    if (activeWindow.classList.contains("active")) return;
    else {
      hiddenWindow.classList.remove("active");
      selectorForAactive.forEach((selector) => {
        document.querySelector(selector).classList.add("active");
      });
    }
  };
  const handleHidden = () => {
    if (hiddenWindow.classList.contains("active")) return;
    else {
      hiddenWindow.classList.add("active");
      selectorForAactive.forEach((selector) => {
        document.querySelector(selector).classList.remove("active");
      });
    }
  };

  btnCreateTournir.addEventListener("click", handleActive);
  btnBack.addEventListener("click", handleHidden);
};

export { createTournament };
