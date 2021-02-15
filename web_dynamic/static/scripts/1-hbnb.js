$(document).ready(function(){
  let amenities_id = {};
  $('input[type="checkbox"]').click(function(){
      if($(this).prop("checked") == true){
          amenities_id[$(this).data('id')] = $(this).data('name');
      }
      else if($(this).prop("checked") == false){
          delete amenities_id[$(this).attr('data-id')];;
      }
      $('.amenities H4').text(Object.values(amenities).join(', '));
  });
});