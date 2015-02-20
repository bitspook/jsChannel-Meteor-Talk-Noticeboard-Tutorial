Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    'path': '/',
    template: 'noticeList'
  });

  this.route('/notice/:id', {
    name: 'notice',
    template: 'noticeList'
  });
});
