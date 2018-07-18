var temperatureInCelsius = 40;
var temperatureInFahrenheit = calc();
 function calc(temperatureInCelsius){
  return((temperatureInCelsius * 9) / 5 + 32);
 }
 console.log("Temperature of", +temperatureInCelsius,  "celcius, will be", +calc(40), "fahrenheit");
var temperatureInFahrenheit = 104;
var temperatureInCelsius = calc1();
 function calc1(temperatureInFahrenheit){
   return(((temperatureInFahrenheit - 32) * 5) / 9);
 }
 console.log("Temperatue of", +temperatureInFahrenheit, "fahrenheit, will be", +calc1(104), "celsius");