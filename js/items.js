
//Function to get json data from json/items.json and push them
$.getJSON( "json/items.json", function(data) {
	var items = [];
	for (var i = 0, len = data.items.length; i < len; i++) {
		//create an item from json data
		items.push( "<a href='" + data.items[i].link + "'><div id='hi' class='item'><p><img src='"
		 + data.items[i].image + "'></p><p><itemTitle>"
		 + data.items[i].name + "</itemTitle></br><price>"
		 + data.items[i].price + "</price></p></div></a>" );
    }
 	
	//Push to HTML
	$( "<div/>", {
    	"class": "content",
    	html: items.join( "" )
  	}).appendTo( "body" );
});