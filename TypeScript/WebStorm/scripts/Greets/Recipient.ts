/**
 * @module Greets
 */
// JSDoc support
module Greets {
    // Autosuggest Recipient from the file name - cool
    export class Recipient {
        // Autosuggest for string
        private title:string;
        // Proactive autosuggest
        constructor(title:string) {
            // Autosuggest "create field title"
            this.title = title;
        }

        /**
         * Returns the title of the recipient.
         * @returns {string}
         */
        getTitle():string {
            return this.title;
        }
    }

}