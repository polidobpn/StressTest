// @ts-nocheck
import http from 'k6/http';
import { check } from 'k6';

export const options = {
   //vus: 1,
  //duration: '10S',  
  stages: [
    { duration: '30s', target: 100},
    { duration: '180s', target: 900},
    { duration: '1s', target: 0 },
  ],
};

export default function () {
  
  let baseUrl = 'https://cloudloyaltyapimanprd001.azure-api.net'
  let ocp = 'dde8f0f121924452a48872863c6091d8'
  let catalogId = '81513'
  let customerId = '50828'
  let participantid = '56250042'
  let campaignid = '71447'
  let username = '40790325870'
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDMxNzE1NzUsImV4cCI6MTcwMzI1Nzk3NSwiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiJENzdCOTkyQTBDOEM2N0IyNzBERjFEQ0ZFMjg0MEQ3NCIsImlhdCI6MTcwMzE3MTU3NSwic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.PbdpHUSNW5wH0Z8oq4V0IMn1B02I8X8aB3x-VvJ8A_BkrOR9uWYh8620x4TsGGBTwqC1zXiDduyQHjFeIdhJOyzPUO2vXspVIw7dRwhnqAcKlHeBIDRnSs7NmowyS5d4mTGgE5IiJAcU_l-mpuYOEzrq82RLk-wgwQUEbrmIuUs1gHyS6VI0v7Br21eneGy9YGakeR_yBaUPq3F6oLQjnZT9KGb_mDmhMaDLWg3VNYSc7cAUkeq1Mf62VUl0cboB9l_QzQBGGOd_sFAzIx6dFcKUrtxeyopIBOgeHf946uOo7Ujz3pbMpZN9hlZsYmaFKW9KEcm6_on6yAPLHcC4bg'
  
  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'catalogId' : 81513,
      'participantid' : 56250042
    },
  };
  
  let response = http.get( baseUrl + `/cloudloyalty/v2/showcases/5?identifier=familhao&cachedPrice=false` , params,)
  check(response, {
    'Get response is status 200': r => r.status === 200,

      })

    //  console.log(response.status)
    //  console.log(response)
      }
