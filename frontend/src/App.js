import axios from 'axios'
import React, { useState, useEffect } from 'react'

const App = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3001/users').then((response) => {
			setUsers(response.data)
		})
	}, [])
	return (
		<div>
			<h2>All users</h2>
			{users.map((user) => (
				<p key={user.id}>
					{user.name} - {user.email}
				</p>
			))}
		</div>
	)
}

export default App
