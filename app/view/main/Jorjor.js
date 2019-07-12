Ext.define('QuickStart.view.main.Jorjor', {
    extend: 'Ext.panel.Panel',
    controller: 'jorjor',
    model: 'jorjorModel',
    xtype: 'jorjor',
    
    items: [{
            cls: 'somethingTrucha',
            html: '<h1>It`s working properly</h1><script>console.log("hola")</script>',
        },
        {
            cls: 'somethingTrucho',
            html:'<p>hello hello</p>',
        },{
            xtype: 'button',
            text: 'Click for ConsoleLog',
            centered: true,
            cls: 'btn',
            handler: 'showConsoleLog'
            }
        ]
})