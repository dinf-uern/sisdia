Template.menuDropdown.helpers({
    getSubmenusStates: function(){
        var statesArr = [];
        if(this.submenus && this.submenus.length > 0)
            statesArr = _.map(this.submenus, function(item){
                return item.state;
            });

        return statesArr;
    },
    submenus: function(){
        var items = this.submenus;
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