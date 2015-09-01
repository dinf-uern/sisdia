Menus.addMenuItem({
    title: 'some', side: 'right', link: 'http://uol.com.br', submenus: [
        {title: 'other', roles:['admin'], link: 'http://mercadolivre.com.br'},
        {title: 'other', link: 'http://mercadolivre.com.br'}
    ]
});

Menus.addMenuItem({
    title: 'other', side: 'left', roles:['admin'], link: 'http://mercadolivre.com.br'
});