module.exports = {
    uri: 'youWish ',
    options: { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } }
            },
    secret: 'yourSecretToken'
}