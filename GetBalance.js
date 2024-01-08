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
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFCMUE3MDNCRkRDMDNDNzI5NDAzREZCMzIyMjQxQTIwOTlFN0ZEMTNSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6InF4cHdPXzNBUEhLVUE5LXpJaVFhSUpubl9STSJ9.eyJuYmYiOjE3MDMwODQ3MDQsImV4cCI6MTcwMzE3MTEwNCwiaXNzIjoiaHR0cHM6Ly9mYW1pbGhhby1zc28tcHJvZC0wMDEuYXp1cmV3ZWJzaXRlcy5uZXQiLCJjbGllbnRfaWQiOiJwcmQuNzE0NDciLCJqdGkiOiI3QkJBRTkwODk5OUE4NUM3REIzRDFGQjZGNzFDQkYzMiIsImlhdCI6MTcwMzA4NDcwNCwic2NvcGUiOiJ3ZWJwcmVtaW9zLmJhY2tvZmZpY2UvYWxsLnJlYWQgd2VicHJlbWlvcy5iYWNrb2ZmaWNlL2FsbC53cml0ZSB3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyJ9.0rvh1hOk6rcfxgq68-OX_kUqhL4WeTts08OP56dw2oFtLCOTaabkd_J-HCnWDyxpwZdNqhN3qEdzNEw6Q6AXxRKiggffo2Vtus8BzfpoZwam5IR1o2S0vfyeaEsnS4JEC1DZ5okMKHPzTjaqP73W9BORzriMDMR7c4OVZ60jcfdi2h91ONHCumFRa3HcXAY5ur8XfbQ1Vrm4fnXv_3KacEYPlot2S9RPsNpFdUTYNNZzsVpc4Y_KttxjxDv4UyrITAB-tPmSq6m4e5lxgClDcClYMAyz0mPxLcgp9yFDneWMrhNl14ieupkNJU3jgVODcruoftsQxLr4fu5xpNqrdg'
  
  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'catalogId' : 81513,
      'participantid' : 56250042,
      'username' : 40790325870
    },
  };
  
  let response = http.get( baseUrl + `/cloudloyalty/v1/participants/me/balance` , params,)
  check(response, {
    'Get response is status 200': r => r.status === 200,

      })

      console.log(response.status)
      console.log(response)
      }