# Css Injector

Inject css style to document head dynamically with javascript

## Import

```ruby
import CssInjector from "cssInjector";
```

## Syntax

```ruby
CssInjector.inject(cssString) //cssString : css style as string which you want to inject
```

## Example

```ruby
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