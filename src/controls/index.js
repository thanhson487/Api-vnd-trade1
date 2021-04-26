import $ from "jquery";
$(document).ready(function () {
  var checkshow = false;

  // $("asset").css({ "background-color": "#2F3240", color: "#ED8F21" });
  // $("#listfooter").css({ "background-color": "#131722", color: "#ffffff" });
  // $("#orderBook").css({ "background-color": "#131722", color: "#ffffff" });
  // $(".datachangeorderBook").hide();
  // $(".main__right").show();
  // $(".datachangeMenu").hide();

  $("#orderBook").click(function () {
    $(this).css({ "background-color": "#2F3240", color: "#ED8F21" });
    $("#listfooter").css({ "background-color": "#131722", color: "#ffffff" });
    $("#asset").css({ "background-color": "#131722", color: "#ffffff" });

    $(".main").css({
      "grid-template-columns": "1fr 398px",
    });
    $(".main__right").css({ display: "flex" });
    $(".data1").show();

    $(".datachangeorderBook").show();
    $("#datachangeasset").hide();
    $(".datachangeMenu").hide();
    $(".footer").css({ width: "396px" });
  });

  $("#listfooter").click(function () {
    $(this).css({ "background-color": "#2F3240", color: "#ED8F21" });
    $("#orderBook").css({ "background-color": "#131722", color: "#ffffff" });
    $("#asset").css({ "background-color": "#131722", color: "#ffffff" });

    $(".main").css({
      "grid-template-columns": "1fr 398px",
    });
    $(".main__right").css({ display: "flex" });
    $(".footer").css({ width: "396px" });
    $(".data1").show();

    $(".datachangeorderBook").hide();
    $("#datachangeasset").hide();
    $(".datachangeMenu").show();
    $(".closeTaste").hide();
  });

  $("#asset").click(function () {
    $(this).css({ "background-color": "#2F3240", color: "#ED8F21" });
    $("#orderBook").css({ "background-color": "#131722", color: "#ffffff" });
    $("#listfooter").css({ "background-color": "#131722", color: "#ffffff" });

    $(".main__right").show();
    $(".main").css({
      "grid-template-columns": "1fr 398px",
    });
    $(".main__right").css({ display: "flex" });
    $(".footer").css({ width: "396px" });
    $(".datachangeorderBook").hide();
    $("#datachangeasset").show();
    $(".datachangeMenu").hide();
  });

  $(".hideTabRight").click(function () {
     $(".main__right").hide();
    $(".main").css({
      "grid-template-columns": "1fr",
    });
    $(".footer--scare").css({
      display: "block",
    });
    $(".main__left").css({ "grid-template-columns": "1fr 396px" });
    $(".footer").css({ width: "396px" });

    $("#asset").css({ "background-color": "#2F3240", color: "#131722" });
    $("#orderBook").css({ "background-color": "#2F3240", color: "#131722" });
    $("#listfooter").css({ "background-color": "#2F3240", color: "#131722" });

    $("#orderBook").css({ "background-color": "#131722", color: "#ffffff" });
    $("#listfooter").css({ "background-color": "#131722", color: "#ffffff" });
    $("#asset").css({ "background-color": "#131722", color: "#ffffff" });
  });

  $(".conditionalOrder--action").click(function () {
    $(".conditionalOrder-menu").css({
      display: "flex",
    });
    $(".conditionalOrder-day").hide();
    $(".data-show").hide();
    $(".conditionalOrder--action").css({
      color: "#f7941d",
      fontWeight: "700",
    });
    $(".comeinandDay--action").css({
      color: "#fff",
      fontWeight: "1",
    });
  });

  $(".comeinandDay--action").click(function () {
    $(".conditionalOrder-menu").css({
      display: "none",
    });
    $(".conditionalOrder-day").show();
    $(".data-show").show();
    $(".comeinandDay--action").css({
      color: "#f7941d",
      fontWeight: "700",
    });
    $(".conditionalOrder--action").css({
      color: "#fff",
      fontWeight: "1",
    });
  });

  $(".openTaste--close").click(function () {
    $(".openTaste").hide();
    $(".closeTaste").show();
    $(".data-show").hide();
    $(".openTaste--close").css({
      color: "#f7941d",
      fontWeight: "700",
    });
    $(".openTaste--action").css({
      color: "#fff",
      fontWeight: "1",
    });
  });

  $(".openTaste--action").click(function () {
    $(".openTaste").show();
    $(".closeTaste").hide();
    $(".data-show").show();
    $(".openTaste--action").css({
      color: "#f7941d",
      fontWeight: "700",
    });
    $(".openTaste--close").css({
      color: "#fff",
      fontWeight: "1",
    });
  });
  // action show
  $(window).resize(() => {
    if ($(window).width() <= 1024) {
      $(".main").css({ "grid-template-columns": "1fr" });
      $(".main__right").css({ display: "none" });
      $(".footer").css({ width: "396px", boder: "1px solid red" });
      $("#orderBook").css({ "background-color": "#131722", color: "#ffffff" });
      $("#listfooter").css({ "background-color": "#131722", color: "#ffffff" });
      $("#asset").css({ "background-color": "#131722", color: "#ffffff" });
    } else {
      $(".main__left").css({ "grid-template-columns": "1fr 396px" });
    }
  });

  //chart actipn
  $("#icon1").click(function () {
    $("#icon1").css({
      color: "yellow",
    });
    $("#icon2").css({
      color: "#fff",
    });
    $("#icon3").css({
      color: "#fff",
    });
    $("#icon4").css({
      color: "#fff",
    });
  });

  $("#icon2").click(function () {
    $("#icon1").css({
      color: "#fff",
    });
    $("#icon2").css({
      color: "yellow",
    });
    $("#icon3").css({
      color: "#fff",
    });
    $("#icon4").css({
      color: "#fff",
    });
  });

  $("#icon3").click(function () {
    $("#icon1").css({
      color: "#fff",
    });
    $("#icon2").css({
      color: "#fff",
    });
    $("#icon3").css({
      color: "yellow",
    });
    $("#icon4").css({
      color: "#fff",
    });
  });

  $("#icon4").click(function () {
    $("#icon1").css({
      color: "#fff",
    });
    $("#icon2").css({
      color: "#fff",
    });
    $("#icon3").css({
      color: "#fff",
    });
    $("#icon4").css({
      color: "yellow",
    });
  });
});
