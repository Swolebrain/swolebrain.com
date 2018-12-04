$(window).on("load resize", function(e){
  const ht = parseInt(window.innerHeight);
  $(".bg-div").css("height", ht+"px");
  $("#main-page").css("margin-top", (ht-142)+"px");
  $("#page-title").css("top", ht*.4+"px");
});
