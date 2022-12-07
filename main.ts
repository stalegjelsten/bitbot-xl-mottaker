radio.onReceivedNumber(function (receivedNumber) {
    teller += 1
    if (receivedNumber == 0) {
        bitbot.stop(BBStopMode.Brake)
        bitbot.setLedColor(0xD82600)
    } else if (receivedNumber == 100) {
        bitbot.go(BBDirection.Forward, 100)
        bitbot.BBBias(BBRobotDirection.Left, 13)
        bitbot.setLedColor(0x18E600)
    } else if (receivedNumber >= 1 && receivedNumber <= 49) {
        bitbot.move(BBMotor.Right, BBDirection.Forward, 100)
        bitbot.move(BBMotor.Left, BBDirection.Forward, receivedNumber * 1.6 - 10)
        bitbot.BBBias(BBRobotDirection.Left, 13)
        for (let indeks = 0; indeks <= 5; indeks++) {
            bitbot.setPixelColor(indeks, 0xFF0000)
            bitbot.setPixelColor(indeks + 6, 0x18E600)
        }
    } else if (receivedNumber >= 50 && receivedNumber <= 99) {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 100)
        bitbot.move(BBMotor.Right, BBDirection.Forward, (receivedNumber - 49) * 1.6 - 10)
        bitbot.BBBias(BBRobotDirection.Left, 13)
        for (let indeks = 0; indeks <= 5; indeks++) {
            bitbot.setPixelColor(indeks, 0x18E600)
            bitbot.setPixelColor(indeks + 6, 0xFF0000)
        }
    } else if (receivedNumber == 201) {
        bitbot.rotatems(BBRobotDirection.Left, 60, 25)
        bitbot.ledRainbow()
    } else if (receivedNumber == 202) {
        bitbot.rotatems(BBRobotDirection.Right, 60, 25)
        bitbot.ledRainbow()
    } else if (receivedNumber == 203) {
        bitbot.go(BBDirection.Reverse, 100)
        bitbot.BBBias(BBRobotDirection.Left, 13)
        bitbot.setLedColor(0xFF0000)
    } else if (receivedNumber == 255) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1313, 190, 255, 47, 150, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else if (receivedNumber == 254) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
    } else {
        bitbot.stop(BBStopMode.Brake)
        bitbot.setLedColor(0xD82600)
    }
    if (teller % tidPåSvart == 0) {
        svartLED += 1
    }
    bitbot.setPixelColor(svartLED, 0x000000)
    bitbot.setPixelColor(svartLED + 6, 0x000000)
    if (teller >= tidPåSvart * 6) {
        svartLED = 0
        teller = 0
    }
})
let tidPåSvart = 0
let svartLED = 0
let teller = 0
radio.setGroup(138)
bitbot.select_model(BBModel.XL)
teller = 0
svartLED = 0
tidPåSvart = 3
