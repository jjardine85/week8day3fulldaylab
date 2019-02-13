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

  PubSub.subscribe('ActivityView:delete-clicked', (event) => {
    this.deleteActivity(event.detail);
  });

  PubSub.subscribe('ActivityView:checkbox-changed', (event) => {
    this.putActivity(event.detail);
    console.log(event.detail);
  })
};

Activities.prototype.getData= function() {
  this.request.get()
  .then((activities) => {
    PubSub.publish('Activities:data-loaded', activities);
  })
  .catch(console.error);
}

Activities.prototype.postActivity = function(activity) {
  const request_helper = new RequestHelper(this.url);
  request_helper.post(activity)
    .then((activities) => {
      PubSub.publish('Activities:data-loaded', activities);
  })
    .catch(console.error);
};

Activities.prototype.putActivity = function(activityId) {
  this.request.put(activityId)
  .then((activities) => {
    PubSub.publish('Activities:data-loaded', activities);
  })
  .catch(console.error);
}

Activities.prototype.deleteActivity = function(activityId) {
  this.request.delete(activityId, payload)
  .then((activities) => {
    PubSub.publish('Activities:data-loaded', activities);
  })
  .catch(console.error);
}


module.exports = Activities;
