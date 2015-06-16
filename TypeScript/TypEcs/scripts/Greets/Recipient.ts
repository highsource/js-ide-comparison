module Greets {
	export class Recipient {
		// Autosuggest "string"
		// Autosuggest may freeze on Ctrl+Space without prefix
		private title : string;
		constructor(title :string) {
					// Autosuggest this.title
				this.title = title;
				// No formatting - but may be a bug
		}
		// Refactoring is supported
		getTitle() : string {
			return this.title;
		}
	}
}