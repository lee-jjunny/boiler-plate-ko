const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require("./models/User");

/* MongoDB 연결 */
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log('MongoDB err >> ', err));
/* MongoDB 연결 */

/* bodyParser : client에서 가져오는 정보를 client에서 분석해서 사용할 수 있게 함 */
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());

app.get('/', (req, res) => { res.send('Hello World! 하하하이!~~!!22'); });

app.post('/register', (req, res) => {
    // 회원가입 정보를 client에서 가져오고 DB에 저장
    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        })
    });
});

// app.get('/getUser', (req, res) => {
//     const user = new User(req.body);

//     user.save((err, userInfo) => {
//         if(err) return res.status(500).send({error: 'database failure'});
//         return res.json(userInfo); 
//     });

// })

app.listen(port, () => { console.log(`Example app listening on port ${port}`); });