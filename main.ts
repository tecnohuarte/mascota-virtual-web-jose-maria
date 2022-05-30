input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    tiempo = 0
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
    soundExpression.giggle.playUntilDone()
})
input.onButtonPressed(Button.A, function () {
    tiempo = 0
    soundExpression.hello.playUntilDone()
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
})
input.onGesture(Gesture.ScreenUp, function () {
    tiempo = 0
    if (input.lightLevel() > 200) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    } else {
        basic.showIcon(IconNames.Asleep)
        soundExpression.yawn.playUntilDone()
    }
})
input.onGesture(Gesture.TiltRight, function () {
    tiempo = 0
    basic.showIcon(IconNames.Surprised)
    soundExpression.twinkle.playUntilDone()
})
input.onGesture(Gesture.Shake, function () {
    tiempo = 0
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
})
input.onGesture(Gesture.TiltLeft, function () {
    tiempo = 0
    basic.showIcon(IconNames.Surprised)
    soundExpression.twinkle.playUntilDone()
})
input.onButtonPressed(Button.B, function () {
    tiempo = 0
    soundExpression.hello.playUntilDone()
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    tiempo = 0
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    soundExpression.spring.playUntilDone()
})
let tiempo = 0
tiempo = 0
basic.showIcon(IconNames.Happy)
soundExpression.happy.playUntilDone()
basic.forever(function () {
    basic.pause(1000)
    tiempo += 1
    if (tiempo < 15) {
        basic.showIcon(IconNames.Happy)
    } else if (tiempo < 40) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Confused)
    }
})
