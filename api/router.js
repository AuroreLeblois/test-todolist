const express = require('express');
const router = express.Router();
const data = require('./data/list.json');


router.get('/', function (req, res) {
  //on envoie la view index.ejs qui récupère les données du json
    res.render('index', {'list':data});
  });
    
router.post('/addTask',function (req, res) {
    //on recupère la valeur
   const Task= req.body.task
   //on prépare un objet parametrable
    const newTodo = {"task":`${Task}`}
    //on l'insère dans le json (à la fin)
    data.push(newTodo);
    //on redirige sur / qui renvoie les infos
    res.redirect('/');
  });

  
  /* Supprime un élément de la todolist */
router.get('/:taskName', function(req, res) {
  //on récupère le param
  const goodTask= req.params.taskName
  //on vérifie que la string envoyée ne soit pas vide
  if (req.params.taskName != '') {
    //on va chercher l'index
    const index = data.findIndex(obj => obj.task==`${goodTask}`);
    //on supprime l'index
      data.splice(index,1);
  }
  //on renvoie vers / pour la mise à jour de la vue
  res.redirect('/');
})


  module.exports = router;