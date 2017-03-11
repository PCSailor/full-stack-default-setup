var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'default',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new.pg.Pool(config);

// NOTE: Get all apps
router.get('/', function(req, res) {
  console.log('routes.js/router.get (Get all Apps) reached');
  pool.connect(function(err, client, done) {
    if(err) {
      console.log('error on routes.js/router.get-pool.connect', err);
      res.sendStatus(500);
    } else {
      // NOTE: Database Query
      client.query('SELECT * FROM app ORDER BY status, id asc;', function(err, result) {
        done(); // NOTE: Close the database connection
        if(err) {
          console.log('error on routes.js/router.get-client.query', err);
          res.sendStatus(500);
        } else {
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

// NOTE: Create new App
router.post('/', function(req, res) {
  console.log('routes.js/router.post (Create new App) reached');
  var appObject = req.body;
  pool.connect(function(err, client, done) {
    if (err) {
      console.log('error on routes.js/router.post-pool.connect', err);
      res.sendStatus(500);
    } else {
      client.query('INSERT INTO app (name) VALUES ($1);',
      [appObject.appName], function(err, result) {
        done();
        if(err) {
          console.log('error on routes.js/router.post-client.query', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
    }
  });
});

// NOTE: Delete App
router.delete('/:id', function(req, res) {
  var appToDelete = req.params.id;
  console.log('routes.js/router.delete (Delete App) reached');
  console.log('appToDelete = ', appToDelete););
  pool.connect(function(err, client, done) {
    if (err) {
      console.log('error on routes.js/router.delete-pool.connect', err);
      res.sendStatus(500);
    } else {
      client.query('DELETE FROM app WHERE id=$1;',
      [appToDelete], function(err, result) {
        done();
        if(err) {
          console.log('error on routes.js/router.delete-client.query', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
    }
  });
});

// NOTE: Update App
router.put('/:id', function(req, res) {
  var appToUpdate = req.params.id;
  console.log('routes.js/router.put (UpdateApp) reached');
  console.log('appToUpdate = ', appToUpdate););
  pool.connect(function(err, client, done) {
    if (err) {
      console.log('error on routes.js/router.put-pool.connect', err);
      res.sendStatus(500);
    } else {
      client.query('UPDATE app SET status=TRUE WHERE ID=$1;',
      [appToUpdate], function(err, result) {
        done();
        if(err) {
          console.log('error on routes.js/router.put-client.query-Update', err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
    }
  });
});


module.exports = router;
