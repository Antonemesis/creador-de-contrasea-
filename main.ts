let contraseñas = 0
let numero = 0
let letra = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("pass")
    for (let index = 0; index < 8; index++) {
        contraseñas = randint(1, 3)
        if (contraseñas == 1) {
            numero = randint(1, 9)
            basic.showNumber(contraseñas)
        }
        if (contraseñas == 2) {
            letra = randint(1, 4)
            if (letra == 1) {
                basic.showString("a")
            } else {
                basic.showString("b")
            }
        }
    }
})
