var romanNumeral = function(num) {

    var romanString = "";
    var romanNumerals = ["M", "CM", "D", "CD","C","XC","L","XL","X","IX","V","IV","I"];
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    if ((num > 3999) || (num < 1)) {
        romanString += "The Romans did not believe in your number!";
    } else {
        for (var i = 0; i < numbers.length; i++) {
            while(num >= numbers[i]) {
                romanString += romanNumerals[i];
                num -= numbers[i];
            }
        }
    }

    return romanString;
};



$(document).ready(function() {
    $("form#roman").submit(function(event){
        var number = $("input#number").val();
        var result = romanNumeral(number);
        $(".roman").text(result);
        $("#result").show();
        event.preventDefault();
    });
});
