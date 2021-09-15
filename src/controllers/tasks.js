import { connect } from "../database";

export const getTasks = async (req, res) => { 
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks");
    //console.log(rows);
    //res.send('Hello World!');
    res.json(rows);
}
export const getTask = async (req, res) => {
    //console.log(req.params.id);
    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks WHERE id = " + req.params.id);
    /* const [rows] = await connection.query(
      "SELECT * FROM tasks WHERE id = ?", [
          req.params.id,
    ]); */
    //console.log(rows[0]);
    res.json(rows[0]);
    //res.send("Hello getTask!");
}
export const getTaskCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) FROM tasks") 
    //res.send("Hello getTaskCount!");
    res.json(rows[0]["COUNT(*)"]);
}
export const saveTask = async (req, res) => { 
    const connection = await connect();
    const [results] = await connection.query(
        "INSERT INTO tasks (title, description) VALUES (?,?)", 
        [req.body.title, req.body.description]
    );
    //res.send("Hello saveTask!");
    res.json({
        id: results.insertId,
        ...req.boby,
    });
};
export const deleteTask = async (req, res) => {
    const connection = await connect();
    await connection.query("DELETE FROM tasks WHERE id = ?", [
        req.params.id,
    ]);
    //res.send("Hello deleteTask!");
    //console.log(result);
    res.sendStatus(204);
    //res.json({})
}
export const updateTask = async (req, res) => { 
    //res.send("Hello updateTask!");
    const connection = await connect();
    await connection.query('UPDATE tasks SET ? WHERE id = ?', [
        req.body,
        req.params.id
    ]);
    res.sendStatus(204);
}