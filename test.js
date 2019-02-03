function renderIngredients(){

    var entry = "bloody"; // search item will generate bloody mary
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+entry;
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {

            //  console.log(response.drinks);      // for debugging purposes 

            //  storing object values in variables
            var image = $("<img>");
                image.attr("src", response.drinks[0].strDrinkThumb);
            var category = $("<p>").text(JSON.stringify(response.drinks[0].strCategory));
            var name = $("<p>").text(JSON.stringify(response.drinks[0].strDrink));
            var alcoholic = $("<p>").text(JSON.stringify(response.drinks[0].strAlcoholic));
            var glass = $("<p>").text(JSON.stringify(response.drinks[0].strGlass));

            //  creates a paragraph for every ingredient and measurement. 
            var strIngredient1 = $("<p>").text(JSON.stringify(response.drinks[0].strMeasure1 +" "+ response.drinks[0].strIngredient1));
            var strIngredient2 = $("<p>").text(JSON.stringify(response.drinks[0].strMeasure2 +" "+ response.drinks[0].strIngredient2));
            var strIngredient3 = $("<p>").text(JSON.stringify(response.drinks[0].strMeasure3 +" "+ response.drinks[0].strIngredient3));
            var strIngredient4 = $("<p>").text(JSON.stringify(response.drinks[0].strMeasure4 +" "+ response.drinks[0].strIngredient4));
            var strIngredient5 = $("<p>").text(JSON.stringify(response.drinks[0].strMeasure5 +" "+ response.drinks[0].strIngredient5));
            var strIngredient6 = $("<p>").text(JSON.stringify(response.drinks[0].strMeasure6 +" "+ response.drinks[0].strIngredient6));

            //  creates paragraphs for instructions and IBA
            var instructions = $("<p>").text(JSON.stringify(response.drinks[0].strInstructions));
            var IBA = $("<p>").text(JSON.stringify(response.drinks[0].strIBA));

            //  lines separating each section
            var line1 = $("<p>").text("-----------------------------------------------");
            var line2 = $("<p>").text("-----------------------------------------------");
            var line3 = $("<p>").text("-----------------------------------------------");
            
            //  appending variables in "drink-div"
            $("#drink-div").append(image);
            $("#drink-div").append(name);
            $("#drink-div").append(category);
            $("#drink-div").append(alcoholic);
            $("#drink-div").append(line1);
            $("#drink-div").append(glass);
            $("#drink-div").append(IBA);
            $("#drink-div").append(line2);
            $("#drink-div").append(strIngredient1);
            $("#drink-div").append(strIngredient2);
            $("#drink-div").append(strIngredient3);
            $("#drink-div").append(strIngredient4);
            $("#drink-div").append(strIngredient5);
            $("#drink-div").append(strIngredient6);
            $("#drink-div").append(line3);
            $("#drink-div").append(instructions);
    });
}

renderIngredients();
