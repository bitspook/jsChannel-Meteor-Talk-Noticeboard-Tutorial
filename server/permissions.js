Notices.allow({
  insert: function(userId, doc) {
    doc.like_count = 0;

    return true;
  },
  update: function(userId, doc) {
    return true;
  },
  remove: function(userId, doc) {
    return true;
  }
});
