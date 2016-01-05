function showImg(idx){
  var no = idx +1;
  $(".slideshow img").removeClass("active");
  $(".slideshow img:nth-child(" + no + ")").addClass("active");

}
function moveNext(){
  var idx = $(".slideshow img.active").index();
  var cnt = $(".slideshow img").length;
  showImg((idx + 1)% cnt);
}

$(function(){
  setInterval(moveNext,1000);
});
