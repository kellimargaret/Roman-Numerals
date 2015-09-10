var romanNumeral = function(number){
    var stringNumber = number.toString();
    var newNumber = "";
    if(number > 3999 || number < 1){
        newNumber = "Romans do not believe in your number"
    }else{
        if(stringNumber[stringNumber.length-4] < 4 && stringNumber[stringNumber.length-4] !== 0){
            for(var i = 1; i <= stringNumber[stringNumber.length-4]; i++){
                newNumber += "M";
                stringNumber -= 1000;
                stringNumber = stringNumber.toString();
            }
        }
        if(stringNumber[stringNumber.length-3] == 9){
                newNumber += "CM";
            }
        if(stringNumber[stringNumber.length-3] < 9 && stringNumber[stringNumber.length-3] > 4){
            for(var i = 6; i <= stringNumber[stringNumber.length-3]; i++){
                newNumber += "D";
                stringNumber -= 500;
                stringNumber = stringNumber.toString();
            }
        }
        if(stringNumber[stringNumber.length-3] == 4){
                newNumber += "CD";
        }
        if(stringNumber[stringNumber.length-3] < 4 && stringNumber[stringNumber.length-3] !== 0){
            for(var i = 1; i <= stringNumber[stringNumber.length-3]; i++){
                newNumber += "C";
                stringNumber -= 100;
                stringNumber = stringNumber.toString();
            }
        }
        if(stringNumber[stringNumber.length-2] == 9){
                newNumber += "XC";
        }
        if(stringNumber[stringNumber.length-2] < 9 && stringNumber[stringNumber.length-2] > 4){
            for(var i = 6; i <= stringNumber[stringNumber.length-2]; i++){
                newNumber += "L";
                stringNumber -= 50;
                stringNumber = stringNumber.toString();
            }
        }
        if(stringNumber[stringNumber.length-2] == 4){
                newNumber += "XL";
            }
        if(stringNumber[stringNumber.length-2] < 4 && stringNumber[stringNumber.length-2] !== 0){
            for(var i = 1; i <= stringNumber[stringNumber.length-2]; i++){
                newNumber += "X";
                stringNumber -= 10;
                stringNumber = stringNumber.toString();
            }
        }
        if(stringNumber[stringNumber.length-1] == 9){
                newNumber += "IX";
        }
        if(stringNumber[stringNumber.length-1] < 9 && stringNumber[stringNumber.length-1] > 4){
            for(var i = 6; i <= stringNumber[stringNumber.length-1]; i++){
                newNumber += "V";
                stringNumber -= 5;
                stringNumber = stringNumber.toString();
            }
        }
        if(stringNumber[stringNumber.length-1] == 4){
                newNumber += "IV";
        }
        if(stringNumber[stringNumber.length-1] < 3 && stringNumber[stringNumber.length-1] !== 0){
            for(var i = 1; i <= stringNumber[stringNumber.length-1]; i++){
                newNumber += "I";
                stringNumber -= 1;
                stringNumber = stringNumber.toString();
            }
        }
    }
    return newNumber;
}



$(document).ready(function() {
    $("form#roman").submit(function(event){
        var number = $("input#number").val();
        var result = romanNumeral(number);
        $(".roman").text(result);
        $("#result").show();
        event.preventDefault();
    });
});
