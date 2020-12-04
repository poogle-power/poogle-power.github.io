
function getItemsFromWebPages(output) {
    $.ajax({
        type: "POST",
        url: 'https://www.neocodex.us/forum/index.php',
        data: {
            'app'         : 'itemdb',
            'module'      : 'search',
            'section'     : 'search',
            'item'        : '',
            'description' : '',
            'rarity_low'  : '',
            'rarity_high' : '',
            'price_low'   : 1,
            'price_high'  : 50,
            'shop'        : '',
            'search_order': 'price',
            'sort'        : 'asc',
            'lim'         : 100
        },
        success: function (data) {
            output.text(data);
        },
        error: function (e) {

        }
    });
}
