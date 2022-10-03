const { Router } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const shortid = require("shortid");
const { something, isAuthorised } = require('./middlewares/index');

const shortid = require("shortid");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(something);

/*
TYPE: POST
PARAMS: null
QUERY: email
DESCRIPTION: route to create user
*/

app.post ("/user", (req,res)=>{
  try {
    const users = JSON.parse(
      fs.readFileSync(path.join(__dirname, "users.json"), { encoding: "UTF-8" })
    );
    
    const { email } = req.body;
    const user ={
      email,
      api_key:shortid.generate(),
    };
    users.push(user);
    fs.writeFileSync(path.join(__dirname, "users.json"), JSON.stringify(users));
    res.send(user);
  } catch (error) {
    return res.send(error.message);
  }
  
});


/*
TYPE: GET
PARAMS: null
QUERY: count
DESCRIPTION: route to fetch all todos
*/
app.get("/todos", isAuthorised, (req, res) => {
  try {
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );

    const { count } = req.query;

    if (count) {
      return res.send(todos.slice(0, count));
    } else {
      return res.send(todos.slice(0, count));
    }
  } catch (error) {
    return res.send(error.message);
  }
});

/*
TYPE: GET
PARAMS: id
QUERY: null
DESCRIPTION: route to fetch a specific todo
*/
app.get("/todos/:id", (req, res) => {
  try {
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );
    const { id } = req.params;
    const todo = todos.find((e) => e.id == id);

    if (todo) {
      return res.send(todo);
    } else {
      return res.send("item not found");
    }
  } catch (error) {
    return res.send(error.message);
  }
});

/*
TYPE: POST
PARAMS: null
QUERY: null
BODY: 
DESCRIPTION: route to add a specific todo
*/
app.post("/todos", (req, res) => {
  try {
    const data = req.body;
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );
    const todo = {
      ...data,
      id: todos.length + 1,
    };

    todos.push(todo);

    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(todos));
    //   console.log(todo);
    res.send(todo);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

/*
TYPE: DELETE
PARAMS: id
QUERY: null
BODY: 
DESCRIPTION: route to add a specific todo
*/
app.delete("/todos/:id", (req, res) => {
  try {
    const { id } = req.params;
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );

    const newTodos = todos.filter((todo) => todo.id != id);

    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(newTodos));
    //   console.log(todo);
    res.send(newTodos);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.put("/todos/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );

    const newTodos = todos.map((todo) => {
      console.log(todo, id);
      if (todo.id == id) {
        return {
          ...todo,
          ...data,
        };
      } else {
        return todo;
      }
    });

    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(newTodos));
    //   console.log(todo);
    res.send(newTodos);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.listen(8080, () => {
  console.log(`server started at Port: ${8080}`);
});