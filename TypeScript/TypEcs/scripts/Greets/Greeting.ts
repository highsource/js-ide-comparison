/// <reference path="Messenger.ts" />
/// <reference path="Recipient.ts" />
module Greets {
	export class Greeting {
		private message : string;
		private recipient : Recipient;
		private messenger : Messenger;
		// Messenger could be found/autosuggested
		// JSDoc displayed on hover
		constructor(message: string, title:string, messenger: Messenger)
		{
			this.message = message;
			this.recipient = new Recipient(title);
			// Autosuggest on "m" was slow
			this.messenger = messenger;
		}
		private getGreeting(): string
		{
			return this.message + ", " + this.recipient.getTitle();
		}
		greet()
		{
			this.messenger.sendMessage(this.getGreeting());
		}
	}
}