const https = require('https')
const options = {
  hostname: 'api.nasa.gov',
//   port: 443,
  path: '/planetary/apod?api_key=DEMO_KEY',
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()