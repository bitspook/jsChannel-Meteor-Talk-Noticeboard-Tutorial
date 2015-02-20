Template.noticeList.created = function() {
  Meteor.subscribe('all_notices');
};

Template.noticeList.helpers({
  notices: function() {
    return Notices.find({}, {sort: {like_count: -1}});
  }
});


Template.noticeList.events({
  "keydown .add-notice": function(e) {
    var key = e.keyCode;
    if (key === 13) {
      e.preventDefault();

      Notices.insert({
        body: e.currentTarget.value
      }, function(err, res) {
        if (err)
          console.log(err.message);

        e.currentTarget.value = '';
      });

    }
  },
  "click .like": function(e) {
    Notices.update(this._id, {$inc: {like_count: 1}});
  },
  "click .delete": function(e) {
    Notices.remove(this._id);
    Router.go('home');
  },
  "click .logout": function(e) {
    e.preventDefault();
    Meteor.logout();
  }
});
