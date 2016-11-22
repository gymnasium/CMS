// form validation

$("#event-form").validate({
  rules: {
    name: {
      required: true,
      minlength: 2
    }
  }
});
