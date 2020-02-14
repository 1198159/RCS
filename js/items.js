//Function to get json data from json/items.json and push them
var createPopup = (n, p, i, d) => {
	
	$("#Popup").empty();
	$("#Popup").css('display', 'block');
	$("#Popup").append(
		$("<div class='popup-header'></div>").append(
			$("<span id='Close' class='close'></span>").text("X").click(
				()=>{
					$("#Popup").css('display', 'none');
				}
			)
		),
		
		$("<div class='popup-content'></div>").append(
			$("<img src='"+i+"' alt = '"+n+"'></img>"),
			$("<div class='popup-subcontent'></div>").append(
				$("<name>"+n+"</name></br>"),
				$("<price>"+p+"</price></br>"),
				$("<button>Add To Cart</button></br>"),
				$("<description>"+d+"</description>")
				
			)
		)
	);

};

$.getJSON( "json/items.json", (data) => {
	for (var i = 0; i < data.items.length; i++) {
	
		let name = data.items[i].name;
		let price = data.items[i].price;
		let img = data.items[i].image;
		let description = data.items[i].description;
	
		$("#Content").append(
			$("<div id='Item"+i+"' class='item'></div>").append(
				$("<itemTitle>"+name+"</itemTitle>")
			).append(
				$("<img src='"+img+"' type='image/png' alt = '"+name+"'>")
			).append(
				$("<price>"+price+"</price>")
			).click(
				() => {
					createPopup(name, price, img, description);
				}
			)
		);
    }
		
	//Push to HTML

});

