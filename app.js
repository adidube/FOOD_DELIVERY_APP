// app.js

const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const db = require('./index');
const pricingService = require('./service/pricingService');
const { validateRequest } = require('./middleware/validationMiddleware');
const priceRoutes=require("./routes/priceRoutes")
const errorHandler = require('./errorHandlers/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Swagger setup
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Calculate price endpoint
app.use('/',priceRoutes);

//Global Error handling middleware
app.use(errorHandler);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  db.sequelize.sync().then(() => {
      console.log("database connected sussefully");
     }).catch(err=>console.log("Database error occured"));
    
})