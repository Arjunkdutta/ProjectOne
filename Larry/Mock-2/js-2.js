$(document).ready(function () {

	let que = "";
	var special = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?@]/);

	$("#Sfood").click(function () {
		$("#drink-div").empty();
		$("#preset").empty();
		que = $("#Fsearch").val();
		console.log(que);
		if (que === undefined || que === "" || que === null || special.test(que) == true) {
			console.log(que);
			console.log("Check your input");
			M.toast({
				html: "Something's wrong with your input!",
			})
			return false;
		} else if ($("input[name=group1]:checked").val() === "food") {
			console.log(que);
			let radio = $("input[name=group1]:checked").val();
			console.log(radio);
			$.ajax({
				url: 'https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=' + que + '&app_id=4e81de9e&app_key=372f6145e47ac69d679f51f5e49be2ed',
				method: 'GET',
			}).then(function (response) {
				response.hits.forEach(function (element, i) {
					console.log(element.recipe);
					let recipe = element.recipe;
					$("#preset").append(`
					<div class='boxes'>
					<h4>" ` + recipe.label + `"</h4>
					<img src="` + recipe.image + `">
					<form action="` + recipe.url + `">
					<input type='submit' value='Full Recipe'>
					</form>
					<button data-target="modal` + i + `" class="btn modal-trigger" id="butt">Modal</button>
					<div  id="modal` + i + `"class="modal">
					<div class="modal-content">
					<h4>Ingredients</h4>
					<div id="item` + i + `"></div>
					</div>
					</div>`);



					recipe.ingredientLines.forEach(function (ing) {
						console.log(ing);
						$("#item" + i).append("<p>" + ing + "</p>");
					})
				})
			})

		} else {
			function renderIngredients() {

				var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + que;
				$.ajax({
					url: queryURL,
					method: "GET"
				}).then(function (response) {
					console.log(response);
					if (response.drinks === undefined || response.drinks === null) {
						$("#drink-div").append("<h3>Sorry I could not find a recipe</h3>")
					} else {
						//  console.log(response.drinks);      // for debugging purposes 

						//  storing object values in variables
						var image = $("<img>");
						image.attr("src", response.drinks[0].strDrinkThumb);
						var category = $("<p>").text(JSON.stringify(response.drinks[0].strCategory));
						var name = $("<p>").text(JSON.stringify(response.drinks[0].strDrink));
						var alcoholic = $("<p>").text(JSON.stringify(response.drinks[0].strAlcoholic));
						var glass = $("<p>").text(JSON.stringify(response.drinks[0].strGlass));

						//  creates a paragraph for every ingredient and measurement. 
						var strIngredient1 = $("<p>").text(JSON.stringify(response.drinks[0].strMeasure1 + " " + response.drinks[0].strIngredient1));
						var strIngredient2 = $("<p>").text(JSON.stringify(response.drinks[0].strMeasure2 + " " + response.drinks[0].strIngredient2));
						var strIngredient3 = $("<p>").text(JSON.stringify(response.drinks[0].strMeasure3 + " " + response.drinks[0].strIngredient3));
						var strIngredient4 = $("<p>").text(JSON.stringify(response.drinks[0].strMeasure4 + " " + response.drinks[0].strIngredient4));
						var strIngredient5 = $("<p>").text(JSON.stringify(response.drinks[0].strMeasure5 + " " + response.drinks[0].strIngredient5));
						var strIngredient6 = $("<p>").text(JSON.stringify(response.drinks[0].strMeasure6 + " " + response.drinks[0].strIngredient6));

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
					}
				});
			}
			renderIngredients();
		}
	})
	$(".dropdown-trigger").dropdown();
	$('select').formSelect();
	$('.tooltipped').tooltip();
	$('select').formSelect();
	$('.modal').modal();

	$("body").on("click", "#butt", function () {
		$('.modal').modal();
	})
});