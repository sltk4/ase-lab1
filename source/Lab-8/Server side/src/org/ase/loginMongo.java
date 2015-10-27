package org.ase;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;


public class loginMongo {

	public String loginmongo(String userName) {
	
		MongoClientURI uri = new MongoClientURI("mongodb://root:password@ds035664.mongolab.com:35664/medcon");
		MongoClient client = new MongoClient(uri);
		DB db = client.getDB(uri.getDatabase());
		DBCollection users = db.getCollection("Users");
		BasicDBObject whereQuery = new BasicDBObject();
		whereQuery.put("username", userName);
		DBCursor docs =users.find(whereQuery);
		System.out.println("here");
		while(docs.hasNext()){
			DBObject doc = docs.next();
			String b = doc.get("username").toString();
			if(b.equals(userName)){
				System.out.println("1");
				client.close();
				return doc.toString();
		}
		}
		client.close();
		return null;
	}

}
