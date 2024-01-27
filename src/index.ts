import express from 'express'
import mongoose from 'mongoose'
import path from 'node:path'

import { router } from './app/router'

//A url e porta do mongoose é a mesma que definimos na config do MongoDB no docker
mongoose
	.connect('mongodb://localhost:27017')
	.then(() => {
		const app = express()
		const port = 3001

		app.use(
			'/uploads',
			express.static(path.resolve(__dirname, '..', 'uploads')),
		)
		app.use(express.json())
		app.use(router)

		app.listen(port, () => {
			console.log(`Server is running on port ${port}`)
		})
	})
	.catch((err) => console.error('Failed to connect to MongoDB', err))
