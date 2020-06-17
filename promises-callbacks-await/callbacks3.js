function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`))
    document.head.append(script);
}

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script=>{
//     alert(`Cool, the script ${script.src} is loaded`);
//     alert( _ );
// })

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',
    function (error, script) {
        if (error) {
            console.log('Error')
        } else {
            console.log('Success')
        }
    }
)

//It calls callback(null, script) for successful load and callback(error) otherwise.