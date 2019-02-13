const PubSub = require('../helpers/pub_sub.js');

const ActivityView = function (container) {
  this.container = container;
};

ActivityView.prototype.render = function (activity) {
  const activityContainer = document.createElement('div');
  activityContainer.id = 'activity-item';

  const name = document.createElement('h3');
  name.textContent = activity.name;
  activityContainer.appendChild(name);

  const details = document.createElement('p');
  details.textContent = activity.details;
  activityContainer.appendChild(details);

  const completed = document.createElement('input');
  completed.type="checkbox";
  completed.checked = activity.completed;
  activityContainer.appendChild(completed);

  this.container.appendChild(activityContainer);
};

module.exports = ActivityView;
