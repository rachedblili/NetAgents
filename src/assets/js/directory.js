(function () {
  var chips = document.querySelectorAll(".filter-chip");
  var search = document.getElementById("directory-search");
  var entries = document.querySelectorAll(".entry");
  var groups = document.querySelectorAll(".entry-group");
  var countEl = document.getElementById("filter-count");
  var activeCategory = "all";

  function applyFilters() {
    var q = (search.value || "").trim().toLowerCase();
    var visible = 0;

    entries.forEach(function (entry) {
      var matchesCategory = activeCategory === "all" || entry.dataset.category === activeCategory;
      var haystack = entry.dataset.search || "";
      var matchesSearch = q === "" || haystack.indexOf(q) !== -1;
      var show = matchesCategory && matchesSearch;
      entry.hidden = !show;
      if (show) visible++;
    });

    groups.forEach(function (group) {
      var visibleInGroup = group.querySelectorAll(".entry:not([hidden])").length;
      group.hidden = visibleInGroup === 0;
    });

    if (countEl) {
      countEl.textContent = visible + (visible === 1 ? " agent shown" : " agents shown");
    }
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("is-active"); });
      chip.classList.add("is-active");
      activeCategory = chip.dataset.filter;
      applyFilters();
    });
  });

  if (search) {
    search.addEventListener("input", applyFilters);
  }

  applyFilters();
})();
