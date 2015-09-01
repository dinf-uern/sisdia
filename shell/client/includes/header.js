Template.header.helpers({
    appName: function(){
        return AppsData.getData().title;
    },
    leftMenu: function(){
        var items = Menus.find({side: 'left'}).fetch();

        var result = _.filter(items, function(menuItem){
            var user = Meteor.user();

            if (!menuItem.roles || menuItem.roles.length <= 0)
                return true;

            //se não há usuário logado, mas a exibição do menu requer papéis => esconde o menu
            if (!user && menuItem.roles && menuItem.roles.length && menuItem.roles.length > 0)
                return false;


            return Roles.userIsInRole(user._id, menuItem.roles);

        });

        return result;
    },
    rightMenu: function(){
        var items = Menus.find({side: 'right'}).fetch();

        var result = _.filter(items, function(menuItem){
            var user = Meteor.user();

            if (!menuItem.roles || menuItem.roles.length <= 0)
                return true;

            //se não há usuário logado, mas a exibição do menu requer papéis => esconde o menu
            if (!user && menuItem.roles && menuItem.roles.length && menuItem.roles.length > 0)
                return false;


            return Roles.userIsInRole(user._id, menuItem.roles);

        });

        return result;
    }
});

function getUserName(user){
    var email = user.emails[0].address;
    var i = email.indexOf('@');
    return email.substr(0,i);
}