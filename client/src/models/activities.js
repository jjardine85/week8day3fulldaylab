const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Activities = function(url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Activities.prototype.bindEvents = function() {
  PubSub.subscribe('BucketListFormView:activity-submitted', (event) => {
    this.postActivity(event.detail);
  });
};

Activities.prototype.postActivity = function(activity) {
  const request_helper = new RequestHelper(this.url);
  request_helper.post(activity)
    .then((activities) => {
      PubSub.publish('Activities:data-loaded', activities);
  })
    .catch(console.error);
};


  module.exports = Activities;
