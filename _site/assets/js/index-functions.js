
$(document).ready(function() {

  $('.contact-form').bootstrapValidator({
        fields: {
          email: {
                trigger: 'blur',
                feedbackIcons: 'false'
            }
        }
    });/** Contact form submission */

 /* $('.ppl-thumb').contenthover({
      overlay_background:'#000',
      overlay_opacity:0.8
  });*/

//Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
  $('.contact-form').on('success.form.bv', function(e){
    //var $form = $(e.target);
    //var bv = $form.data('bootstrapValidator');
    e.preventDefault();
    var form_id = this.id;
    var valuesToSubmit = JSON.stringify($(this).serializeObject());
    //alert(valuesToSubmit);
    $.ajax({
      type: "POST",
      beforeSend: function(xhr) {
        xhr.setRequestHeader( "Content-type", "application/json" );
      },
      crossDomain: true,
      url: $(this).attr('action'),
      data: valuesToSubmit,
      dataType: "json"
    }).done(function() {
      $('#contact-submit-success').fadeToggle( "slow", "linear" );
      createAutoClosingAlert(form_id,".contact-submit-success", 500);
    }).fail(function() {
      $('#contact-submit-error').fadeToggle( "slow", "linear" );
      createAutoClosingAlert(form_id,".contact-submit-error", 500);
    });
    return false;
  });

});

function createAutoClosingAlert(form_id, selector, delay) {
   //var alert = $(selector).alert();
   window.setTimeout(function() { $('#' + form_id).find(selector).fadeToggle( "slow", "linear" ) }, delay);
}

vpw = $(window).width();
vph = $(window).height();
if($('.functional').height() < vph) {
  //$('.functional').height(vph); 
  $('.functional').css('min-height',vph);
}
$(window).keypress(function(e) {
    if (e.keyCode == 13) {
        redirect_search();
    }
});
$("#equip-search-btn").click(function(e){
  e.preventDefault();
  redirect_search();
});
// redirect to outbound page
function loadSearch() {
  //document.location = href;
  window.open(href,'_blank');
}

function redirect_search(){
  var v = $("input#equip-search").val();
  if(v){
      href = "https://www.research-facilities.ox.ac.uk/search/?q=" + v + "&filter.basedNear.uri=&filter.formalOrganisation.uri=http%3A%2F%2Foxpoints.oucs.ox.ac.uk%2Fid%2F00000000";
      ga('send', {
        'hitType': 'event',
      'eventCategory': 'outbound',
      'eventAction': 'link',
      'eventLabel': v,
      'hitCallback': loadSearch

    });
      // redirect after one second if recording takes too long
    setTimeout(loadSearch, 1000);
 
    
  }
}

//endswith polyfill - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
if (!String.prototype.endsWith) {
  Object.defineProperty(String.prototype, 'endsWith', {
    value: function (searchString, position) {
      var subjectString = this.toString();
      if (position === undefined || position > subjectString.length) {
        position = subjectString.length;
      }
      position -= searchString.length;
      var lastIndex = subjectString.indexOf(searchString, position);
      return lastIndex !== -1 && lastIndex === position;
    }
  });
}

