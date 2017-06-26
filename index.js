const axios = require('axios')

const url = 'https://github.com/'
const letters = 'abcdefghijklmnopqrstuvwxyz'

const availables = []

const promises = []

for (const a of letters) {
  for (const b of letters) {
    for (const c of letters) {
      promises.push((id => axios.get(url + id)
        .then(res => res.status === 404 && availables.push(id))
        .catch(err => console.log(id + ' errrrrrrrrror')))(`${a}${b}${c}`))
    }
  }
}

Promise.all(promises)
  .then(() => console.log(availables))
  .catch(err => {
    console.log(availables)
    console.error(err)
  })
