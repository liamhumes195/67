input.onButtonPressed(Button.A, function () {
    serial.writeLine("1: starting micro bit...")
    serial.writeLine("2: Deleteing DETAILS.txt ... jk")
    serial.writeLine("3: lod micro bit...")
    serial.writeLine("4: dun 1.3 sec")
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    datalogger.log(
    datalogger.createCV("1", 2),
    datalogger.createCV("2", 10)
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Dakdabed Pres A to Start")
    basic.showString("loading......")
    basic.showString("restart in 2 sec")
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showString("on LOading ples dont tern OFF")
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.showString("Off")
        serial.writeLine("User Deakdbated 1.23.4.5 sck IP6 2601:405:4801:3f60:2d4b:d7f8:f767:744d")
    }
})
serial.writeLine("V2 Microbit 1 loading")
