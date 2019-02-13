const PubSub = require('../helpers/pub_sub.js');

const BucketListFormView = function(form) {
  this.form = form;
};

BucketListFormView.prototype.bindEvents = function() {
  this.form.addEventListener('submit', (event) => {
    this.handleSubmit(event);
    console.log("Button clicked");
  });
};

BucketListFormView.prototype.handleSubmit = function(event){
  event.preventDefault();
  const newActivity = this.createActivity(event.target);
  console.log(event.target);
  PubSub.publish('BucketListFormView:activity-submitted', newActivity);
  console.log("newActivity:", newActivity);
  event.target.reset();
};

BucketListFormView.prototype.createActivity = function(form) {
  const newActivity = {
    name: form.name.value,
    details: form.details.value,
    completed: form.completed.checked
  };
  return newActivity;
};



module.exports = BucketListFormView;
