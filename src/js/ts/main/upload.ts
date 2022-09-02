import defaultImg from "../../../assets/img/main/avatar.png";

const upload = () => {
  let result = document.querySelector(".result"), //блок куда загрузится фото
    img_result = document.querySelector(".img-result"), // блок куда загрузится обрезанная фотка
    options = document.querySelector(".options"), // блок с кнопками
    img_w = document.querySelector(".img-w"), //ненужные кнопки для задачи размера
    save = document.querySelector(".save"), // кнопка которая обрезает
    cropped = document.querySelector(".cropped"), // img внутри блока img-result
    upload = document.querySelector("#file-input"), // input upload
    cropper = "",
    popup1 = document.querySelector(".popup-accredit"),
    popup2 = document.querySelector(".popup-edit"),
    textUploadPhoto = document.querySelector(".avatar__upload-text"),
    btnDeletePhoto = document.querySelector(".delete-photo"),
    btnRepick = document.querySelector(".popup-edit__repick");

  const deletePhoto = (e) => {
    upload.value = "";
    cropped.src = defaultImg;
    img_result.classList.add("empty");
    textUploadPhoto.classList.remove("uploaded");
    btnDeletePhoto?.classList.remove("active");
    textUploadPhoto.innerHTML = "Загрузить фото";
  };

  // on change show image with crop options
  upload.addEventListener("change", (e) => {
    if (e.target.files.length) {
      console.log("super");
      // start file reader

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target.result) {
          // create new image
          let img = document.createElement("img");
          img.id = "image";
          img.src = e.target.result;
          // clean result before
          result.innerHTML = "";
          // append new image
          result.appendChild(img);
          // show save btn and options
          //   save.classList.remove("hide");
          //   options.classList.remove("hide");
          // init cropper
          cropper = new Cropper(img);
          popup1.classList.remove("active");
          popup2.classList.add("active");
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  });

  // save on click
  save.addEventListener("click", (e) => {
    e.preventDefault();
    img_result.classList.remove("empty");
    textUploadPhoto.classList.add("uploaded");
    btnDeletePhoto?.classList.add("active");
    textUploadPhoto.innerHTML = "Изменить фото";

    // get result to data uri
    let imgSrc = cropper
      .getCroppedCanvas({
        width: img_w.value, // input value
      })
      .toDataURL();
    // remove hide class of img
    // cropped.classList.remove("hide");
    // img_result.classList.remove("hide");
    // show image cropped
    cropped.src = imgSrc;

    popup2.classList.remove("active");
    popup1.classList.add("active");
    // dwn.classList.remove("hide");
    // dwn.download = "imagename.png";
    // dwn.setAttribute("href", imgSrc);
  });

  btnDeletePhoto.addEventListener("click", (e) => deletePhoto(e));
  btnRepick?.addEventListener("click", () => upload.click());
};

export { upload };
