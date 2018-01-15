import {GT, SPACE, BR} from "@constants/special-chars";

export class Console
{

  private element:Element;

  constructor(element:Element){
    this.element = element;
  }

  log(...msg:any[]){
    this.writeToConsole(msg);
  }

  delayLog(delay:number, ...msg:any[]){
    setTimeout(this.writeToConsole.bind(this), delay, msg);
  }

  private writeToConsole(msg:any[]){
    msg = msg.map((part):string => { return part.toString(); });
    let content:string = this.element.innerHTML;
    this.element.innerHTML = content + GT + SPACE + msg.join(SPACE) + BR;
  }

}