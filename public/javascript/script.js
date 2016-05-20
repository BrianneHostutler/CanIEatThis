

var uuid = require('node-uuid');

console.log("loaded");

$('#searchButton').on('click', function () {
    var sesh;
    var createUUID = uuid.v4();
    var appid = "x93sp3m2mrn3tuzwvd5979mx";
    var results = $('#searchTextbox').val();
    var sessionURL = "http://api.foodessentials.com/createsession?uid=" + createUUID + "& devid=" + createUUID +
        "&appid=" + appid + "&f=json&v=2.00&api_key=" + appid;
    var queryURL = "https://api.foodessentials.com/label?u=" + results + "&sid=" + sesh + "&appid=" +
        appid + "&f=json&api_key=" + appid;
    //Write code between the dashes below to hit the queryURL with $ajax, then take the response data and display it in the div with an id of movieView

    console.log("click");
     $.ajax({
        url: sessionURL,
        method: 'GET'
    })
        .done(function (response) {
            console.log(response);

            sesh = JSON.stringify(response.session_id);
            console.log(sesh);

        });

    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .done(function (response) {
            console.log(response);

        });
    return false;
});
