while True:
    if input.acceleration(Dimension.Z) >90:
        music.pew_pew.play()
        music.set_volume(300)
        light.show_animation(light.rainbowAnimation, 500)
    elif input.acceleration(Dimension.X) >70:
        music.pew_pew.play()
        music.set_volume(300)
        light.show_animation(light.rainbowAnimation, 500)
    else:
        light.clear()
        music.stop_all_sounds()