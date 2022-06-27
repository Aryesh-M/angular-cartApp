const main = function(req, res) {
    res.render('index', {title: 'Welcome to CartApp'});
  };
  
  module.exports = {
    main
  }