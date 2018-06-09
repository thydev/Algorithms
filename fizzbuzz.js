function fizzbuzz(num) {
    const fizz = 3,
        buzz = 5;
    for (var i = 1; i <= num; i++) {
        if (i % fizz === 0 && i % buzz === 0) {
            console.log("fizz buzz");
        } else if (i % fizz === 0) {
            console.log("fizz");
        } else if (i % buzz === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}
fizzbuzz(100);