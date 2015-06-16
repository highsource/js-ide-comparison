///<reference path="Messenger.ts"/>
// Automatically suggested module "Greets"
module Greets {
    export class ConsoleMessenger implements Messenger {
        // Could automatically implement interfaces
        sendMessage(message:string) {
            console.log(message);
        }
    }
}
