

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
    .then(reg=>{
        // setTimeout(()=>{
        //     reg.sync.register('posteo-gatitos');
        //     console.log('Se enviaron fotos al server');
        // });

        Notification.requestPermission().then(result=>{
            console.log(result);
            reg.showNotification('Hola!');
        });
    });

    
}


//if(window.SyncManager){}


/* 
fetch('https://reqres.in/api/users')
    .then(res=>res.text())
    .then(console.log);
 */