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

  const label = document.createElement('label');
  label.for = "completed";
  label.textContent = "Completed? ";
  activityContainer.appendChild(label);

  const completed = document.createElement('input');
  completed.type="checkbox";
  completed.value = activity._id;
  completed.checked = activity.completed;
  activityContainer.appendChild(completed);

  completed.addEventListener('change', (event) => {
    // console.dir(event.target);
    const payload = {
      _id: event.target.value,
      completed: event.target.checked
    }
    PubSub.publish('ActivityView:checkbox-changed', payload)
  });

  const button = document.createElement('button');
  button.classList.add('delete-button');
  button.textContent = 'Delete';
  button.value = activity._id;
  activityContainer.appendChild(button);

  button.addEventListener('click', (event) => {
    console.log(event.target.value);
    const result = confirm("Are you sure?");
    if (result === true) {
      PubSub.publish('ActivityView:delete-clicked', event.target.value)
    }
  })

  this.container.appendChild(activityContainer);
};

module.exports = ActivityView;
