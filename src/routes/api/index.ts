import {Router} from 'express'
import productRoute from './products'

const route = Router()

route.use('/products', productRoute)

export default route
