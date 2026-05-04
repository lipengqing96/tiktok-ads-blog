(function () {
  var STORAGE_KEY = "tiktokguide_lang";
  var SUPPORTED = { zh: true, en: true };

  function getMessage(lang, key) {
    var parts = key.split(".");
    var cur = window.I18N && window.I18N[lang];
    if (!cur) return undefined;
    for (var i = 0; i < parts.length; i++) {
      if (!cur || typeof cur !== "object") return undefined;
      cur = cur[parts[i]];
    }
    return typeof cur === "string" ? cur : undefined;
  }

  function detectLang() {
    var params = new URLSearchParams(window.location.search);
    var fromUrl = (params.get("lang") || "").toLowerCase();
    if (fromUrl === "zh" || fromUrl === "en") return fromUrl;
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED[stored]) return stored;
    } catch (e) {}
    return "en";
  }

  /** English is default: clean URL has no ?lang=; Chinese uses ?lang=zh. */
  function setUrlLangParam(lang) {
    try {
      var url = new URL(window.location.href);
      if (lang === "en") url.searchParams.delete("lang");
      else url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.pathname + url.search + url.hash);
    } catch (e) {}
  }

  function applyLang(lang) {
    if (!window.I18N || !SUPPORTED[lang]) lang = "en";

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

    var title = getMessage(lang, "meta.title");
    var metaEl = document.getElementById("meta-desc");
    var titleEl = document.getElementById("page-title");
    if (titleEl && title) titleEl.textContent = title;
    if (metaEl) {
      var desc = getMessage(lang, "meta.description");
      if (desc) metaEl.setAttribute("content", desc);
    }

    var mainNav = document.getElementById("main-nav");
    if (mainNav) {
      var navLabel = getMessage(lang, "a11y.mainNav");
      if (navLabel) mainNav.setAttribute("aria-label", navLabel);
    }

    var langSwitch = document.getElementById("lang-switch");
    if (langSwitch) {
      var g = getMessage(lang, "a11y.langGroup");
      if (g) langSwitch.setAttribute("aria-label", g);
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      var val = getMessage(lang, key);
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (!key) return;
      var val = getMessage(lang, key);
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      var idx = spec.indexOf(":");
      if (idx === -1) return;
      var attr = spec.slice(0, idx);
      var key = spec.slice(idx + 1);
      var val = getMessage(lang, key);
      if (val !== undefined) el.setAttribute(attr, val);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var l = btn.getAttribute("data-lang");
      var active = l === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  var referralUrl =
    typeof window.TIKTOK_ADS_REFERRAL_URL === "string" &&
    window.TIKTOK_ADS_REFERRAL_URL.trim()
      ? window.TIKTOK_ADS_REFERRAL_URL.trim()
      : "https://ads.tiktok.com/";

  document.querySelectorAll("#hero-cta, #footer-cta").forEach(function (a) {
    a.href = referralUrl;
  });

  var initialLang = detectLang();
  applyLang(initialLang);
  setUrlLangParam(initialLang);

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var l = btn.getAttribute("data-lang");
      if (!l || !SUPPORTED[l]) return;
      applyLang(l);
      setUrlLangParam(l);
    });
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
