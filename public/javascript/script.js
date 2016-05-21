// Searcg button that pulls results from food essentials database
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

// Initialize quagga (UPC) for scanning callbacks and results
Quagga.init({
    inputStream: {
        name: "Live",
        type: "LiveStream",
        constraints: {
            width: 640,
            height: 480,
            facingMode: "environment"
        },
            target: document.querySelector('#yourElement')    // Or '#yourElement' (optional)
        },
        decoder: {
            readers: ["UPC"]
        }
    }, function(err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });


