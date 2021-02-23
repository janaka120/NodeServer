Windows 10 powershell commands in docker

- Use `docker ps` to get the name of the existing container
- Use the command `docker exec -it <container name> /bin/bash` to get a bash shell in the container
- Exist from container - `press ctrl+c then ctrl+d`


Mongo DB shell commands

- Show all databases `show dbs`
- Create a database, say, testdb; Switch to the database: `use testdb`
- show all collections - `show collections`
- Add a collection: `db.createCollection("user")`
- Insert recode to collection `db.user.insert({"name": "Ajitesh Shukla", "location": "hyderabad", "username": "eajitesh"})`
- Display list of records of a *user* collection `db.user.find().pretty()`

