function string(phrase) {
    if (phrase) {
        return phrase + "!";
    }
    else if (phrase == 0) {
        return phrase;
    }
    else 
        return null;
}
module.exports = { string };