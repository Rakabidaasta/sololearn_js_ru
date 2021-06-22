// Trip Planner 
// Kvist Tatyana, 2021. kvist_tatyana@mail.ru

function main() {
    var distance = parseInt(readLine(), 10);

    var mAH = 40;
    var hours = distance / mAH;
    var minutes = hours * 60;

    console.log(minutes);
} 
