const hiddenPass = (triggerSelector, inputSelector) => {
  const trigger = document.querySelector(triggerSelector),
    input = document.querySelector(inputSelector);

  const handleClick = () => {
    input.type == "text" ? (input.type = "password") : (input.type = "text");
  };

  trigger.addEventListener("click", handleClick);
};

export { hiddenPass };
