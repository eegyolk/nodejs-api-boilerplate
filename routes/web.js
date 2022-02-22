const express = require('express');

router = express.Router();

router.get('/', (req, res) => {
  const { name, version, env } = req.app.locals.config.app;

  res.send(`${name} <br/> v${version} (${env})`);
});

module.exports = router;
