
console.log("loaded");

    $('#searchButton').on('click', function(){
        var results = $('#searchTextbox').val();
        var queryURL = "https://api.foodessentials.com/label?u=" + results + "&sid=2bada378-a8fb-492f-b818-37eb41cee78b&appid=demoApp_01&f=json&api_key=x93sp3m2mrn3tuzwvd5979mx"
       
        console.log("click");
        $.ajax({
          url:queryURL,
          method: 'GET'})
        .done(function(response){
        console.log(response);

        // var string= JSON.stringify(response);

     });
      return false;
  });
