/// <reference path="Messenger.ts" />
// UI to add typings
/// <reference path="../../typings/jquery/jquery.d.ts"/>
module Greets {
    export class MsgDivMessenger implements Messenger {
    	sendMessage(message:string)
    	{
    		$('#msg').text(message);
    	}
    }
}