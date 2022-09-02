const zones = (triggerSelector) => {
  const triggers = document.querySelectorAll(triggerSelector);

  const handleClick = (e) => {
    e.target.classList.contains("settings__zone-number-wrapper")
      ? e.target.classList.toggle("active")
      : e.target.parentNode.classList.toggle(
          "settings__zone-number-wrapper_active"
        );
  };

  triggers.forEach((trigger) =>
    trigger.addEventListener("click", (e) => handleClick(e))
  );
};

export { zones };
