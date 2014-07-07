/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
    name: "myapp.MainView",
    kind: "FittableRows",
    fit: true,
    components: [{
        kind: "onyx.Toolbar",
        content: "Hello World"
    }, {
        kind: "enyo.Scroller",
        fit: true,
        components: [{
            kind: "onyx.Button",
            content: "Make Call",
            ontap: "makeCall"
        }, {
            kind: "onyx.Button",
            content: "End Call",
            ontap: "endCall",
            hidden: true
        }]
    }, {
        kind: "onyx.Toolbar",
        components: [

        ]
    }],
    makeCall: function(inSender, inEvent) {

    },
    endCall: function(inSender, inEvent) {

    }
});