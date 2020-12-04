
function getItemsFromWebPages(output) {
    $.ajax({
        type: "POST",
        url: 'http://www.neocodex.us/forum/index.php',
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
        headers: {
            'User-Agent' : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36'
        },
        success: function (data) {
            output.text(data);
        },
        error: function (e) {

        }
    });
}
