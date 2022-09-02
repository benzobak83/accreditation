const btns = (btnsSelector) => {
  const buttons = document.querySelectorAll(btnsSelector);

  const handleClick = (e) => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
  };

  buttons.forEach((btn) =>
    btn.addEventListener("click", (e) => handleClick(e))
  );
};

export { btns };
