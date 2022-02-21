$(document).ready(function () {

    $('#BtnMessage').click(function () {
        alert("I love Josh/Garrett/Haylee!");
    });

    $("#BtnText").click(function () {
        let test = $('#inputId'); 
        alert(test.val());
    });
    
    $("#divID").mouseover(function () {
        $('#divID').css('background-color', 'blue');
    });

    $("#divID").mouseout(function () {
        $('#divID').css('background-color', 'red');
    });

    $("#paraID").click(function () {
        $('#paraID').css('color', getRandomColor());
    });

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $('#pokeID').click(function () {
        let item = '<span>Reid McLain</span>';
        $('#reidList').append(item);
    });

    const friends = ["William", "John", "Landon", "Chad", "Noah", "Sage", "Austin", "Emily", "Cameron", "Jordan"];

    let friendCounter = 0;

    $("#friendsBtn").click(function () {
        let item = '<li>friends</li>';
        $('#friendsList').append(item);
    });
});
