import checkboxYes from "../../../assets/img/Checkbox.svg";
import checkboxNo from "../../../assets/img/Checkbox-no.svg";

const checkbox = (selectorCb, selectorCustomCb) => {
  const cb = document.querySelector(selectorCb);
  const customCb = document.querySelector(selectorCustomCb);

  const handleClick = () => {
    customCb.classList.toggle("active");

    if (customCb.classList.contains("active")) {
      customCb.src = checkboxYes;
    } else customCb.src = checkboxNo;

    customCb.classList.contains("active")
      ? (cb.checked = true)
      : (cb.checked = false);
  };

  cb.addEventListener("click", handleClick);
};

export { checkbox };
