const editSection = (triggerSelectors, sectionSelectors) => {
  const triggers = document.querySelectorAll(triggerSelectors);
  const sections = document.querySelectorAll(sectionSelectors);

  const checkSectionsActive = () => {
    let active = false;
    sections.forEach((section) =>
      section.classList.contains("active") ? (active = true) : null
    );

    return active;
  };

  const lowOpacity = () => {
    sections.forEach((section) =>
      section.classList.contains("active")
        ? null
        : (section.style.opacity = "0.5")
    );
  };

  const normalizeOpacity = () => {
    sections.forEach((section) => (section.style.opacity = 1));
  };

  const saveCard = (btn) => {
    btn.innerHTML = "Редактировать";
    normalizeOpacity();
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (
      checkSectionsActive() &&
      !e.target.parentNode.parentNode.parentNode.classList.contains("active")
    )
      return; //если редактирование уже активировано, то остальные кнопки редактировать будут невалидны

    const btn = e.target;
    const section = e.target.parentNode.parentNode.parentNode;

    if (btn.innerHTML == "Сохранить") {
      console.log(1);
      section.classList.remove("active");
      saveCard(btn);
      return;
    }

    section.classList.add("active");
    btn.innerHTML = "Сохранить";

    lowOpacity();
  };

  triggers.forEach((trigger) =>
    trigger.addEventListener("click", (e) => handleClick(e))
  );
};

export { editSection };
