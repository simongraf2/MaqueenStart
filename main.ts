let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function on_forever() {
    //  basic.show_string("Hello!")
    if (input.buttonIsPressed(Button.A)) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
    
    if (input.buttonIsPressed(Button.B)) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
    }
    
    if (input.logoIsPressed()) {
        strip.showRainbow(0, 0)
        for (let index = 0; index < 19; index++) {
            strip.rotate(0)
            strip.show()
            basic.pause(100)
        }
        strip.clear()
        strip.show()
    }
    
})
