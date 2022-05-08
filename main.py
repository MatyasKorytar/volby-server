#SERVER
radio.set_group(299)
volby = ["A", "B", "C", "D", "E", "F", "G"]
count = [0, 0, 0, 0, 0, 0, 0]

#start hlasování
def on_button_pressed_b():
    radio.send_number(6)
input.on_button_pressed(Button.B, on_button_pressed_b)

#počítání hlasů
def on_received_string(receivedString):
    global count
    if receivedString == "A":
            count[0] += 1
    elif receivedString == "B":
            count[1] += 1
    elif receivedString == "C":
            count[2] += 1
    elif receivedString == "D":
            count[3] += 1
    elif receivedString == "E":
            count[4] += 1
    elif receivedString == "F":
            count[5] += 1
    elif receivedString == "G":
            count[6] += 1
radio.on_received_string(on_received_string)

#zobrazení hlasů
def on_button_pressed_a():
    x = 0
    for i in volby:
        if count[x] != 0:
            basic.show_string(i)
            basic.pause(500)
            basic.show_number(count[x])
            basic.pause(500)
        x += 1    
input.on_button_pressed(Button.A, on_button_pressed_a)
