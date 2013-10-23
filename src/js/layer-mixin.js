module.exports = Em.Mixin.create({

    classNames: ['layer'],

    targetView: null,

    didInsertElement: function() {
        this._super();
        var layer = this.get('targetView').$().parents('.layer'),
            zIndex = 1000;
        if (layer.length > 0) {
            zIndex = 10 + (1*layer.css('z-index'));
        }
        this.$().css('z-index', zIndex);
    }
});