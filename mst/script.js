document.addEventListener("DOMContentLoaded", function () {
    var searchBtn = document.getElementById("searchBtn");
    var searchContainer = document.getElementById("searchContainer");
    var searchBox = document.getElementById("searchBox");
    var searchSubmit = document.getElementById("searchSubmit");

    if (searchBtn && searchContainer && searchBox && searchSubmit) {
        // Toggle search bar visibility
        searchBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            searchContainer.style.display = (searchContainer.style.display === "block") ? "none" : "block";
            searchBox.focus();
        });

        // Hide search box when clicking outside
        document.addEventListener("click", function (event) {
            if (!searchContainer.contains(event.target) && event.target !== searchBtn) {
                searchContainer.style.display = "none";
            }
        });

        // Redirect on search
        searchSubmit.addEventListener("click", function () {
            var query = searchBox.value.trim().toLowerCase();
            if (query !== "") {
                if (query === "kerala") {
                    window.location.href = "kerala.html"; // Ensure kerala.html is in the same folder as home.html
                } else {
                    alert("No results found for: " + query);
                }
                searchContainer.style.display = "none";
            }
        });
    }
});
