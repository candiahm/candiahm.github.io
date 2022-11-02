

//activate


/**
 * 
 * fetch
 * 
 * push
 */

self.addEventListener("install", (event)=> {
    //console.log("install")
    console.log('%c SW - install ', 'background: #222; color: #bada55');

    //console.log("%cService Worker Instalado", 'color: green; background: yellow; font-size: 30px')


    // El nuevo sw si la app se está ejecuntado
    // queda en modo waiting hasta que el anterior se desactive
    // Queda a la espera del cambio.
    // Sirve en DEV en PROD no conviene. Pero el profe dice que él lo deja.
    // Conclusión dejarlo
    // Se utiliza con Clientes.claim()
    // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting
    //
    self.skipWaiting();
})

self.addEventListener("activate", (event)=> {
    //console.log("activate")
    console.log('%c SW - activate ', 'background: #222; color: #bada55');

    
})

self.addEventListener("fetch", (event)=> {
    //console.log("fetch")
    console.log('%c SW - fetch ', 'background: #222; color: #bada55');


})

self.addEventListener("push", (event)=> {
    //console.log("SW - push", event)
    console.log('%c SW - push ', 'background: #222; color: #bada55', event);
    console.log('%c SW - push ', 'background: #222; color: #bada55', event.data.text());

    serviceWorkerRegistration.showNotification(event.data.text())
})