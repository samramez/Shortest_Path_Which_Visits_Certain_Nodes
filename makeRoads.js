makeRoads("start", "apple", 2, "eggs", 2, "nuts", 3, "end", 1);
makeRoads("apple", "meat", 1);
makeRoads("meat", "eggs", 1, "juice", 2);
makeRoads("eggs", "juice", 2, "end", 1, "nuts", 2);
makeRoads("juice", "nuts", 2);
makeRoads("nuts", "end", 1);



console.log("User wants to buy the following items: meat, eggs and juice");

//making an array of items
var items = ["meat","eggs","juice"];
var order = "start";
var startPoint = "start";

while ( items.length > 0){

	var minDist = 100;
	var ClosestItem;
	
	for(i=0 ; i<items.length ; i++){
		if(Dijkstra(roads, startPoint, items[i]) < minDist){
			minDist = Dijkstra(roads, startPoint, items[i]);
			ClosestItem = items[i];
		}
	}
	//alert("closest item is: " + ClosestItem);
	startPoint = ClosestItem;

	//adding to the pah
	order += " --> " + startPoint;

	//deleteing the item from the array
	var index = items.indexOf(ClosestItem);
	if (index > -1) {
   		items.splice(index, 1);
	}
	//console.log(items);

}
console.log(order);