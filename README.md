# Css Injector

Inject css rules to style tag of document head dynamically with javascript

You Find the npm project here - [Css Injector](https://www.npmjs.com/package/@creanick/cssinjector)

```
Note: Actual file written wtih javascript es6 syntax so for supporting old browser you have to compile it to older version javascript
```

## Installation

```javascript
npm install @creanick/cssinjector
```

## Import

```javascript
const CssInjector = require('@creanick/cssinjector');
```

## Syntax

```javascript
CssInjector.inject(cssString:String,insertTop:Boolean) : Boolean;
```

CssString : css style as string which you want to inject if it fails parsing css String as string it return false otherwise return true after successfully inject css rules;

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

It's is under ISC license, it can be use in any commercial and non commercial project without any charges
