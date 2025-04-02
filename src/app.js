import express from 'express'
import healthcheckRoute from './routes/healthcheck.routes.js'

const app = express()

app.use('/api/v1/healthcheck', healthcheckRoute)

export default app