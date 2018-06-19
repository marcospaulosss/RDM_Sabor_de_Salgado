
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
    $(id).removeClass('hide');
}

function menuComponent() {
    // Main Left Sidebar Menu
    $('#menu_lateral').sideNav({
        edge: 'left', // Choose the horizontal origin
    });

    // Overlay Menu (Full screen menu)
    $('aside .menu-sidebar-collapse').sideNav({
        menuWidth: 240,
        edge: 'left', // Choose the horizontal origin
        // closeOnClick:true, // Set if default menu open is true
        menuOut: false // Set if default menu open is true
    });

    $('.collapsible').collapsible();
}