// @ts-nocheck
import http from 'k6/http';
import { check } from 'k6';

export const options = {
   vus: 1,
   //duration: '10S',
  /*stages: [
    { duration: '120s', target: 1800 },
    { duration: '180s', target: 1800 },
    { duration: '1s', target: 0 },
  ],*/
};

export default function () {

 
  let baseUrl = 'https://iam-mkp-apim-prd-001.azure-api.net'
  let ocp = '30ea21ef1f2540baa9bb2d00c9e1149e'
  let catalogId = '81513'
  let customerId = '50828'
  let participantid = '56250042'
  let campaignid = '71447'
  let username = '40790325870'
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjAxNEM1NEQ3OUQ0RTk5MjNGM0RBQjM5OUQzNzVFQzJDIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LmZhbWlsaGFvLmNvbSIsIm5iZiI6MTcwNDQ4Mjg0MCwiaWF0IjoxNzA0NDgyODQwLCJleHAiOjE3MDQ1NjkyNDAsImF1ZCI6WyJlbmdhZ2VtZW50L2NhcmRzLXBhcnRpY2lwYW50IiwiZGlnaXRhbC5hY2NvdW50IiwiZmFtaWxoYW8iLCJpYW0iLCJlbmdhZ2VtZW50L2x1Y2t5LW51bWJlcnMtY29uc3VsdGluZyIsImVuZ2FnZW1lbnQvcXVpei1hbmQtc3VydmV5LXRyYW5zYWN0aW9uYWwiLCJ0ZW5hbnQiLCJ3YWxsZXQiLCJ3ZWJwcmVtaW9zIl0sInNjb3BlIjpbImNhcmRzLnBhcnRpY2lwYW50IiwiZGlnaXRhbC5hY2NvdW50L3JlYWQiLCJkaWdpdGFsLmFjY291bnQvd3JpdGUiLCJlbWFpbCIsImZhbWlsaGFvLnJlYWQiLCJmYW1pbGhhby53cml0ZSIsImZhbWlsaGFvL0FwcCIsImlhbS9vdHAiLCJsdWNreS1udW1iZXJzLmNvbnN1bHRpbmciLCJvcGVuaWQiLCJwaG9uZSIsInByb2ZpbGUiLCJxdWl6LWFuZC1zdXJ2ZXkudHJhbnNhY3Rpb25hbCIsInN1YnNjcmlwaXRpb24udHJhbnNhY3Rpb25hbCIsInRlbmFudC9mYW1pbGhhb3YyIiwid2FsbGV0LnRyYW5zYWN0aW9uYWwiLCJ3ZWJwcmVtaW9zLmNhbXBhaWducy83MTQ0NyIsIndlYnByZW1pb3MuY2FtcGFpZ25zLzcxNDQ4Iiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbIm90cF9jcmVkZW50aWFscyJdLCJjbGllbnRfaWQiOiIxZjk4M2ZmYS01NzFkLTQzMDQtOGY0Zi04OWU0MDIyODg4NDciLCJyZXNvdXJjZV9pZCI6IjY1NjBkZTc0OGFlZmEyMGQ3Yjg4OTU5MSIsInRlbmFudF9pZCI6IjY1NjBkYzdjZmQ0NTllZmY5Mjc0ZmRhZCIsInRlbmFudF9hbGlhcyI6IkZhbWlsaGFvdjIiLCJ1c2VybmFtZSI6IjY1OGFmNGQ1MTUxOTZmNmE5NDRkZGJiNCIsInN1YiI6IjY1OGFmNGQ1MTUxOTZmNmE5NDRkZGJiNCIsImF1dGhfdGltZSI6MTcwNDQ4Mjg0MCwiaWRwIjoibG9jYWwiLCJqdGkiOiI0NEE4NTJGMUMwMTlEMTk5QzJCODNEQzUyMTIyODUxNSJ9.bUepLksP2Qp6VYr3rV_NyfsgVrbRuLKg2-U9oCaVpYFGQP3wcKFQSF-MUWqUbrpHOJpUEah2L9GwcjVYeri5JDK7dQ_5Gi7TqLukmfCutzb5vWF9VEz3PH7KYjoSDr6vJrjrieZt1Bds8_C2V0e0prLRoJyfBD5m5dj6jhbQXcGCpYvXeOvVcvZkPDKD3RF5e-X2ryMotI3qsGFBCvlpli5pnJo58EqmWpFI65Td4rXM_WhMIqi0sCOOikjUMAS9tbpKJmVjEcW5y61ORh6brQPsVm8TOLccGpkpcGS96Lwi1fUNfKqpu-GsFR71ADqAoc6L912Mf_DsMF0A868Atw'
  
  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'catalogId' : 81513,
      'participantid' : 56250042,
      'campaignid': campaignid
    },
  };

    let response = http.get( baseUrl + `/cloudloyalty/v1/participants/me` , params,)
    check(response, {
    'Get response is status 200': r => r.status === 200,

      })

      console.log(response.status)
      console.log(response)
      }
