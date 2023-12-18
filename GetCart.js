// @ts-nocheck
import http from 'k6/http';
import { check } from 'k6';

export const options = {
   vus: 1,
   //duration: '10S',
  //stages: [
    //{ duration: '30s', target: 50},
    //{ duration: '150s', target: 100},
   // { duration: '1s', target: 0 },
  //],
};

export default function () {
  
  let baseUrl = 'https://cloudloyaltyapimanprd001.azure-api.net'
  let ocp = 'dde8f0f121924452a48872863c6091d8'
  let catalogId = '81513'
  let customerId = '50828'
  let participantid = '56250042'
  let campaignid = '71447'
  let username = '40790325870'
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDI5MDgwNTcsImV4cCI6MTcwMjk5NDQ1NywiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiI3ODUwN0YwREMzNzdBMjJDMUJGNDY2MUYzMEQzOEZEMCIsImlhdCI6MTcwMjkwODA1Nywic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.scpk0KgrMrqMJmMfqCN52jVTrAX2rgfxJeNwu1XW1QDC3zhselt-oDTI7MTlCUJqnb96GCjarszgBC6wgU_IFscyrW9HJeZaqJWLhXSZlyascgdzOyko8jYkd2ddrQFWF4yYCQMO5EwgzlLqc7PHbwml0dcDOMp94FTS1ok_ektNhjadDA3grC3R-cM_Gxax4gaVCj-QIgyk50GoHTJMWyGBXj5giFAuq1Uj4BsTy8nwvvyvQ7QDVfBGBR5X6tTWF3Q2mADEDnnARfZdCtBribPQ3r-0O3DRa-73HQzM6C2QSazwqmfv7on1w4UOR6A578kBOocqp8W7N7tuVDj3PA'
  
  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'catalogId' : 81513,
      'participantid' : 56250042
    },
  };
  
  let response = http.get( baseUrl + `/cloudloyalty/v1/carts/me` , params,)
  check(response, {
    'Get response is status 200': r => r.status === 200,

      })

      console.log(response.status)
      console.log(response)
      }