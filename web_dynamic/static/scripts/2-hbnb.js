const $ = window.$;
$(document).ready(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (response) {
    if (response.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });

  const amenitiesId = {};
  $('input[type="checkbox"]').click(function () {
    if ($(this).prop('checked') === true) {
      amenitiesId[$(this).data('id')] = $(this).data('name');
    } else if ($(this).prop('checked') === false) {
      delete amenitiesId[$(this).attr('data-id')];
    }
    $('.amenities H4').text(Object.values(amenitiesId).join(', '));
  });
});
