Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    trackPageView: true
});

//define o t�tulo das p�ginas
Router.onAfterAction(function() {
        var result = '';

        if (this.state.get('title'))
            result = this.state.get('title');

        document.title = result;
    }
);