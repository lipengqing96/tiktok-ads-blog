(function () {
  var url =
    typeof window.TIKTOK_ADS_REFERRAL_URL === "string" &&
    window.TIKTOK_ADS_REFERRAL_URL.trim()
      ? window.TIKTOK_ADS_REFERRAL_URL.trim()
      : "https://ads.tiktok.com/";

  document.querySelectorAll("#hero-cta, #footer-cta").forEach(function (a) {
    a.href = url;
  });

  var toggle = document.querySelector(".menu-toggle");
  var mobile = document.getElementById("mobile-nav");
  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = mobile.hidden;
      mobile.hidden = !open;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    mobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobile.hidden = true;
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
