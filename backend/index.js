import express from 'express';

const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/jokes',(req, res)=> {
    
    const jokes=[
        {
        id:1,
        title:'this is joke one',
        content:'a joke 1',
    },
    {
        id:2,
        title:'this is joke two',
        content:'a joke 2',
    },
    {
        id:3,
        title:'this is joke three',
        content:'a joke 3',
    },
    {
        id:4,
        title:'this is joke four',
        content:'a joke 4',
    },
    {
        id:5,
        title:'this is joke five',
        content:'a joke 5',
    },
];

    res.send(jokes);
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})