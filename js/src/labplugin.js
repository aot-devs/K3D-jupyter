// jscs:disable requireVarDeclFirst

const base = require('@jupyter-widgets/base');
const k3d = require('./index');
const { version } = require('./version');

module.exports = {
    id: 'jupyter.extensions.k3d',
    requires: [base.IJupyterWidgetRegistry],
    activate(app, widgets) {
        require('style-loader?{attributes:{id: "k3d-katex"}}!css-loader!../node_modules/katex/dist/katex.min.css');
        require('style-loader?{attributes:{id: "k3d-dat.gui"}}!css-loader!../node_modules/dat.gui/build/dat.gui.css');

        widgets.registerWidget({
            name: 'k3d',
            version,
            exports: k3d,
        });
    },
    autoStart: true,
};
