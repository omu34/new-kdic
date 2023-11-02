/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.php,js',
        './pages/**/*.php,js',
        // content: ["../../*.{php,html,js}","../../components/*.{html,php,js}",],

    ],
    relative: true,
    transform: (" (content) => content.replace(/taos:/g,'')"),
    files: ['./components/*.{php,html,js}'],

    safelist: [
        '!duration-[0ms]',
        '!delay-[0ms]',
        'html.js :where([class*="taos:"]:not(.taos-init))'
    ],


    theme: {
        screens: {
            'sm': { 'min': '640px', 'max': '767' },
            'md': { 'min': '768px', 'max': '1023' },
            'lg': { 'min': '1024px', 'max': '1279' },
            'xl': { 'min': '1280px', 'max': '1535' },
            '2xl': { 'min': '1536px' },
            'xs': { 'min': '320px', 'max': '567' }
        },
        font: {
            "avenir-bold": ["AvenirNextLTPro", "sans-serif", "bold"],
            "avenir-regular": ["AvenirNextLTPro", "sans-serif", "normal"],
            "unbounded-bold": ["Unbounded-Bold", "sans-serif", "bold"],
            "unbounded-medium": ["Unbounded-Medium", "sans-serif", "medium"],
        },
        extend: {
            overflow: {
                hidden: 'hidden',
            },
        },
        plugins: [

            require('tailwindcss-animated'),
            require('taos/plugin')
        ],
    },
}