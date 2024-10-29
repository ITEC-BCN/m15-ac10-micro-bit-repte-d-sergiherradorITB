let luz = 0
basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("Calor")
    } else {
        basic.showString("Frio")
    }
    luz = input.lightLevel()
    if (luz > 200) {
        music.playMelody("C D E F G A B C5 ", 120)
    } else if (luz < 50) {
        music.playMelody("E D G F B A C5 B ", 60)
    }
})
