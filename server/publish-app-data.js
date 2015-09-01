Meteor.publish('app-data', function(){
    var appId = process.env.APP_INSTANCE_ID;
    console.log(appId);

    return AppsData.find({_id: appId});
});