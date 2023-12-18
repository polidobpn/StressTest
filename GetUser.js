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
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDI1ODYxMjksImV4cCI6MTcwMjY3MjUyOSwiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiIzQkEwQjg1RTMxRkVCQ0Q4NzZFRjcyQ0RDQUNFOTY5RCIsImlhdCI6MTcwMjU4NjEyOSwic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.tnYvLASJcEApkFKMLPsjDapWvrG0w8FJcmomIfO_07v6yWzBRqmMEB4bDsd94Nz6s1bI-qETsSstL6wCaxalwcIxtoOZeNh3x4BYrPcJDEZlxlEOyNmx0qR_CrQbsaUQF7WXfB3758U6O_-3iEEXyYi5KiDm7vTzsUk2Anh90kRiWjoFKysm3i_v2QCUn7N6Y4BP1OJ_gtvtpZtRvjdHwoRj_w9nBYkCRhqHt3kDmb-c7CaGugcWjzVDcIg83wOzJVXMKItTn6vR3lMuCnCZ9qLMpTf6R6BIOEWQJXoNEEjDOfOYu2f_Og9sEpc9gkBtsDZHYDbqJ0MqMAztVRhCCA'
  
  

  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'catalogId' : 81513,
      'participantid' : 56250042
    
         },
  };

    let response = http.get( baseUrl + `/cloudloyalty/v1/participants/me` , params,)
    check(response, {
    'Get response is status 200': r => r.status === 200,

      })

      console.log(response.status)
      console.log(response)
      }
