const { Client } = require('pg')

const connectDB = () => {
	try {
		const client = new Client({
			user: 'postgres',
			host: 'localhost',
			database: 'testdb',
			password: 'alam',
			port: 5432,
		})

		client
			.connect()
			.then((req, res) =>
				console.log('successfully connected to the database')
			)
	} catch (err) {
		console.log(`Error: ${err.message}`)
	}
}

module.exports = connectDB
