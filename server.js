const express = require('express');
const app = express();
const port =3000;
const path = require('path');
const fs = require('fs');

function genRandom() {
  const names = ["Smith", "Johnson", "Williams","Maya", "Jones", "Brown",
                  "Davis", "Miller", "Wilson", "Moore", "Taylor",
                  "Anderson", "Thomas", "Jackson", "White", "Harris",
                  "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
                  "Clark", "Rodriguez", "Lewis", "Lee", "Walker",
                  "Hall", "Allen", "Young", "Hernandez", "King",
                  "Wright", "Lopez", "Hill", "Scott", "Green",
                  "Adams", "Baker", "Gonzalez", "Nelson", "Carter",
                  "Mitchell", "Perez", "Roberts", "Turner", "Phillips",
                  "Campbell", "Parker", "Evans", "Edwards", "Collins",
                  "Stewart", "Sanchez", "Morris", "Rogers", "Reed",
                  "Cook", "Morgan", "Bell", "Murphy", "Bailey"];
  const index = Math.floor(Math.random()*names.length);
  return names[index].toUpperCase();
};


app.get('/Generator',(req,res)=>{
  fs.readFile(path.join(__dirname,'Generator.html'),'utf8',(err,data)=>{
    if (err){
      console.error(err);
      res.status(500).send("error:not found")
    }
  const name = genRandom();
  const result = data.replace('<!--Place-Holder-->',name);
  app.use(express.static('public'));
  res.send(result);
});
});
app.listen(port,()=>{
  console.log(`server listening at http://localhost:${port}`);
});