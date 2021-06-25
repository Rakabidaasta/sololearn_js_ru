function main() {
    var depth = parseInt(readLine(), 10);

    var days = 0;
    var feets = 0;

    while (true) {
        days++;
        feets += 7;

        if (feets >= depth) break;

        feets -= 2;
    }

    console.log(days);
}
 
