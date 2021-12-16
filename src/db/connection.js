const { MongoClient } = require('mongodb');

const connection = async (crudFunc, movieObj) => {
	try {
		const uri =
			'mongodb+srv://Admin:5mpGvvLo34D9xCFV@cluster0.9ezja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

		const client = new MongoClient(uri);
		await client.connect();
		const db = client.db('Movies');
		const collection = db.collection('FaveMovies');
		await crudFunc(collection, movieObj);
		client.close();
	} catch (e) {
		console.log(e);
	}
};

module.exports = connection;
