$(document).ready(function () {
  const images = ["./img/first.png", "./img/second.png", "./img/thrid.png"];
  let i = 0;

  function showImage(index) {
    $(".thrid-img img").attr("src", images[index]);
  }

  $(".arrow-left.left").click(function () {
    i = i > 0 ? i - 1 : images.length - 1;
    showImage(i);
    console.log(i);
  });
  $(".arrow-right").click(function () {
    i = i < images.length - 1 ? i + 1 : 0;
    showImage(i);
    console.log(i);
  });
  showImage(i);
});

$(document).ready(function () {
  console.log("ready");
  let lastScrollPosition = 0;
  $(window).on("scroll", function () {
    const currentScrollPosition = $(this).scrollTop();
    if (
      currentScrollPosition > lastScrollPosition &&
      currentScrollPosition > 0
    ) {
      document.getElementById("head").classList.add("hidden");
      console.log("ok");
    } else {
      document.getElementById("head").classList.remove("hidden");
      console.log("neok");
    }

    lastScrollPosition = currentScrollPosition;
  });
});
