require('dotenv').config()
/*
To set temp vars in dev see create .env file
Note: for sls deploy add env to /conf/<env>.ymal
*/
module.exports = {

    //LOCAL SERVER if you are using node server instead of sls offline
    local_server: process.env.LOCAL_SERVER,
    local_port: 3000,
    region: process.env.REGION,

    // CORS 
    origin: '*',
    allowed: 'sup,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-Amz-User-Agent',
    
    mongo_endpoint:process.env.DB_URL,

};
