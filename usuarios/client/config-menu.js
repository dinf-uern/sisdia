getMenuContaTitle = function(){
    var user = Meteor.user();

    function getUserName(user){
        var email = user.emails[0].address;
        var i = email.indexOf('@');
        return email.substr(0,i);
    }

    if (user)
        return getUserName(user);

    return 'Conta';
}

var menuContaId = Menus.addMenuItem({
    title: getMenuContaTitle, side: 'right', submenus: [
        {title: 'Entrar', notLoggedIn: true, state: 'entrar'},
        {title: 'Criar conta', notLoggedIn: true, state: 'criarConta'},
        {title: 'Mudar senha', loggedIn: true, state: 'mudarSenha'},
        {title: 'Editar perfil', loggedIn: true, state: 'editarPerfil'},
        {title: 'Sair', loggedIn: true, state: 'sair'}
    ]
});