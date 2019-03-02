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

router.post('/addIdea', (req, res, next)=>{
  const ideaName = req.body.ideaName;
  const ideaType = req.body.ideaType;
  const ideaProg = req.body.ideaProg;
  const insertQuery = `INSERT INTO ideas(ideaName, ideaType, ideaProg)
    VALUES (?,?,?)`
    connection.query(insertQuery, [ideaName, ideaType, ideaProg], (err, results)=>{
      if(err){throw err}
      const getIdeaQuery = `SELECT * FROM ideas`;
      connection.query(getIdeaQuery, (err2, results2)=>{
        if(err2){throw err2}
        res.json(results2)
      })
    })
}) 

router.get('/getIdeas', (req, res, next)=>{
  const getIdeaQuery = `SELECT * FROM ideas`;
  connection.query(getIdeaQuery, (err, results)=>{
    if(err){throw err}
    res.json(results)
  })
})

router.post('/addProject', (req, res, next) => {
  const projectName = req.body.projectName;
  const projectType = req.body.projectType;
  const projectProg = req.body.projectProg;
  const insertQuery = `INSERT INTO project(projectName, projectType, projectProg)
    VALUES (?,?,?)`
  connection.query(insertQuery, [projectName, projectType, projectProg], (err, results) => {
    if (err) { throw err }
    const getProjectQuery = `SELECT * FROM Projects`;
    connection.query(getProjectQuery, (err2, results2) => {
      if (err2) { throw err2 }
      res.json(results2)
    })
  })
}) 

router.get('/getProjects', (req, res, next) => {
  const getProjectQuery = `SELECT * FROM projects`;
  connection.query(getProjectQuery, (err, results) => {
    if (err) { throw err }
    res.json(results)
  })
})

module.exports = router;
