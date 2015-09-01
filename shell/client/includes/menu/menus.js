Menus = new Mongo.Collection('menus');
Menus.addMenuItem = function(item){
    return this._collection.insert(item);
}