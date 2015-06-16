///<reference path="Messenger.ts"/>
///<reference path="..\..\..\..\..\..\..\..\Users\Alexey Valikov\.WebStorm10\system\extLibs\http_github.com_borisyankov_DefinitelyTyped_raw_master_jquery_jquery.d.ts"/>
module Greets {
    export class MsgDivMessenger implements Messenger {
        sendMessage(message:string) {
            $("#msg").text(message);
        }
    }
}
