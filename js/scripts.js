var romanNumeral = function(number){
    var newNumber = "";
    for(var i = 1; i<=number; i++) {
        newNumber += "I";
    }
    return newNumber;
}


//
// $(document).ready(function() {
//     $("form#text").submit(function(event){
//         var string = $("input#string").val();
//         var result = words(string);
//         $(".string").text(result);
//         $("#result").show();
//         event.preventDefault();
//     });
// });
