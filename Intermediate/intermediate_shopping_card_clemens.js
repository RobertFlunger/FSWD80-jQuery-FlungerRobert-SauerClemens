var number_of_articles = articles.length;
var price_item = 0

console.log(number_of_articles);

for (i = 0; i < number_of_articles; i++)
      {
         // definition of the new element
         var newItem_1 = '<div><img src='+articles[i].link_online_pic+' alt='+articles[i].description+'><p class="description_img">'+ '<span class="number_of_stock">' + articles[i].description + '<br>' + ' We still have ' + articles[i].number_of_stock + ' planes for you!</span>' + '<br>' + '<span class="price_text_css">That is your price per item! </span>' + '<span class="price_css">' + articles[i].price + '</span>'+ '<span> ' + articles[i].currency + '</span>' + '</span>' + '<br>' +  '<button type="buy_item">Buy me!</button>' + '</p></div>'; 
         // insert the new element  
         $(".wrapper").append(newItem_1); 
         }

$(".wrapper").css({"display":"flex","flex-wrap":"wrap","width":"100%",});
$(".wrapper>div>img").css({"width":"600px" , "height" : "400px", "object-fit":"cover",});
$(".wrapper>div>p").css({"text-align":"center" , "font-family":"arial", "font-size" : "20px", });


$(".buy_item").click( function() {
  price_item = $(this).parent().children("span:eq(2)").find(".price_css").text();
  console.log(price_item);
});

// parent().children("span:eq(2)")