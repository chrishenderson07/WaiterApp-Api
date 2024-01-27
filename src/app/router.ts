import path from 'node:path'

import { Router } from 'express'
import multer from 'multer'

import { listCategories } from './useCases/categories/listCategories'
import { createCategory } from './useCases/categories/createCategory'
import { listProducts } from './useCases/products/listProducts'
import { createProduct } from './useCases/products/createProducts'
export const router = Router()

const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, '..', '..', 'uploads'))
		},
		filename(req, file, callback) {
			callback(null, `${Date.now()}-${file.originalname}`)
		},
	}),
})

//List categories
router.get('/categories', listCategories)

//Create category
router.post('/categories', createCategory)

//List products
router.get('/products', listProducts)

//Create product
router.post('/products', upload.single('image'), createProduct)

//Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
	res.send('Lista de produtos por categoria')
})

// List orders
router.get('/orders', (req, res) => {
	res.send('Lista de pedidos')
})

// Create order
router.post('/orders', (req, res) => {
	res.send('Criando pedido')
})

//Change order status
router.patch('/orders/:orderId', (req, res) => {
	res.send('Alterando status do pedido')
})

// Delete/Cancel order
router.delete('/orders/:orderId', (req, res) => {
	res.send('Deletando pedido')
})
