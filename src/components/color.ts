export class Color
{

  static red(msg:string){
    return Color.createSpan(msg, '#ff0000');
  }

  static green(msg:string){
    return Color.createSpan(msg, '#00ff00');
  }

  static blue(msg:string){
    return Color.createSpan(msg, '#0000ff');
  }

  private static createSpan(msg:string, color:any){
    let span = document.createElement('span');
    span.innerText = msg;
    span.style.color = color;
    return span.outerHTML;
  }

}