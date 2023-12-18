// @ts-nocheck
import http from 'k6/http';
import { check } from 'k6';

export const options = {
   vus: 1,
   //duration: '10S',
  //stages: [
    //{ duration: '30s', target: 50},
    //{ duration: '150s', target: 100},
    //{ duration: '1s', target: 0 },
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
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDI5MTAzNDYsImV4cCI6MTcwMjk5Njc0NiwiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiI0RTMyRUZBMDI2NEUwNDgxODY5MTg1OEQxOUMwNzYwQiIsImlhdCI6MTcwMjkxMDM0Niwic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.0h4j26fdzz2n1cEWmvMJnNJxb-AbtMSp2xwyFC_9n1vGJQgfHnraW5GNbPTROjBIpsuPD0yDmtbO8jBwdpzbEOFlIayuiXvmtvYNEGvpVYbdNKa-vok2suXy8MOjWYZb1fVXD0JOwH9PLcveX1VmD_-qh-Gm-XQ-DYnK7k3LFnsXkvmSV2T4EZgxsJxKVFnDdh5bdDmh4GI4GaokhVEVHxxqRd0pYF02sCQPSfLFxBAN74MoGlLAXzjI5uRxpIjGt7gFf0NAdugtGQ28w_kxEmoVRovfAIXQW-zMYH5iiGZ75yKRTIKawG6h3ztMdn1ttNNZmlLughXY-7R8aHLr5A'
  
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

      console.log(response.status)
      console.log(response)
      }