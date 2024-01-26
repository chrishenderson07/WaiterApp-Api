import express from 'express'
import mongoose from 'mongoose'

//A url e porta do mongoose é a mesma que definimos na config do MongoDB no docker
mongoose
	.connect('mongodb://localhost:27017')
	.then(() => {
		const app = express()
		const port = 3001

		app.listen(port, () => {
			console.log(`Server is running on port ${port}`)
		})
	})
	.catch((err) => console.error('Failed to connect to MongoDB', err))
