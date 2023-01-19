/***** Npm *****/
document.write(`
    <script type='importmap'>
    {
        "imports": {
            "eyegl": "https://unpkg.com/eyegl/build/eyegl.module.js",
            "osui": "https://unpkg.com/@scidian/osui/build/osui.module.js"
        }
    }
    </script>
`);

(async () => {
    await import('https://unpkg.com/es-module-shims@1.5.0/dist/es-module-shims.js');
})();
