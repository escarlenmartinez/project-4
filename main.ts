while (true) {
    if (input.acceleration(Dimension.Z) > 90) {
        music.pewPew.play()
        music.setVolume(300)
        light.showAnimation(light.rainbowAnimation, 500)
    } else if (input.acceleration(Dimension.X) > 70) {
        music.pewPew.play()
        music.setVolume(300)
        light.showAnimation(light.rainbowAnimation, 500)
    } else {
        light.clear()
        music.stopAllSounds()
    }
    
}
