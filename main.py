luz = 0

def on_forever():
    global luz
    if input.temperature() > 22:
        basic.show_string("Calor")
    else:
        basic.show_string("Frio")
    luz = input.light_level()
    if luz > 200:
        music.play_melody("C D E F G A B C5 ", 120)
    elif luz < 50:
        music.play_melody("E D G F B A C5 B ", 60)
basic.forever(on_forever)
