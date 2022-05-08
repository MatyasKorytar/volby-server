// SERVER
radio.setGroup(299)
let volby = ["A", "B", "C", "D", "E", "F", "G"]
let count = [0, 0, 0, 0, 0, 0, 0]
// start hlasování
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    radio.sendNumber(6)
})
// počítání hlasů
radio.onReceivedString(function on_received_string(receivedString: string) {
    
    if (receivedString == "A") {
        count[0] += 1
    } else if (receivedString == "B") {
        count[1] += 1
    } else if (receivedString == "C") {
        count[2] += 1
    } else if (receivedString == "D") {
        count[3] += 1
    } else if (receivedString == "E") {
        count[4] += 1
    } else if (receivedString == "F") {
        count[5] += 1
    } else if (receivedString == "G") {
        count[6] += 1
    }
    
})
// zobrazení hlasů
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let x = 0
    for (let i of volby) {
        if (count[x] != 0) {
            basic.showString(i)
            basic.pause(500)
            basic.showNumber(count[x])
            basic.pause(500)
        }
        
        x += 1
    }
})
