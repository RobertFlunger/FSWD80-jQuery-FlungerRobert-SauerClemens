$(".wrapper").css({"display":"flex","width":"100%","cursor":"pointer", "border": "solid black",});

$(".wrapper>div>img").css({"width":"400px" , "height" : "100%", "object-fit":"cover",});

$("#Gift_Box").on('click', function() {
	alert("You clicked on the Gift Box");})

$("#Santa_Claus").on('click', function() {
	alert("You clicked on the Santa Claus");})

$("#Christmas_Bell").on('click', function() {
	alert("You clicked on the Christmans Bell");})

$(".wrapper2").css({"display":"flex", "flex-wrap":"wrap", "width":"100%","cursor":"pointer"});

$(".pictures_width").css({"width":"350px","height":"100%","object-fit":"cover",});

$('.pictures_width').click(function() {
        $(this).css({"visibility":"hidden",});
        });