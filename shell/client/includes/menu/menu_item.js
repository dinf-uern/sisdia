Template.menuItem.helpers({
    link: function(){
        var result = "#";
        if (this.link)
            result = this.link;

        if(this.state)
            result = Router.routes[this.state].path();

        return result;
    },
    target: function(){
        result = "";
        if (this.target)
            result = this.target;

        return result;
    }
});