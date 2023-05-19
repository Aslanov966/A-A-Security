var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


function OpenSearchArea() {
  document.getElementById("search").style=" display: flex";
  document.getElementById("search-label").style=" height:100px";
  document.getElementById("close-input").style=" display: flex";


}
function CloseSearchArea() {  document.getElementById("search").style=" display: none";
document.getElementById("close-input").style=" display: none";
document.getElementById("search-label").style=" height:0px";

}
function OpenMobilMenuArea(){
  document.getElementById("mobil-menu").style="display:block";
}
function CloseMobilMenuArea(){
  document.getElementById("mobil-menu").style="display:none";

}
function OpenMobilMenuSecondArea1(){
  // document.getElementById("mobil-menu-second1").style="display:block";
  document.getElementById("mobil-menu-second1").classList.toggle("mobil-menu-second-display-block");

}
function OpenMobilMenuSecondArea2(){
document.getElementById("mobil-menu-second2").classList.toggle("mobil-menu-second-display-block");
}