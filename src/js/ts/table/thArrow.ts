import arrowDown from "../../../assets/img/ic_arrow-bottom-green.svg";
import arrowUp from "../../../assets/img/ic_arrow-up-green.svg";

const thArrow = (selectorTh, selectorImg) => {
  const th = document.querySelectorAll(selectorTh);

  const handleClick = (e) => {
    if (e.target.classList.contains("table-th")) {
      e.target.classList.toggle("down");

      e.target.classList.contains("down")
        ? (e.target.querySelector("img").src = arrowDown)
        : (e.target.querySelector("img").src = arrowUp);
    } else {
      e.target.parentNode.classList.toggle("down");

      e.target.parentNode.classList.contains("down")
        ? (e.target.parentNode.querySelector("img").src = arrowDown)
        : (e.target.parentNode.querySelector("img").src = arrowUp);
    }
  };

  th.forEach((item) => item.addEventListener("click", (e) => handleClick(e)));
};
export { thArrow };
