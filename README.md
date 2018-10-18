# Css Injector

Inject css style to document head dynamically with javascript

## Import

```
import CssInjector from "cssInjector";
```

## Example

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