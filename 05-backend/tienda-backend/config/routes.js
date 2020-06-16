/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /': { 
    view: 'pages/homepage' 
  },
  'GET /holaMundo': { 
    action: 'usuario/saludar' 
  },
  'POST /cargarArchivo/:idProducto': { 
    action: 'usuario/upload' 
  },
  'GET /descargarArchivo/:idProducto': { 
    action: 'usuario/download' 
  },
  'GET /descargarArchivo/:idProducto': { 
    action: 'usuario/download' 
  },
  'POST /prenderLed/:idLed': { 
    action: 'led/encenderLed' 
  }
};
