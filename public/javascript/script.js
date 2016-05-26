 $(document).ready(function(){
   $("#interactive").hide();
 });

// Search button that pulls results from food essentials database
$('#searchButton').on('click', function () {
    // var searched=true

    var results = $('#searchTextbox').val();
    var queryURL = "/upc/" + results;

    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .done(function (response) {
            console.log(response);
            $("#searchResults").html(response);
        });
});

//Scan button that invokes Quagga scanner code
$('#scanButton').on('click', function () {
    $("#interactive").show();
    runQuagga();
    //populate form field once scanner picks up upc code
    //done inside live_w_locator.js
});

// backstretch background script
$(function() {
$.backstretch('http://media02.hongkiat.com/black_wallpapers/black-matter.jpg');
})
