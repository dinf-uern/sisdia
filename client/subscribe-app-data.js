AppsData.getData = function(){
    return this.findOne();
}

Meteor.subscribe('app-data');