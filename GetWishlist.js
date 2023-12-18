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

 
  let baseUrl = 'https://cloudloyaltyapimanprd001.azure-api.net'
  let ocp = 'dde8f0f121924452a48872863c6091d8'
  let catalogId = '81513'
  let customerId = '50828'
  let participantid = '56250042'
  let campaignid = '71447'
  let username = '40790325870'
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDI5MTEwNTUsImV4cCI6MTcwMjk5NzQ1NSwiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiJDRUI5ODYyQURCNDUyRjA4MUU4NzQ3MjA4MTVGRTg3NiIsImlhdCI6MTcwMjkxMTA1NSwic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.m00QmbQlR3yEzL33tCZdKnYePmLfg_zZF2UIFhTF0hgtGT8J1Ga9ClH8eo8mgdGm0VgMgly-VyRbb42uvFTsTcofjK3D4utM1eJJEYGggcRKFbThSlU5OBP0TMMBHnkWa0ygQm7MW3pld2l9M5uskTG0UljWei8Vwo1phOmjlYvhdUIz2taHUML9M3_VVZqv6wnrGQKKdqyyQ5jzcCT_Jp_RMljCDLdPCiMvOhDRS99d8I_nFnm7SvlkFRckKVWvIEia3YuUvkQz5YiKvW6HqmUFyGjooze8yRQB9t7bDZeoXfqGd3juUIS2urGckuBOFUVV7HLcRm02XcUHvnauKQ'
  
  

  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'catalogId' : 81513,
      'participantid' : 56250042
    
         },
  };

    let response = http.get( baseUrl + `/cloudloyalty/v1/participants/me/wishlist` , params,)
    check(response, {
    'Get response is status 200': r => r.status === 200,

      })

      console.log(response.status)
      console.log(response)
      }
