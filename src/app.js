require('dotenv').config();
const { MongoClient } = require('mongodb');
const yargs = require('yargs');
const connection = require('./db/connection');
const {
	addMovie,
	removeMovieByName,
	updateMovieByName,
	findMovieByName,
	deleteAllNullMovies,
	listAll,
} = require('./movie/movie');

const main = async (args) => {
	try {
		if (args.add) {
			console.log('okay!');
			const movieObj = {
				title: args.title,
				actor: args.actor,
				genre: args.genre,
				release: args.release,
			};
			console.log(movieObj);
			await connection(addMovie, movieObj);
		} else if (args.remove) {
			const movieObj = { title: args.title };
			await connection(removeMovieByName, movieObj);
		} else if (args.find) {
			const movieObj = { title: args.title };
			await connection(findMovieByName, movieObj);
		} else if (args.update) {
			const movieObj = {
				title: args.title,
				newTitle: args.newTitle,
			};
			await connection(updateMovieByName, movieObj);
		} else if (args.deleteNull) {
			const movieObj = {
				title: null,
			};
			await connection(deleteAllNullMovies, movieObj);
		} else if (args.listAll) {
			await connection(listAll);
		}
	} catch (e) {
		console.log(e);
	}
};

main(yargs.argv).catch(console.error);
