var ghpages = require('gh-pages');

ghpages.publish('./dist', {
  repo: 'git@github.com:tangdw/vuejs-2048.git',
  branch: 'gh-pages',
  dest: '.',
}, function(err) {
  console.log(err || 'success')
});
