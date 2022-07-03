module.exports = function toReadable (number) {
    if (number===0){
        return 'zero';
    }
    let arrReadNinen = [
        "one ",
        "two ",
        "three ",
        "four ",
        "five ",
        "six ",
        "seven ",
        "eight ",
        "nine "
    ].reverse();
    let arrReadNinety = [
        "ten ",
        "eleven ",
        "twelve ",
        "thirteen ",
        "fourteen ",
        "fifteen ",
        "sixteen ",
        "seventeen ",
        "eighteen ",
        "nineteen ",
        "twenty ",
        "thirty ",
        "forty ",
        "fifty ",
        "sixty ",
        "seventy ",
        "eighty ",
        "ninety ",
    ].reverse();
    let arrReadMillion = ["hundred ", "thousand "].reverse();

    let arrNine = [1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();
    let arrNinety = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90].reverse();
    let arrMillion = [100, 1000].reverse();

    let numberRead = "";
    let nuberLen = number.toString().length;

    for (let i = 0; i < arrMillion.length; i++) {
        if (number >= arrMillion[i]) {
            numberRead += arrReadNinen[10 - number.toString()[0] - 1] + arrReadMillion[i];
            number -= +number.toString()[0] * arrMillion[i];
        }
    }
    for (let i = 0; i < arrNinety.length; i++) {
        if (number >= arrNinety[i]) {
            number -= arrNinety[i];
            numberRead += arrReadNinety[i];
            break;
        }
    }
    for (let i = 0; i < arrNine.length; i++) {
        if (number >= arrNine[i]) {
            number -= arrNine[i];
            numberRead += arrReadNinen[i];
            break;
        }
    }
    return numberRead.trim();
};
