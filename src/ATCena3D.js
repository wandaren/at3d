/**
* Onde coleciona os objetos para exibição.<br>
* Podes criar cenas para diferentes contextos<br>
* Por enquanto os objetos são associados a apenas uma cena
* @class ATCena3D
* @constructor
*/
function ATCena3D()
{
  var objetos = [];
  
  
  this.criarObjeto;
  this.removerObjeto;
  this.acoplarObjeto;
  this.desacoplarObjeto;
  this.desenhar;
  
  this.criarObjeto = function(nome)
  {
    var objeto = new ATObjeto3D(nome);
    objetos.push(objeto);
  }
  this.removerObjeto(objeto)
  {
    
  }
  this.acoplarObjeto = function(objeto)
  {
    if(objeto.cena != null && objeto.cena != this)
    {
      objeto.cena.desacoplarObjeto(objeto);
      this.objetos
    }
  }
  this.desacoplarObjeto = function(objeto)
  {
    
  }
}