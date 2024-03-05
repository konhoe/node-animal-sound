const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Holy moly')
})

// app.get('/user/:id', (req, res) => {
//     const p = req.params
//     console.log(p.id)
//     const q = req.query
//     console.log(q)

//     res.json({'userid': q.name})
// })

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name)
    if(name == "dog") {
        res.json({'sound': '멍멍'})
    } else if(name == "cat") {
        res.json({'sound': '야옹'})
    } else if(name == "pig") {
        res.json({'sound': '꿀꿀'})
    } else {
        res.json({'sound': '???'})
    }
})


app.listen(3000)
