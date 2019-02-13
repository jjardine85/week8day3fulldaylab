const BucketListFormView = require('./views/bucket_list_form_view.js');
const Activities = require('./models/activities.js');

document.addEventListener("DOMContentLoaded", () => {
  const bucketListForm = document.querySelector('#bucket-list-form');
  const bucketListFormView = new BucketListFormView(bucketListForm);
  bucketListFormView.bindEvents();
  const url = 'http://localhost:3000/api/activities';
  const activities = new Activities(url);
  activities.bindEvents();
});
