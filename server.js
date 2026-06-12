const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const swaggerUi = require('swagger-ui-express') // ← Thêm thư viện này
const YAML = require('yamljs')                   // ← Thêm thư viện này
const path = require('path')                     // ← Thêm thư viện này

dotenv.config()

const app = express()

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json())

// --- CẤU HÌNH SWAGGER NẰM Ở ĐÂY ---
const swaggerDocument = YAML.load(path.join(__dirname, './shopping.swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const routes = require('./src/routes')
routes(app)

app.get('/', (req, res) => {
    res.send('API running....')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
    console.log(`Swagger docs có sẵn tại: http://localhost:${PORT}/api-docs`) // ← Log thêm để tiện click chuột
})