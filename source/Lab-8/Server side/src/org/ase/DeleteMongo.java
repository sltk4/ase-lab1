package org.ase;

import org.bson.types.ObjectId;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

public class DeleteMongo {

	public boolean delete(String id){
		MongoClientURI uri  = new MongoClientURI("mongodb://root:password@ds035664.mongolab.com:35664/medcon"); 
		MongoClient client = new MongoClient(uri);
		DB db = client.getDB(uri.getDatabase());
		DBCollection Users = db.getCollection("Users");
		BasicDBObject query = new BasicDBObject();
		ObjectId oid = new ObjectId(id);
		query.put("_id", oid);
		Users.remove(query);
		client.close();
		return true;
	}
}
