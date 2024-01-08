// @ts-nocheck
import http from 'k6/http';
import { check } from 'k6';

export const options = {
   //vus: 1,
   //duration: '10S',
  stages: [
    { duration: '30s', target: 1100},
    { duration: '150s', target: 1100},
    { duration: '1s', target: 0 },
  ],
};

export default function () {
  
  let baseUrl = 'https://cloudloyaltyapimanprd001.azure-api.net'
  let ocp = 'dde8f0f121924452a48872863c6091d8'
  let catalogId = '81514'
  let customerId = '50828'
  let participantid = '56250042'
  let campaignid = '71447'
  let username = '40790325870'
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDM3ODQ2NDMsImV4cCI6MTcwMzg3MTA0MywiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiJBQjA5MUEyMEMwMTBGMEREMDVCOUIxODhCOTI5Q0NFRCIsImlhdCI6MTcwMzc4NDY0Mywic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.Zsvj2E7JuAnGGr559yYfQEjGidddr1ryIpPfqGPy0ZgRWskJprax0soNQkTULUbkqqxoOSAGlKNREo2hc0o3kHEbL2vkNOB8CaJFawlxpfuu2TGXgBlpjALizNwEINmqlnL5BLArC00SiSLbW_VKQrwPkrXTbq_5wbxq1zUW3uD1sg8P5xqIQSGO_mCn7TcOXsj-U38647PoYQazSuSxeLflrxR_q4IHaWaWy3Q3-46HrGooRXzVPIL6TmeM7NjUS3ItFIMy0kzu7Ri4NaljoFQ-E8ixnSEF86A7bFiursmaYwIJxPdCBiA4WQaQkZdZxfuOdwXUyGV31btY1WRAHg'
  
  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'catalogId' : 81514,
      'participantid' : 56250042
    },
  };
  
  let response = http.get( baseUrl + `/cloudloyalty/v1/products/skus/1e97b1a1a5e64be58dd7/availability?vendorid=46&originalid=130989` , params,)
  check(response, {
    'Get response is status 200': r => r.status === 200,

      })

      //console.log(response.status)
      // console.log(response)
      }
      