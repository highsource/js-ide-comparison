/// <reference path="Greets/Greeting.ts" />
/// <reference path="Greets/ConsoleMessenger.ts" />
var greeting :  Greets.Greeting = new Greets.Greeting("Hello", "World", new Greets.ConsoleMessenger());
greeting.greet();
// Did not manage to debug