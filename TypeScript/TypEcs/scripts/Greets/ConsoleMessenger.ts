/// <reference path="Messenger.ts" />
module Greets {
	// Error not displayed on hover, only in "problems"
	export class ConsoleMessenger implements Messenger {
		// No autosuggest on "send""
		sendMessage(message:string)
		{
			// console autosuggested
			console.log(message);			
		}
	} 
}