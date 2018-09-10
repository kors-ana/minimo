function AjaxForm (formId) {

    var $form = $("#" + formId);

    function sendAjaxForm() {
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            success: function(response) {
                console.log('success');
                console.log(response);
                console.log($form.serialize());
            },
            error: function(response) {
                console.log('error');
            },
            complete: function(xhr, statusText){
                console.log(xhr.status);
                console.log(statusText);
            }
        })
    }

    $form.submit(function (event) {
        event.preventDefault();
        sendAjaxForm();
    });
}

