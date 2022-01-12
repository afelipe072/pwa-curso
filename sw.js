
// Ciclo de vida del SW

self.addEventListener('install',evento=>{

    //Descarga assets
    //Creamos un cache
    console.log('SW: Instalando SW!!!');

    const instalacion = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();            
        },1);
    });

    evento.waitUntil(instalacion)

});


//cuando el SW toma el control de la aplicación

self.addEventListener('activate',evento=>{

    //Borrar cache viejo

    console.log('SW: Activo y listo para controlar la app');
});

//FETCH: manejo de peticiones HTTP
self.addEventListener('fetch',evento=>{

    //Aplicar estrategias del cache
    // console.log('SW:',evento.request.url);

    // if(evento.request.url.includes('https://reqres.in/')){
    //     const resp = new Response(`{ok:false,mensaje:Sin acceso}`)

    //     evento.respondWith(resp)
    // }
});

//SYNC: Recuperamos la conexión a internet

self.addEventListener('sync',evento=>{

    console.log('Tenemos conexión');
    console.log(evento);
    console.log(evento.tag);

});

//PUSH: Manejar las notificaciones push

self.addEventListener('push',evento=>{
    console.log('Notificación recibida')
});