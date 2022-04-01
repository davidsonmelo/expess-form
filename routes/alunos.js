var express = require('express');
var axios = require('axios');
var router = express.Router();
var url = 'http://api-server-senac.herokuapp.com/alunos'

/*GET todos os alunos. */
router.get('/', function (req, res, next) {
    axios.get(url).then(function (response) {
        console.log(response.data);
        res.render('alunos-list', { alunos: response.data });
    })
        .catch(function (error) {
            console.log(error);
        })
});

/*GET form do alunos. */
router.get('/add', function (req, res, next) {
    res.render('alunos-form', { title: 'Alunos' });
});

/*GET aluno pelo ID. */
router.get('/:id', function (req, res, next) {
    res.send(`respond os cursos pelo id ${req.params}`);
});

/*POST aluno */
router.get('/save', function (req, res, next) {
    axios.post(url, req.body)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    res.redirect('/alunos');
});

module.exports = router;