const popup = (selectorTrigger, selectorPopup, selectorClose) => {
 
  const triggers = document.querySelectorAll(selectorTrigger),
    popup = document.querySelector(selectorPopup),
    btnClose = document.querySelectorAll(selectorClose);

  const openPopup = () => {
    popup.classList.add("active");
    console.log(1);
  };
  const closePopup = (e) => {
    e.target.closest(".popup").classList.remove("active");
  };

  triggers.forEach((trigger) => trigger.addEventListener("click", openPopup));
  btnClose.forEach((item) =>
    item.addEventListener("click", (e) => closePopup(e))
  );
};

export { popup };
