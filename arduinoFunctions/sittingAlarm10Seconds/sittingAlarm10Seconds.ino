/*
  Blink
  Github: Chini5ko
  Will turn red when you sit more than 20 minutes :) 
*/

#define white            5
#define red              7

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(white, OUTPUT);
  pinMode(red, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  int second = 1000;
  int minute = second * 60;

  //set up your time to work 
  int work = 10 * second; 
  int rest = 5 * second;
  
  //on white
  digitalWrite(white, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(work); 
  digitalWrite(white, LOW);
  //rest when is red 
  digitalWrite(red, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(rest); 
  digitalWrite(red, LOW);
                    
}
