//just for init
/*:
 *
 *
 * @plugindesc 测试的脚本
 * @author sherylynn
 *
 * @help new test for rmmv
 *
 *
 *
 */

//let HealthBar=Window.HealthBar||{}


let VariableProgressBar= window.VariableProgressBar ||{}

//class Varia

VariableProgressBar._Scene_Map_createAllWindows =Scene_Map.prototype.createAllWindows
Scene_Map.prototype.createAllWindows=()=>{
  VariableProgressBar._Scene_Map_createAllWindows.call(this)
  this.addChild(new VariableProgressBar.Window_Bar())
}

class VariableProgressBar_Window_Bar extends Window_Base {
  constructor(...args){
    super(...args)
    this.opacity=this.windowOpacity()
    alert(1)
    super.initialize('20','20','500','500')
  }
  initialize(){
    return super.initialize(this.windowPosition().x,this.windowPosition().y,windowWidth(),windowHeight())
  }
  windowPosition(){
    return {x:parseInt(VariableProgressBar.parameters['windowPostionX']||'20'),y:parseInt(VariableProgressBar.parameters['windowPositionY']||'20')}
  }
  widowWidth() {
    return parseInt(VariableProgressBar.parameters['windowWidth']||'500')
  }
  windowHeight() {
    return parseInt(VariableProgressBar.parameters['windowHeight']||'500')
  }
  windowOpacity(){
    return parseInt(VariableProgressBar.parameters['windowOpacity']||'50')
  }
  show(){

  }
}
let VariableProgressBar_Window_Bar_1 =new VariableProgressBar_Window_Bar()
