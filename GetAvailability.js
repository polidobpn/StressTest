// @ts-nocheck
import http from 'k6/http';
import { check } from 'k6';

export const options = {
   vus: 1,
   //duration: '10S',
  // stages: [
  //   { duration: '30s', target: 500},
  //   { duration: '150s', target: 1000},
  //  { duration: '1s', target: 0 },
  // ],
};

export default function () {
  
  let baseUrl = 'https://cloudloyaltyapimanprd001.azure-api.net'
  let ocp = 'dde8f0f121924452a48872863c6091d8'
  let catalogId = '81513'
  let customerId = '50828'
  let participantid = '56250042'
  let campaignid = '71447'
  let username = '40790325870'
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDMyNzY0NjAsImV4cCI6MTcwMzM2Mjg2MCwiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiJCRDEyNzA2OEYzRTY1Q0VBQTI2Q0YzNDgxODRDNTVEOCIsImlhdCI6MTcwMzI3NjQ2MCwic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.m2cEDdtG5tCqNzVU4iAwEQIXcHcffpmQFgTWDMtj_1yNVj_fAgQoOQ-71mIKjjzOk1Ie-GhZJo2wM3-MuO8kRMvp0m1YjqsvrW6Gd4y5rJMqeRwtZ7awTfoFP_jbKoR9OR89A-ALcoz9tH_aLuJmvLSyMjRr5XWIN5Xtp20DKtXsKf9DhnIDJg0ZAgnwNXLPSPIMOtKlytfePE-Qj7IHhjnOgGQA-K95sFYRnBaJJfwdiyvFQ4uDgdsUEVo83mNGbtiNauFbgN9JyJBqTR4CZ4PuozjaSIvF5V17DRTv7AKu5IBqmFNqN-Wj7SB0zjyySSL-kYqgBosOqyE9r0HXvw'
  
  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'customerId':'50828',
      'catalogId' : '81513',
      'participantid' : '56250042'
    },
  };
  
  let response = http.get( baseUrl + `/cloudloyalty/v1/products/skus/131eff75ae124d719c34/availability?vendorid=123523&originalid=590` , params,)
  check(response, {
    'Get response is status 200': r => r.status === 200,

      })

      console.log(response.status)
      // console.log(response)
      }