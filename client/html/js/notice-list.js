var noticeArray = [
  {
    body: 'Very important notice 1',
    likeCount: 32
  },
  {
    body: 'Very important notice 2',
    likeCount: 13
  },
  {
    body: 'Very important notice 3',
    likeCount: 19
  },
  {
    body: 'Very important notice 4',
    likeCount: 23
  }
];

Template.noticeList.helpers({
  notices: function() {
    return noticeArray;
  }
});
