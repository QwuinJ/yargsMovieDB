exports.addMovie = async (collection, movieObj) => {
	try {
		await collection.insertOne(movieObj);
		console.log(
			`Added ${movieObj.title} to database with the id ${movieObj._id}`
		);
	} catch (e) {
		console.log(e);
	}
};

exports.removeMovieByName = async (collection, movieObj) => {
	try {
		const result = await collection.deleteOne(movieObj);
		console.log(`Deleted ${movieObj.title}`);
		console.log(`${result.deletedCount} movie deleted from database`);
	} catch (e) {
		console.log(e);
	}
};
// swap all variables around (collection first)
exports.updateMovieByName = async (collection, movieObj) => {
	try {
		const title = movieObj.title;
		const newTitle = movieObj.newTitle;
		const result = await collection.updateOne(
			{ title: title },
			{
				$set: {
					title: newTitle,
				},
			}
		);
		console.log(`${result.matchedCount} document(s) matched the query`);
		console.log(`${result.modifiedCount} document(s) was/were updated`);
		console.log(`${result}`);
	} catch (e) {
		console.log(e);
	}
};

// example
const updateMovie = async (collection, updateObj) => {
	try {
		await collection.updateOne(
			{ title: updateObj.title },
			{ [updateObj.updateKey]: updateObj.updateValue }
		);
		console.log(`Updated ${updateObj.title}`);
	} catch (e) {
		console.log(e);
	}
};

exports.findMovieByName = async (collection, movieObj) => {
	try {
		const result = await collection.findOne(movieObj);
		if (result) {
			console.log(`Found a listing with the name ${result.title}`);
			console.log(result);
		} else {
			console.log(`Nothing found with that name`);
		}
	} catch (e) {
		console.log(e);
	}
};

exports.deleteAllNullMovies = async (collection, movieObj) => {
	try {
		const results = await collection.deleteMany(movieObj);
		console.log(`${results.deletedCount} movie(s) deleted`);
	} catch (e) {
		console.log(e);
	}
};

exports.listAll = async (collection) => {
	try {
		console.log(await collection.find({}).toArray());
	} catch (e) {
		console.log(e);
	}
};
