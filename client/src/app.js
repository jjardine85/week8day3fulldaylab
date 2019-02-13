const BucketListFormView = require('./views/bucket_list_form_view.js');

document.addEventListener("DOMContentLoaded", () => {
  const bucketListForm = document.querySelector('#bucket-list-form');
  const bucketListFormView = new BucketListFormView(bucketListForm);
  bucketListFormView.bindEvents();
});
