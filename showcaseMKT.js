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
  
  let baseUrl = 'https://ltmmarketplaceapi-001.azurewebsites.net'
  let ocp = 'dde8f0f121924452a48872863c6091d8'
  let catalogId = '81513'
  let customerId = '50828'
  let participantid = '56250042'
  let campaignid = '71447'
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDI0NzI5OTEsImV4cCI6MTcwMjU1OTM5MSwiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiJGNUZERjM0MkRFREE3MEZCNjJBNjc1RTk1OTQ5RjQ2QyIsImlhdCI6MTcwMjQ3Mjk5MSwic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.AkJETf41jaZAiqHEAX_t5LuISKByuFzN67xS2dYIuhyPypQ-YtBtDVHbDDBVsriEaK4GKXjfvgfgRD7N6osjb6KDmSpebd04KS2vZMn3KiF8mwEUlysA-f5I_szhquoS4uDjjYhMCN6g7e7CoJfdM2-GxMIdwZN067GWQfD-Me4oDSuEtK9EolA0A_cZ7fphXnlfGyG0shxcGKrqqn-Yxj47YAgr85WglGLHHK4ktrNruuGBzoebi9ChZ258R5DSpDhpWyy3dSUAjEfYOuSvWPSWUlWJ4sV7NpwML6XT6AbbSNHDLrUh1ZAmTTne8aMT7lVwx0YOMSvejvd7Q4aPzg'
  
  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`
    },
  };
  
  let getSubscription = http.get( baseUrl + `/cloudloyalty/v2/showcases/5?identifier=familhao&cachedPrice=false=${participantid}&${catalogId}&${customerId}&${campaignid}` , params,)
  check(getSubscription, {'Get Subscriptions is status 200': (r) => r.status === 200,})

}