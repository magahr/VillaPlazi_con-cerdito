document.addEventListener("keyup", dibujarTeclado);
var d            = document.getElementById('canvas');
var papel        = d.getContext("2d");
var ancho_lienzo = d.width;
var x_inicio     = 100;
var y_inicio     = 100;
var x_final      = 100;
var y_final      = 100;
var teclas =
{ UP    : 38,
  DOWN  : 40,
  LEFT  : 37,
  RIGHT : 39
};

var fondo = {
  url: "tile.png",
  cargaOk: false
}

var cerdo = {
  url: "cerdo.png",
  cargaOk: false
}

fondo.imagen      = new Image();       //creando una nueva instancia de la clase Image()
fondo.imagen.src  = fondo.url;         //utilizando la propiedades o atributos de la clase Image()
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen      = new Image();
cerdo.imagen.src  = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
   fondo.cargaOk = true;
   dibujar();
}

function cargarCerdos()
{
   cerdo.cargaOk = true;
   dibujar();
}

function dibujar()
{

  if (fondo.cargaOk == true)
  {
     papel.drawImage(fondo.imagen, 0, 0);
     papel.drawImage(cerdo.imagen,  x_inicio - 1, y_inicio - 1);
  }

}

function dibujarTeclado(evento)
{
    var movimiento  = 10;
    switch (evento.keyCode) {
      case teclas.UP:
        y_final = y_inicio - movimiento;
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(cerdo.imagen, x_inicio, y_inicio);
        y_inicio = y_final;
        break;
      case teclas.DOWN:
        y_final = y_inicio + movimiento;
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(cerdo.imagen, x_inicio, y_inicio);
        y_inicio = y_final;
        break;
      case teclas.LEFT:
        x_final = x_inicio - movimiento;
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(cerdo.imagen, x_inicio, y_inicio);
        x_inicio = x_final;
        break;
      case teclas.RIGHT:
        x_final = x_inicio + movimiento;
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(cerdo.imagen, x_inicio, y_inicio);
        x_inicio = x_final;
        break;
      default:
    }
}
