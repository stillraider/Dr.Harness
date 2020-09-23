let notification = $(".notification");

$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        wrapper.toggle();
        blockForm.toggleClass("showForm");
        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            contentType: false,
            cache: true,
            data: new FormData(this),
            processData: false,
            success: function () {
                notification.toggle();
                setTimeout(function () {
                    notification.hide();
                }, 4000)
            }
          })
      });
});