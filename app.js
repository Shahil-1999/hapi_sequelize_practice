const express = require('express');
const app = express();
const hapi = require('@hapi/hapi');

require('dotenv').config();

const PORT = process.env.PORT;
// const sequelize = require('./config/sequelize')
const routes = require('./router/router')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package.json')


async function init() {
    const server = hapi.server({
        host: 'localhost',
        port: PORT,
    })
    const swaggerOptions = {
        info: {
            title: 'Sequelize Practice',
            version: Pack.version,
            description: 'This is a sample example of API documentation.'
        },
        // securityDefinitions: {
        //     jwt: {
        //         type: 'apiKey',
        //         name: 'Authorization',
        //         in: 'header'
        //     }
        // },
        // security: [{ jwt: [] }],

    };
    await server.register([
        Inert,
        Vision,
        // hapiJWT,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ]);

    // server.auth.strategy('Token Validation', 'jwt', {
    //     key: "ThisIsMySecretKey",
    //     validate: JWTValidation,
    //     verifyOptions: {
    //         algorithms: ['HS256']
    //     }
    // })

    server.route(routes)
    server.start()
    return server
}

init().then((server) => {
    console.log(`server started on : ${server.info.uri}. Check swagger at ${server.info.uri}/documentation`);
}).catch((err) => {
    console.error('error', err);
})
