function renderIngredients() {
  var entry = "cosmopolitan"; // search item will generate bloody mary
  var queryURL =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + entry;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    //  storing object values in variables
    var image = $("<img>");
    image.attr("src", response.drinks[0].strDrinkThumb);
    var category = $("<p>").text(JSON.stringify(response.drinks[0].strCategory));
    var name = $("<p>").text(JSON.stringify(response.drinks[0].strDrink));
    var glass = $("<p>").text(response.drinks[0].strGlass);

    //  creates a paragraph for every ingredient and measurement.
    var strIngredient1 = $("<p>").text(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1);
    var strIngredient2 = $("<p>").text(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2);
    var strIngredient3 = $("<p>").text(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3);
    var strIngredient4 = $("<p>").text(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4);
    var strIngredient5 = $("<p>").text(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5);
    var strIngredient6 = $("<p>").text(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6);
    var instructions = $("<p>").text(response.drinks[0].strInstructions);

    //  appending variables in "drink-div"
    $("#drink-div").append(image);
    $("#name-div").append(name);
    $("#glass-div").append(glass);
    $("#ingredients-div").append(strIngredient1);
    $("#ingredients-div").append(strIngredient2);
    $("#ingredients-div").append(strIngredient3);
    $("#ingredients-div").append(strIngredient4);
    $("#ingredients-div").append(strIngredient5);
    $("#ingredients-div").append(strIngredient6);
    $("#directions-div").append(instructions);
  });
}

renderIngredients();
