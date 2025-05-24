const express = require('express')
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pw0hmwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function run() {
    try {

        const tipsCollection = client.db('tipsdb').collection('tips')


        app.get('/api/sharetips', async (req, res) => {
            const result = await tipsCollection.find().toArray()
            res.send(result)
        })


        // db and collection reference for data retrieve
        const gardenersCollection = client.db('gardenersdb').collection('gardener')

        // active data retrieve
        app.get('/api/gardeners', async (req, res) => {
            const result = await gardenersCollection.find({ status: "active" }).limit(6).toArray()
            res.send(result)
        });
        // allgardeners profile
        app.get('/api/allgardeners', async (req, res) => {
            const result = await gardenersCollection.find().toArray()
            res.send(result)
        });
        // top trending tips
        app.get('/api/top-trending', async (req, res) => {
            const cursor = { trending: "top" };
            const result = await gardenersCollection.find(cursor).toArray()
            res.send(result)
        });

        // public tips
        app.get('/api/publictips', async (req, res) => {
            const cursor = { availability: "Public" };
            const result = await tipsCollection.find(cursor).toArray();
            res.send(result)
        })
         
        app.get('/api/publictips/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await tipsCollection.findOne(query);
            res.send(result)
        })

        app.get('/api/sharetips/:email', async (req, res) => {
            const email = req.params.email;
            const query = { userEmail: email }
            const result = await tipsCollection.find(query).toArray();
            res.send(result)
        })

        app.get('/api/updatetips/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await tipsCollection.findOne(query);
            res.send(result)
        })

        app.post('/api/sharetips', async (req, res) => {
            console.log('data in the server', req.body);
            const newTips = req.body
            const result = await tipsCollection.insertOne(newTips)
            res.send(result)
        })

        app.put('/api/updatetips/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const updatedTips = req.body;

            const updatedDoc = {
                $set: updatedTips
            };

            const captions = { upsert: true }

            const result = await tipsCollection.updateOne(filter, updatedDoc, captions);
            res.send(result);
        });
        app.delete('/api/sharetips/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await tipsCollection.deleteOne(query);
            res.send(result)
        })



        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('gardern guidance server is running smoothly...');
})


app.listen(port, () => {
    console.log(`server is running from: ${port}`);
})