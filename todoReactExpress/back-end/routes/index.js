var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const config = require('../config');
const connection = mysql.createConnection(config);
connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addTask', (req, res, next)=>{
  const taskName = req.body.taskName;
  const taskDate = req.body.taskDate;
  const insertQuery = `INSERT INTO tasks(taskName, taskDate)
    VALUES (?,?)`
    connection.query(insertQuery, [taskName, taskDate], (error, results) => {
      if(error) {throw error}
      const getTaskQuery = `SELECT * FROM tasks`;
      connection.query(getTaskQuery, (error2, results2)=> {
        if(error2){throw error2}
        res.json(results2)
      })
    });
})

router.get('/getTasks',(req, res, next)=>{
  const getTaskQuery = `SELECT * FROM tasks`;
  connection.query(getTaskQuery, (error, results) => {
    if (error) { throw error }
    res.json(results)
  })
})

router.get('/getTask/:tid', (req, res, next)=>{
  const tid = req.params.tid;
  const selectTaskQuery = `SELECT * FROM tasks WHERE id =?`;
  connection.query(selectTaskQuery, [tid], (err, result)=>{
    if(err) {throw err}
    res.json({task:result[0]});
  })
})

router.post('/edit', (req, res, next)=>{
  const id = req.body.id;
  const taskName = req.body.task.taskName;
  const taskDate = req.body.task.taskDate.substring(0,10);
  const updateQuery = `UPDATE tasks SET taskName = ?, taskDate = ?
    WHERE id =?`;
  connection.query(updateQuery, [taskName, taskDate, id], (error, results)=>{
    if(error){throw error};
    res.json({
      msg: "updated"
    })
  })
});




module.exports = router;
