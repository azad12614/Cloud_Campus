require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// https://github.com/iamshaunjp/MERN-Auth-Tutorial/tree/lesson-17
// https://www.youtube.com/watch?v=3yaHWZdH0FM&list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT&index=10&ab_channel=NetNinja

const url = `${process.env.DB_URL}`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const Alumni = client.db("Cloud_Campus").collection("Alumni");
    const Course = client.db("Cloud_Campus").collection("Course");
    const Section = client.db("Cloud_Campus").collection("Section");
    const Teacher = client.db("Cloud_Campus").collection("Teacher");

    // API 1
    app.post("/add-member", async (req, res) => {
      const member = req.body;
      // insert mongodb
      const result = await Alumni.insertOne(member);
      res.send(result);
    });

    // API 2
    app.get("/all-members", async (req, res) => {
      const result = await Alumni.find({}).toArray();
      res.send(result);
    });

    // API 3
    app.get("/member/:id", async (req, res) => {
      const id = req.params.id;
      const result = await Alumni.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // API 4
    app.put("/update-member/:id", async (req, res) => {
      const id = req.params.id;
      const memberId = { _id: new ObjectId(id) };
      const memberUpdate = req.body;
      const updates = { $set: memberUpdate };
      // update mongodb
      const result = await Alumni.updateOne(memberId, updates);
      res.send(result);
    });

    // API 5
    app.delete("/delete-member/:id", async (req, res) => {
      const id = req.params.id;
      const memberId = { _id: new ObjectId(id) };
      // delete mongodb
      const result = await Alumni.deleteOne(memberId);
      res.send(result);
    });

    //API 6
    app.post("/add-course", async (req, res) => {
      const subject = req.body;
      // insert mongodb
      const result = await Course.insertOne(subject);
      res.send(result);
    });

    // API 7
    app.get("/all-courses", async (req, res) => {
      const result = await Course.find({}).toArray();
      res.send(result);
    });

    // API 8
    app.get("/course/:id", async (req, res) => {
      const id = req.params.id;
      const result = await Course.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // API 9
    app.put("/update-course/:id", async (req, res) => {
      const id = req.params.id;
      const subjectId = { _id: new ObjectId(id) };
      const subjectUpdate = req.body;
      const updates = { $set: subjectUpdate };
      // update mongodb
      const result = await Course.updateOne(subjectId, updates);
      res.send(result);
    });

    // API 10
    app.delete("/delete-course/:id", async (req, res) => {
      const id = req.params.id;
      const subjectId = { _id: new ObjectId(id) };
      // delete mongodb
      const result = await Course.deleteOne(subjectId);
      res.send(result);
    });

    // API 11
    app.post("/add-section", async (req, res) => {
      const section = req.body;
      // insert mongodb
      const result = await Section.insertOne(section);
      res.send(result);
    });

    // API 12
    app.get("/all-sections", async (req, res) => {
      const result = await Section.find({}).toArray();
      res.send(result);
    });

    // API 13
    app.get("/section/:id", async (req, res) => {
      const id = req.params.id;
      const result = await Section.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // API 14
    app.put("/update-section/:id", async (req, res) => {
      const id = req.params.id;
      const sectionId = { _id: new ObjectId(id) };
      const sectionUpdate = req.body;
      const updates = { $set: sectionUpdate };
      // update mongodb
      const result = await Section.updateOne(sectionId, updates);
      res.send(result);
    });

    // API 15
    app.delete("/delete-section/:id", async (req, res) => {
      const id = req.params.id;
      const sectionId = { _id: new ObjectId(id) };
      // delete mongodb
      const result = await Section.deleteOne(sectionId);
      res.send(result);
    });

    // API 16
    app.post("/add-sir", async (req, res) => {
      const sir = req.body;
      // insert mongodb
      const result = await Teacher.insertOne(sir);
      res.send(result);
    });

    // API 17
    app.get("/all-sir", async (req, res) => {
      const result = await Teacher.find({}).toArray();
      res.send(result);
    });

    // API 18
    app.get("/sir/:id", async (req, res) => {
      const id = req.params.id;
      const result = await Teacher.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    // API 19
    app.put("/update-sir/:id", async (req, res) => {
      const id = req.params.id;
      const sirId = { _id: new ObjectId(id) };
      const sirUpdate = req.body;
      const updates = { $set: sirUpdate };
      // update mongodb
      const result = await Teacher.updateOne(sirId, updates);
      res.send(result);
    });

    // API 20
    app.delete("/delete-sir/:id", async (req, res) => {
      const id = req.params.id;
      const sirId = { _id: new ObjectId(id) };
      // delete mongodb
      const result = await Teacher.deleteOne(sirId);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

app.use(express.static(__dirname + "../../UI"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "UI", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(`Example app listening at https://cloud-campus-backend.onrender.com/`);
});
