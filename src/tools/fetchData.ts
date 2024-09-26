const nocoApiURL = 'https://app.nocodb.com/api/v2/tables/'
const nocodbApiKey = 'prPeoSkiXT_hFBYWMOTTH07eDtFF3bsXkrqLel3-'

export async function apiData(url: string, method: string, data?: any) {
  const response = await fetch(`${nocoApiURL}${url}`, {
    method,
    headers: {
      'xc-token': nocodbApiKey,
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    ...(data ? { body: JSON.stringify(data) } : {})
  })
  const body = await response.json()
  // const result = JSON.parse(body)
  return body
}

export async function postData(url: string, data: any) {
  const response = await fetch(`${nocoApiURL}${url}`, {
    headers: {
      method: 'POST',
      'xc-token': nocodbApiKey,
      accept: 'application/json',
      'Content-Type': 'application/json'
    },
    ...(data ? { body: JSON.stringify(data) } : {})
  })
  const body = await response.json()
  // const result = JSON.parse(body)
  return body
}
