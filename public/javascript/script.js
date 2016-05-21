console.log("loaded");

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
