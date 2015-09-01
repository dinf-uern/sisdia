Meteor.startup(function(){
    if (AppsData.find().count() === 0) {
        AppsData.insert({
            name: 'test-app',
            title: 'Base App',
            system: 'base-app'
        });
    }
});