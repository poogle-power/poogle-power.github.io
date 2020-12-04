
function getItemsFromWebPages(output) {
    var form = new FormData();
    form.append("app", "itemdb");
    form.append("module", "search");
    form.append("section", "search");
    form.append("item", "");
    form.append("description", "");
    form.append("rarity_low", "");
    form.append("rarity_high", "");
    form.append("price_low", "");
    form.append("price_high", "");
    form.append("shop", "");
    form.append("search_order", "price");
    form.append("sort", "asc");
    form.append("lim", "100");

    $.ajax({
        type: "POST",
        url: 'https://www.neocodex.us/forum/index.php',
        data: form,
        success: function (data) {
            output.text(data);
        },
        error: function (e) {

        }
    });
}
