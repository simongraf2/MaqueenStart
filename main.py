strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)

def on_forever():
    # basic.show_string("Hello!")
    if input.button_is_pressed(Button.A):
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_OFF)
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 20)
    if input.button_is_pressed(Button.B):
        maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
        maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_OFF)
        maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, 0)
    if input.logo_is_pressed():
        strip.show_rainbow(0, 0)
        for index in range(19):
            strip.rotate(0)
            strip.show()
            basic.pause(100)
        strip.clear()
        strip.show()
basic.forever(on_forever)
