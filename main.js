window.onload = () => {
  //#region collapsible: https://www.w3schools.com/howto/howto_js_collapsible.asp
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
  //#endregion

  //#region modal image
  var modal = document.getElementById("myModal");
  var imgs = document.getElementsByTagName("img");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  Array.from(imgs).forEach(
    (img) =>
      (img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      })
  );

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };
  //#endregion
};
