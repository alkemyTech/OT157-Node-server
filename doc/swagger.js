const swaggerJSDoc = require('swagger-jsdoc');
const path = require('path');


const swaggerDefinition = {
    definition: {
        openAPI: '3.0.1',
        info: {
            title: 'ONG-OT157-API',
            version: '1.0.0',
        },
        servers: [
            { 
                url: 'http://localhost:3000' 
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            },
            schemas: {
                Categories: {
                    type: 'object',
                    required: ['name'],
                    properties: {
                        name: {
                            type: 'string',
                        },
                        description: {
                            type: 'string',
                        },
                        image: {
                            type: 'string',
                        }
                    }
                }
            }
        },
        security: [{
            bearerAuth: []
        }]
    },
    paths: {
        '/categories': {
            get: {
                tags: ['Categories'],
                summary: 'Get all categories',
                description: `Returns a list of ten category names per page and a previus and next page according the page you're currently on.`,
            }
        }
    }

}

const swaggerOptions = {
    swaggerDefinition,
    apis: [`${__dirname}/routes/categories.js`],
}



module.exports = swaggerJSDoc(swaggerOptions);