

if (num < 49) {
    console.log("NO")
} else if (num > 100) {
    console.log("Many")
} else {
    console.log("Yes")
};

(num == 50) ? console.log("Yes") : console.log("NO");


switch (num) {
    case num < 49:
        console.log("NO");
        break;
    case num > 100: 
        console.log("Many");
        break;
    case 50: 
        console.log("Yes");
        break;
    default:
        console.log("Что-то не так");
        break;                
}

let num = 50;
// while (num <= 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}