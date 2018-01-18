//--Delete data entry in database--//
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db)
{
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var queryEntry = {game: "Pallidins"};
	
	dbObj.collection("games").deleteOne({}, function(err, res)
	{
		if(err) throw err;
		console.log("1 document deleted");
		db.close();
	});
	

});
