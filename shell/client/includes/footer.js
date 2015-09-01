Template.footer.helpers({
    unidadeSistema: function(){
        return Session.get('unidadeSistema');
    },
    ano: function(){
        var dateOnServer = Session.get('dateOnServer');
        return moment(dateOnServer).format('YYYY');
    }
});