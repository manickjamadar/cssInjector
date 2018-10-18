export default class CssInjector{
    static inject(cssString){
        if(!cssString || typeof document === 'undefined')return;
        const head = document.head || document.getElementsByTagName('head')[0];
        let inlineStyle = document.querySelector("style");
        if(inlineStyle === null){
            inlineStyle = document.createElement("style");
            inlineStyle.type = "text/css";
            head.appendChild(inlineStyle);
        }
        if(inlineStyle.styleSheet){
            inlineStyle.styleSheet.cssText = cssString;
        }else{
            inlineStyle.appendChild(document.createTextNode(cssString));
        }
    }
}