const about = function(req, res) {
  res.render('about', {title: 'About my site', description:"This is a cart app"});
};

module.exports = {
  about
}