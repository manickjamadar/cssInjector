# Css Injector

Inject css rules to style tag of document head dynamically with javascript

## Installation

```javascript
npm install cssinjector
```

## Import

```javascript
const CssInjector = require('cssinjector');
```

## Syntax

```javascript
CssInjector.inject(cssString:String,insertTop:Boolean);
```

CssString : css style as string which you want to inject;

InsertTop : default false, if true and already style tag exist then it inject css rules at the top of any existing css rules

## Example

#### InsertTop : false

```javascript
CssInjector.inject(`
    body{
        margin: 0;
        background: red;
    }
    div{
        display: flex;
    }
`);
```

#### InsertTop : true

```javascript
CssInjector.inject(`
    body{
        margin: 0;
        background: red;
    }
    div{
        display: flex;
    }
`,true);
```