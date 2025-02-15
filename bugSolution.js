```javascript
const MongoClient = require('mongodb').MongoClient;

async function main() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Correct use of $inc operator, incrementing only the numeric 'age' field
    const result = await collection.updateOne({ name: 'John Doe' }, { $inc: { age: 1 } });
    console.log(result);
  } catch (error) {
    console.error('Error updating document:', error);
  } finally {
    await client.close();
  }
}

main().catch(console.dir);
```