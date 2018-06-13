
function lodingJquary(ativar) {
    if (ativar === true) {
        $('#loader-wrapper').show();
        $('#transaction').addClass('scale-out');
    } else {
        setTimeout(function () {
            $('#loader-wrapper').hide();
            $('#transaction').removeClass('scale-out');
        }, 2000);
    }
}

function showAlert(id) {
    console.log(id);
    $(id).removeClass('hide');
}