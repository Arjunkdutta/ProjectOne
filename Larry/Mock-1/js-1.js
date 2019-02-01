$(document).ready(function () {

	$(".dropdown-trigger").dropdown();
	//Options selection dropdown
	$('select').formSelect();
	$('.tooltipped').tooltip();
	$('select').formSelect();

	//AutoComplete Code

	// document.addEventListener('DOMContentLoaded', function () {
	// 	var elems = document.querySelectorAll('.autocomplete', );
	// 	var instances = M.Autocomplete.init(elems, options);
	// });
	// //Autocomplete Suggestions
	// $('input.autocomplete').autocomplete({
	// 	data: {
	// 		"Eggs": null,
	// 		"Rice": null,
	// 		"Ham": null,
	// 		"Beef": null,
	// 		"Chick": null,
	// 		"Pork": null,
	// 		"Turkey": null,
	// 		"Carrots": null,
	// 		"Tomatoes": null,
	// 		"Spinach": null,
	// 	},
	// });




	// let counter = 0;
	// $("#more").click(function () {
	// 	counter++;
	// 	$("#preset").append(
	// 		`<div class="row" id="` + counter + `">
	// 		<div class="col s12">
	// 			<div class="row">
	// 				<div class="input-field col s12">
	// 					<div class="col s1"  data-r="` + counter + `"> <a   id="Close" class=" btn-small waves-effect waves-light red btn tooltipped data-position="bottom"
	// 						 data-tooltip="Add Another Ingredient" data-r="` + counter + `" >
	// 							<i class="material-icons">close</i></a>
	// 					</div>

	// 					<div class="input-field col s11">
	// 						<div class="input-field col s12">
	// 							<i class="material-icons prefix">local_dining</i>
	// 							<input type="text" id="autocomplete-input" class="autocomplete` + counter + `"> <label for = "autocomplete-input" > Ingredients </label> </div> </div> </div> </div> </div> </div>`
	// 	)
	// });

	// $("body").on("click", "#Close", function () {
	// 	let theRow = $(this).attr("data-r");
	// 	console.log(theRow);
	// 	$("#" + theRow).remove();
	// });
});