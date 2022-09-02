const styleBagick = (triggersSelector) => {
  const triggers = document.querySelectorAll(triggersSelector);

  const handleClick = (e) => {
    let div;
    e.target.classList.contains("cards__content")
      ? (div = e.target)
      : (div = e.target.parentNode.parentNode);

    triggers.forEach((trigger) =>
      trigger.classList.contains("active")
        ? trigger.classList.remove("active")
        : null
    );

    div.classList.add("active");
  };

  triggers.forEach((trigger) =>
    trigger.addEventListener("click", (e) => handleClick(e))
  );
};

export { styleBagick };
