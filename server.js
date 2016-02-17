//require the modules for the project 

var mongoose = require('mongoose');
var express = require('express');
var redis = require('redis');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var config = require('./config.js');

//Start the server

//Connection to redis
var redisConnect = function redisConnect(){
 console.log('Attempting the redis connection');   
var redisClient = redis.createClient(config.redisHost,config.redisURL);

redisClient.on('connect',function connectedRedis(){
    console.log('Successfuly connected to the Redis client')
    
});
redisClient.auth('123456', function (error) {
    if (error)
    {
        console.log('authentication failed');
    }
});

redisClient.on('error',function connectedRedis(){
    console.log('Failed to  connect to the Redis client')
    
});

redisClient.set('key22','value1',function (error,reply){
    if(error)
        console.log(error);
     else
     console.log('Set the value');
     console.log(reply);
});

} //end redisConnectFunction
    
redisConnect();
