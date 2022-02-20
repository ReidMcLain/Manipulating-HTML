$(document).ready(function () {

    $('#BtnMessage').click(function () {
        alert("I love Josh/Garrett/Haylee!");
    });

    $("#BtnText").click(function () {
        let test = $('#inputId'); 
        alert(test.val());
    });
    
});
