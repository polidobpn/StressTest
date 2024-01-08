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
  
  let baseUrl = 'https://iam-mkp-apim-prd-001.azure-api.net'
  let ocp = '30ea21ef1f2540baa9bb2d00c9e1149e'
  let catalogId = '81513'
  let customerId = '50828'
  let participantid = '56250042'
  let campaignid = '71447'
  let username = '40790325870'
  let Authorization = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkIwRjRCOUIwQkIyQkVEMUM0NTBCMDNGMzdEOTdENzRFIiwidHlwIjoiYXQrand0In0.eyJpc3MiOiJodHRwczovL2lkZW50aXR5LnZlcnRlbS5jb20iLCJuYmYiOjE3MDIwODc3ODUsImlhdCI6MTcwMjA4Nzc4NSwiZXhwIjoxNzAyMTc0MTg1LCJhdWQiOlsiZW5nYWdlbWVudC9jYXJkcy1wYXJ0aWNpcGFudCIsImRpZ2l0YWwuYWNjb3VudCIsImZhbWlsaGFvIiwiaWFtIiwiZW5nYWdlbWVudC9sdWNreS1udW1iZXJzLWNvbnN1bHRpbmciLCJlbmdhZ2VtZW50L3F1aXotYW5kLXN1cnZleS10cmFuc2FjdGlvbmFsIiwidGVuYW50Iiwid2FsbGV0Iiwid2VicHJlbWlvcyJdLCJzY29wZSI6WyJjYXJkcy5wYXJ0aWNpcGFudCIsImRpZ2l0YWwuYWNjb3VudC9yZWFkIiwiZGlnaXRhbC5hY2NvdW50L3dyaXRlIiwiZW1haWwiLCJmYW1pbGhhby5yZWFkIiwiZmFtaWxoYW8ud3JpdGUiLCJmYW1pbGhhby9BcHAiLCJpYW0vb3RwIiwibHVja3ktbnVtYmVycy5jb25zdWx0aW5nIiwib3BlbmlkIiwicGhvbmUiLCJwcm9maWxlIiwicXVpei1hbmQtc3VydmV5LnRyYW5zYWN0aW9uYWwiLCJzdWJzY3JpcGl0aW9uLnRyYW5zYWN0aW9uYWwiLCJ0ZW5hbnQvZmFtaWxoYW8iLCJ3YWxsZXQudHJhbnNhY3Rpb25hbCIsIndlYnByZW1pb3MuY2FtcGFpZ25zLzcxNDQ3Iiwid2VicHJlbWlvcy5jYW1wYWlnbnMvNzE0NDgiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsib3RwX2NyZWRlbnRpYWxzIl0sImNsaWVudF9pZCI6IjgxYTExOGMwLWM2NjAtNDM4YS04ODhiLTA5MjM0ZDYwZmUzZSIsInJlc291cmNlX2lkIjoiNjRhMzEyY2QwYzE2MGFlY2E3MWM1NmE1IiwidGVuYW50X2lkIjoiNjRmMjE2ZjUyNTE4MWM1MDkwYzk2Y2JiIiwidGVuYW50X2FsaWFzIjoiRmFtaWxoYW8iLCJ1c2VybmFtZSI6IjY1MDlkNjdlNTM3ZjZhMjI0ZGY0NGM1NCIsInN1YiI6IjY1MDlkNjdlNTM3ZjZhMjI0ZGY0NGM1NCIsImF1dGhfdGltZSI6MTcwMTc5NzAxMCwiaWRwIjoibG9jYWwiLCJqdGkiOiI1MzdCMDQ3MzNERjQwRTNFQkUwQjVBRkU1NkRCQTNGMiJ9.k1Noghj0fGpBHc813oY8Uv9mTAwAfkuaq6ZXrzcvtcHoFpJodhYrSB_9hvUWTIQlxUomo5hHKcgEktIVn9hMjPjvAHgamgZdUCn_DVvGlDi8RzBCLOMuseTFzYK2krrDKjaDQaEP--KucLXuuyzReKIc3-U9DucZVTy6MwDs8OhRm9MpPxxdvPog1wkQc1q0pvPoMiXJLFPh-PtX0rOtQDsqeLBMgnIS9BqBYdLbQVHkTxfJcniPfleCGr6NDCt3YyP84Y0WL0uHo3ZYpTKPAvh7bkzKeyuiNM-Q-yylF5MoQdJmNuLztT-dQus_-9XRcyZNm3gKwESeceXksG8aBA'
  
  const params = {
    headers: {
      'Ocp-Apim-Subscription-Key': ocp ,
      'Authorization': `Bearer ${Authorization}`,
      'customerId':customerId,
      'catalogId' :catalogId,
      'participantid' :participantid,
      'campaignid':campaignid
    },
  };
  let response = http.get( baseUrl + `/cloudloyalty/v1/carts/me` , params,)
  check(response, {
    'Get response is status 200': r => r.status === 200,

      })

      console.log(response.status)
      console.log(response)
      }