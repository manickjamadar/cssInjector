# Css Injector

Inject css style to document head dynamically with javascript

## Import

```ruby
import CssInjector from "cssInjector";
```

## Syntax

```ruby
CssInjector.inject(cssString:String,insertTop:boolean);
```

cssString : css style as string which you want to inject;

inserTop: default false, if true and already style tag exist then

it inject css rules at the top of any existing css rules

## Example

#### InserTop : false

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

#### InsertTop : true

```ruby
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