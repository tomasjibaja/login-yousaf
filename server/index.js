const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/user')

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["https://login-yousaf-client.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}))

mongoose
    .connect(`mongodb+srv://kintadeaudiovisual:${'ot6T17HI6wg5qMNh'}@clusterkintade.udyiike.mongodb.net/register-yousaf?retryWrites=true&w=majority&appName=ClusterKintade`)
    .then( () => {
        console.log('Conexión a DB exitosa.');
        app.use('/', (req, res) => {
            res.send('Server running succesfully.')
        })
     } )
    .catch((err) => console.log(err));


app.post('/register', (req, res) => {
    UserModel.findOne({email: req.body.email})
    .then(user => {
        if(user) {
            res.json("E-mail already used")
        } else {
            UserModel.create(req.body)
            .then(users => {res.json(users)})
            .catch(err => console.log(err))
        }
    })
})

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("Incorrect password")
            }
        } else {
            res.json("User doesn't exists")
        }
    })
})

app.get('/users', (req, res) => {
    UserModel.find()
    .then(results => res.json(results))
    .catch(err => console.log(err))
})

app.listen(3001, () => {
    console.log('Server running on PORT 3001')
})