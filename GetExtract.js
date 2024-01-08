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
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDMxMDMwNDIsImV4cCI6MTcwMzE4OTQ0MiwiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiIzQTE5OURDOTI4RUUxN0RDODE0QUE0NDdGMjg5OTlCRiIsImlhdCI6MTcwMzEwMzA0Miwic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.sdKLmmyhMF-Syo3aoPyVBFHU8RwMN99ZTXVSGMInoVhN1WIiwseLuQ8oUcF18hqkl6vgutTbXLyrNVoYOinYTflHjUSrPRMkxkGdKbshbwoycd2pszSsTmisOiFtyLzc0OKIQyQh1_gM-dwnCkTfXKniutQZE5zKjYbKUsuvxtr19MCACObDrRTB-KwMcb_0TiGXfJ7idZ-GsueG5jq1-3yOx0fKJ5INRf8MLO0iXVu9LXCzt5eDvFU-t2khuTbzGGTQEaD-9p7lw4g2eOTr3KVX20tTYVdM7nKOWT_KLkHkK58SnOn99LUruoAc015olAxncCdGk__eJZLu3dUQEA'
  
  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'catalogId' : 81513,
      'participantid' : 56250042,
      'username' : 40790325870
    },
  };
  
  let response = http.get( baseUrl + `/cloudloyalty/v1/participants/me/extract` , params,)
  check(response, {
    'Get response is status 200': r => r.status === 200,

      })

      console.log(response.status)
      console.log(response)
      }