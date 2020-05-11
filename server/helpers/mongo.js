const mongodb = require('mongodb')
module.exports = {
  /** @type {mongodb.MongoClient} */
  client: null,
  /** @type {mongodb.Db} */
  db:null,
  connect(url, db) {
    return mongodb.MongoClient.connect(url, { useUnifiedTopology: true}).then(client => {
      this.client = client
      this.db = client.db(db)
      console.log('Yeah !! Connected to mongo')
    })
  },
  collection() {
    return this.db.collection
  }
}