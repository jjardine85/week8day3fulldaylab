const PubSub = require('../helpers/pub_sub.js');
const ActivityView = require('./activity_view.js');

const ActivitiesGridView = function (container) {
  this.container = container;
};

ActivitiesGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Activities:data-loaded', (event) => {
      this.render(event.detail);
  });
};

ActivitiesGridView.prototype.render = function (activities) {
  this.container.innerHTML = "";
  const activityView = new ActivityView(this.container);
  activities.forEach((activity) => activityView.render(activity));
};


module.exports = ActivitiesGridView;
