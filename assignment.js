// https://github.com/rahmansharifur/basic-javascript-assgnment/blob/master/assignment.js


function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;

}
var result = kilometerToMeter(7);
console.log(result);


function budgetCalculatop(quantityOfWatch, quantityOfMobile, quantityOfLaptop) {
    var watch = quantityOfWatch * 50;
    var mobile = quantityOfMobile * 100;
    var laptop = quantityOfLaptop * 500;
    var totalBuget = watch + mobile + laptop;

    return totalBuget
}
var total = budgetCalculatop(20, 10, 2);
console.log(total);




function hotelCost(rantOfDay) {
    var totalRant = 0;
    if (rantOfDay <= 10) {
        totalRant = rantOfDay * 100;
    } else if (rantOfDay <= 20) {
        var firstRantPackage = 10 * 100;
        var remaningDay = rantOfDay - 10;
        var secondRantPackage = remaningDay * 80;
        totalRant = firstRantPackage + secondRantPackage;
    } else {
        var firstRantPackage = 10 * 100;
        var secondRantPackage = 10 * 80;
        var remaningDay = rantOfDay - 20;
        var thirdRantPackage = remaningDay * 50;
        totalRant = firstRantPackage + secondRantPackage + thirdRantPackage;
    }
    return totalRant;
}
var totalCost = hotelCost(21);
console.log(totalCost);





function magaFriend(friend) {
    var magaFriend = friend[0];
    for (var i = 0; i < friend.length; i++) {
        var friendName = friend[i];
        if (friendName.length > magaFriend.length) {
            magaFriend = friendName;
        }
    }
    return magaFriend;
}
var friend = ["sumon", "jhanker mahbub", "pappu", "alif"];
var result = magaFriend(friend);
console.log(result);