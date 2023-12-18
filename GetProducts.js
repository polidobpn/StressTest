// @ts-nocheck
import http from 'k6/http';
import { check } from 'k6';

export const options = {
   vus: 1,
   //duration: '10S',
  /*stages: [
    { duration: '30s', target: 1000 },
    { duration: '150s', target: 1000 },
    { duration: '1s', target: 0 },
  ],*/
};

export default function () {

 
  let baseUrl = 'https://cloudloyaltyapimanprd.azure-api.net'
  let ocp = 'dde8f0f121924452a48872863c6091d8'
  let catalogId = '81513'
  let customerId = '50828'
  let participantid = '56250042'
  let campaignid = '71447'
  let username = '40790325870'
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDI5MTQzOTMsImV4cCI6MTcwMzAwMDc5MywiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC5henVyZXdlYnNpdGVzLm5ldCIsImNsaWVudF9pZCI6InByZC43MTQ0NyIsImp0aSI6IkFGRjM0RjIyMzEyMEI0MzY1NkJGNTYyMzUxMjM3MDVFIiwiaWF0IjoxNzAyOTE0MzkzLCJzY29wZSI6IndlYnByZW1pb3MuYmFja29mZmljZS9hbGwucmVhZCB3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLndyaXRlIHdlYnByZW1pb3MuY2FtcGFpZ25zLzcxNDQ3In0.WjeXfbcMjm8X4ers7NCfB_yXmMG1wUxHGxV-P6utFBPzM45OMpgufQWBlCICy8DtbMkMTBFs-b3sLeWMVTRtr4OWza8C_rKDIix-GA3VYyALy8Xp7mlUCCyCJDD1hJdy7HJiz_shknKAqbNweMf_Z_RrzJRCYadzA00mKTkPJabxBqSOTcpcv4yRKAJbCqUuok4FjvHDh_DgtdbhqA1pZYRmlCazeGu7kSodh473qF6miS1C5Ee4dZknor6_v2RQKF4aojP3-ULULK4naElA1Rb_0ta3q8XN4km4KZjccb-5ZD03ij4zX6WpdeQfLLK4xaMa_rUHGIt_4NgL0IDX5w'
  
  

  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'catalogId' : 81513,
      'participantid' : 56250042
    
         },
  };

    let response = http.get( baseUrl + `/cloudloyalty/v1/products?sort=POPULARITY&_offset=0&_limit=10` , params,)
    check(response, {
    'Get response is status 200': r => r.status === 200,

      })

      console.log(response.status)
      console.log(response)
      }
