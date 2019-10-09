
var myVar = JSON.parse(products);

$(document).ready(function(){
	
	$.each(myVar, function(i, item) {

		$('#product-wrapper').append(
			$('<div>').attr({"class" : "items",
							"id" : "item" + i}).append(
			$('<h3>').text(item.name).attr("class", "ware"),
			$('<p>').text(item.price).attr("class", "itemprice"),
			$('<img>').attr("src", item.thumbnail),
			$('<input>').attr({"type" : "button",
								"class" : "cart-btn"})))
	});

	$("#product-wrapper").css({ "display" : "flex",
								"flex-wrap" : "wrap",
								"width" : "100%"});
	$(".items").css({ "width" : "33%" })
	$(".cart-btn").attr({"value" : "Put in Cart"});

var id = "";
var idarray = [];
	$(".cart-btn").on('click', function() {
		let id = $(this).parent().attr("id");
		console.log(id);

		let name = $("#" + id).find(".ware").text();
		let price = $("#" + id).find(".itemprice").text();
		let amount = 1;
		
		if ($(`#shopping-cart tr > td:contains('${name}')`).length) {
				alert("no");
			} else {
		let newRow = "<tr><td>" + name + "</td><td>" + price + "</td><td class='amnt'>1</td><td class=\'total'>" + amount*price 
		+ "</td><td><button amount='1' class='incrementbtn' id='btn" + id + "'>+</button><button class='decrementbtn'>-</button></td></tr>";
		$("#shopping-cart").append(newRow);		
	};
	/*use either off() or one() -> unbind() works too but is deprecated*/
	$(".incrementbtn").off().on('click', function() {
		let y = $(this).parent().parent().find(".amnt").text();
		console.log(y);
		y++
		console.log(y);
		$(this).parent().parent().find(".amnt").text(y);
		
	
		/*$("#shopping-cart tr").find(".amnt").text(x);
		$("#shopping-cart tr").find(".total").text(x);*/
	})

	})


});