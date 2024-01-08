// @ts-nocheck
import http from 'k6/http';
import { check } from 'k6';

export const options = {
   vus: 1,
   //duration: '10S',
  //  stages: [
  //   { duration: '120s', target: 1800},
  //   { duration: '60s', target: 1800},
  //   { duration: '1s', target: 0 },
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
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDMxODYxMTQsImV4cCI6MTcwMzI3MjUxNCwiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiIwQUQyNjFEQkMwRTk3QjNBODRDMDQxQjlENjU5NDY0NiIsImlhdCI6MTcwMzE4NjExNCwic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.ZDR5ljKcmGZA-Gcr8kWy3rDDc1luh6uPq5pOIAuFYUWBLgL72yfcHG1q3Mr-QTDZmjjHph8pMrgBlp9AgwoygndOJgsnglM_FvM6vkQbYRdTBEUT8tMWfNHTH-r_ibashE3t_-VeoOH6b4mIgUpQe7lq0vQJdsiVG1eEGsTvQOWUj9s4Ey08t2awAXclCINBuVcJe-PybzCxd7cfih6yNndunjD9bKTm71_G-NUKH8LNZq43c_cO7_Ip1jKBNqsYwAl1jYx75r3fLXuY9sLFl3pJUTjxHQjIaMf08YbUbAyVNFmhiLYn9yWM6ZcBbANUMqh52r86aHWVQoOR50Ta-w'
  
  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'catalogId' : 81513,
      'participantid' : 56250042,
      'username' : 40790325870
    },
  };
  
  let response = http.get( baseUrl + `/cloudloyalty/v1/purchases/me/orders?orderId=57194319&offset=0&limit=10` , params,)
  check(response, {
    'Get response is status 200': r => r.status === 200,

      })

      // console.log(response.status)
      // console.log(response)
      }