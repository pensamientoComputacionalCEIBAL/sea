const api = new XMLHttpRequest ();

let url, datos, validadorDeConsulta;
let participante, documento, tipo;

$( document ).ready(function() {

$("#codImg").val('<img src="URL" alt="texto alternativo" width="valor" height="valor" />');

$("#resultado").focus(function(){ this.select(); });
$("#codImg").focus(function(){ this.select(); });

$( "#generar" ).click(function() { generar (); $("#resultado").focus(); });

$("#pa1").focus(); });

function generar () {
  let cadenaFinal = "";
  if ( $("#pa1").val() != '' && $("#pregunta").val() != '') {
    cadenaFinal = '<div style="width:800px;margin: auto; border-top: 35px solid #f4df78; border-right: 6px solid #f4df78; border-bottom: 6px solid #f4df78; border-left: 6px solid #f4df78; box-shadow: 3px 3px 5px 3px #999; word-break: break-word;">';
    cadenaFinal += '\n';
    cadenaFinal += '<table border="0" cellpadding="20" style="width:98%">' + '\n';
    cadenaFinal += '<tbody>' + '\n';
    cadenaFinal += '<tr> <td> <div style="padding:1%"; word-break: break-word;>' + '\n';
    cadenaFinal += '<p>' + $("#pa1").val() + '</p>' + '\n';
    if ( $("#pa2").val() != '') { cadenaFinal += '<p>' + $("#pa2").val() + '</p>' + '\n'; }
    if ( $("#pa3").val() != '') { cadenaFinal += '<p>' + $("#pa3").val() + '</p>' + '\n'; }
    if ( $("#pa4").val() != '') { cadenaFinal += '<p>' + $("#pa4").val() + '</p>' + '\n'; }
    if ( $("#pa5").val() != '') { cadenaFinal += '<p>' + $("#pa5").val() + '</p>' + '\n'; }
    cadenaFinal += '</div> </td> </tr>' + '\n';
    cadenaFinal += '<tr> <td> <div style="padding:1%; word-break: break-word;">' + '\n';
    cadenaFinal += '<div style="background: #ee9b8d; padding: 2%; border-radius: 0 80px 60px 0; border-left: 30px solid #f4df78; width: 90%; margin: 1%;">' + '\n';
    cadenaFinal += '<p>' + $("#pregunta").val() + '</p>' + '\n';
    cadenaFinal += '</div> </div> </td> </tr>' + '\n';
    $("#resultado").val(cadenaFinal);
    
  } else { $("#resultado").val("¡ERROR! ¡ES obligatorio completar, al menos el 1er párrafo y la pregunta!"); }
}
