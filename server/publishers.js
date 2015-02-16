Meteor.publish('all_notices', function() {
  return Notices.find();
});
