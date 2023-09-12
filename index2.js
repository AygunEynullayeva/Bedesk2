$(document).ready(function () {
    // Show the header when a list item is clicked
    $('.responsive-list li').click(function () {
        // Toggle the header's visibility
        $('.responsive-list').toggle();
    });
});
//Wishlist//
$(document).ready(function () {
    // Load the wishlist from localStorage on page load
    loadWishlist();

    // Click handler for adding/removing items to/from the wishlist
    $(".wish-bag").on("click", function () {
        var product = $(this).closest(".model");
        var productName = product.find(".brand").text();

        // Check if the product is already in the wishlist
        if ($("#wishlist-items li:contains('" + productName + "')").length === 0) {
            // Add the product to the wishlist
            $("#wishlist-items").append("<li>" + productName + "</li>");

            // Save the updated wishlist to localStorage
            saveWishlist();
        } else {
            // Remove the product from the wishlist
            $("#wishlist-items li:contains('" + productName + "')").remove();

            // Save the updated wishlist to localStorage
            saveWishlist();
        }
    });

    // Function to load the wishlist from localStorage
    function loadWishlist() {
        var savedWishlist = localStorage.getItem("wishlist");
        if (savedWishlist) {
            $("#wishlist-items").html(savedWishlist);
        }
    }

    // Function to save the wishlist to localStorage
    function saveWishlist() {
        var wishlistHtml = $("#wishlist-items").html();
        localStorage.setItem("wishlist", wishlistHtml);
    }
});
