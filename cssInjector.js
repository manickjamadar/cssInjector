module.exports = class CssInjector{
    static inject(cssString,insertTop){
        if( !cssString || typeof cssString !== 'string' || typeof document === 'undefined')return false;
        const head = document.head || document.getElementsByTagName('head')[0];
        let inlineStyle = document.querySelector("style");
        if(inlineStyle === null){
            inlineStyle = document.createElement("style");
            inlineStyle.type = "text/css";
            head.appendChild(inlineStyle);
        }
        const cssTextNode = document.createTextNode(cssString);
        const styleChild = inlineStyle.childNodes[0];
        if(insertTop){
            inlineStyle.insertBefore(cssTextNode,styleChild);
        }else{
            inlineStyle.insertBefore(cssTextNode,null);
        }
        return true;
    }
}