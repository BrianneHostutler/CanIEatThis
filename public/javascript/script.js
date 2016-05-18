
    $('#searchButton').on('click', function(){
        var results = $('#searchTextbox').val();
        var queryURL = "https://api.foodessentials.com/label?u=" + results + "&sid=2bada378-a8fb-492f-b818-37eb41cee78b&appid=demoApp_01&f=json&api_key=x93sp3m2mrn3tuzwvd5979mx"
        //Write code between the dashes below to hit the queryURL with $ajax, then take the response data and display it in the div with an id of movieView
        $.ajax({
          url:queryURL,
          method: 'GET'})
        .done(function(response){
        console.log(response);

        // var string= JSON.stringify(response);
        // $("#searchResults").html(string);

        //or  instead of lines 31 and 32 you can do: $("#movieView").html(JSON.stringify(response))

       });
        return false;
    });
