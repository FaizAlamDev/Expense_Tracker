const { Pool } = require('pg')
const usersRouter = require('express').Router()

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'testdb',
	password: 'alam',
	port: 5432,
})

usersRouter.get('/', async (req, res) => {
	const response = await pool.query('SELECT * FROM users')
	res.status(200).json(response.rows)
})

usersRouter.post('/', async (req, res) => {
	const { name, email } = req.body

	const response = await pool.query(
		'INSERT INTO users(name,email) VALUES($1, $2)',
		[name, email]
	)
	res.status(200).json({
		message: 'user added',
		body: {
			user: { name, email },
		},
	})
})

usersRouter.get('/:id', async (req, res) => {
	const id = req.params.id
	const response = await pool.query(`SELECT * FROM users WHERE id='${id}'`)
	res.status(200).json(response.rows)
})

usersRouter.delete('/:id', async (req, res) => {
	const id = req.params.id
	const response = await pool.query(`DELETE FROM users WHERE id=${id}`)
	res.json(`User ${id} deleted`)
})

module.exports = usersRouter
