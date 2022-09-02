const days = (triggersSelector) => {
  const triggers = document.querySelectorAll(triggersSelector);

  const handleClick = (e) => {
    let text, wrapper;
    if (e.target.classList.contains("day__wrapper")) {
      text = e.target.childNodes[1];
      wrapper = e.target;
    } else {
      text = e.target;
      wrapper = e.target.parentNode;
    }
    if (text.classList.contains("day__text_active")) {
      triggers.forEach((trigger) =>
        trigger.classList.contains("active")
          ? trigger.classList.remove("active")
          : null
      );
      wrapper.classList.add("active");
    } else return;
  };

  triggers.forEach((trigger) =>
    trigger.addEventListener("click", (e) => handleClick(e))
  );
};

export { days };
