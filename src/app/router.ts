import { Router } from 'express'

export const router = Router()

//List categories
router.get('/categories', (req, res) => {
	res.send('Lista de categorias')
})

//Create category
router.post('/categories', (req, res) => {
	res.send('Criando categoria')
})

//List products
router.get('/products', (req, res) => {
	res.send('Lista de produtos')
})

//Create product
router.post('/products', (req, res) => {
	res.send('Criando produto')
})

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
