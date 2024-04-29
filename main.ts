let figuur = 0
let wacht = 0
basic.forever(function () {
    figuur = randint(1, 5)
    wacht = randint(700, 100)
    if (figuur == 1) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # # . # #
            # . # . #
            . # # # .
            `)
    } else if (figuur == 2) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `)
    } else if (figuur == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (figuur == 4) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (figuur == 5) {
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
    }
    basic.pause(wacht)
})
