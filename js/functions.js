// form validation

$("#event-form").validate({
  rules: {
    name: {
      required: true,
      minlength: 2
    }
  }
});

// utm capture

getParameterByName = function(name) {
query = window.location.search.toString();
name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
var regexS = "[\\?&]" + name + "=([^&#]*)";
var regex = new RegExp(regexS);
results = regex.exec(query);
if (results == null) return "";
else return decodeURIComponent(results[1].replace(/\+/g, " "));
}
$(document).ready(function() {
var $utmSource = $('[name=utm_source]'),
$utmMedium = $('[name=utm_medium]'),
$utmContent = $('[name=utm_content]'),
$utmCampaign = $('[name=utm_campaign]');
$utmSource.val(getParameterByName('utm_source'));
$utmMedium.val(getParameterByName('utm_medium'));
$utmContent.val(getParameterByName('utm_content'));
$utmCampaign.val(getParameterByName('utm_campaign'));
});
