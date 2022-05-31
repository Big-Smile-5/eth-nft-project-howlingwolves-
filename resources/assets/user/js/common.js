
jQuery(() => {
    $(".howling").attr("href", contractURL+wolvesContractAddress)
    $(".lyacon").attr("href", contractURL+lycaonContractAddress)
    $('#howling').html(wolvesContractAddress);
    $('#lyacon').html(lycaonContractAddress);
    $("#ConnectMetamask").removeClass("connected-wallet");
    $(".check").hide();
});

function Toast(val, time, flag) {
    var f_class = "";
    $('#toast').remove();
    if (flag == 1) {
        f_class = "fail-error";
        icon ="times";
    }
    if (flag == 2) {
        f_class = "sucsess-box";
        icon ="check";
    }
    $('body').append('<div  class="error-msg"><div class="error-box ' + f_class + ' show-msg" id="toast"><i class="far fa-'+icon+'-circle"></i>' + val + '</div></div>');
    // $('#toast').html(val);
    var x = document.getElementById("toast");

    if (typeof time == 'undefined' || time == null) {
        time = 3000;
    }

    setTimeout(function() {
        x.className = x.className.replace("show-msg", "");
        time == null;
        setTimeout(() => {
            $('#toast').remove();
        }, 1000);
    }, time);
}
