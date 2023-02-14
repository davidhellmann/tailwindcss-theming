const plugin = require('tailwindcss/plugin');
const finalColorSet = require('./utils/createColorSet');
const finalThemeNames = require('./utils/createThemeNames');
const finalThemeColorSettings = require('./utils/createThemeColorSettings');

module.exports = plugin.withOptions(
    function (options) {
        return function ({addBase}) {
            addBase(finalColorSet(options));
        };
    },
    function (options) {
        const finalSet = finalColorSet(options);
        const finalSettings = finalThemeColorSettings(finalSet);
        const finalThemes = finalThemeNames(options);

        return {
            theme: {
                colors: finalSettings,
                data: finalThemes
            },
        };
    },
);
