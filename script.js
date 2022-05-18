// Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

//const img=document.getElementById("plus");
//const summary=document.getElementById("sum");
//summary.addEventListener("click",function(){
//img.classList.toggle("fa-xmark");
//});

const img = document.querySelectorAll("summary");
const icon = document.querySelectorAll("#plus1", "#plus2", "plus3");
img.forEach((change) => {
  change.addEventListener("click", () => {
    icon.forEach((xmark) => {
      xmark.classList.toggle("fa-xmark");
    });
  });
});



//const img = document.querySelectorAll("summary");
//const icon = document.querySelectorAll("#plus1", "#plus2", "plus3");
//for (i = 0; i < img.length; i++) {
 // img[i].addEventListener("click", () => {
   // icon.classList.toggle("fa-xmark");
  //});
//}