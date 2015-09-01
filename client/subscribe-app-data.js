AppsData.getData = function(){
    return this.findOne().fetch();
}

Meteor.subscribe('app-data');