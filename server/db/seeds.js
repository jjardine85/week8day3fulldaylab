use bucket_list_db;
db.dropDatabase();

db.activities.insertOne({
  name: "Parachuting",
  detail: "Up in the sky",
  completed: true
});
