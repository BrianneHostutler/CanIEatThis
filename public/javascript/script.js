
console.log("loaded");

    $('#searchButton').on('click', function(){
        var results = $('#searchTextbox').val();

        // Generate two ids in an array
        var arr = new Array(32); // -> []
        uuid.v1(null, arr, 0);   // -> [02 a2 ce 90 14 32 11 e1 85 58 0b 48 8e 4f c1 15]
        // Optionally use uuid.unparse() to get stringify the ids
        uuid.unparse(buffer);    // -> '02a2ce90-1432-11e1-8558-0b488e4fc115'
        console.log(uuid);

        var queryURL = "http://api.foodessentials.com/label?u=" + results + "&sid=2bada378-a8fb-492f-b818-37eb41cee78b&appid=demoApp_01&f=json&api_key=x93sp3m2mrn3tuzwvd5979mx"
        //Write code between the dashes below to hit the queryURL with $ajax, then take the response data and display it in the div with an id of movieView

        //console.log("click");
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
