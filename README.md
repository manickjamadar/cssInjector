# Css Injector

Inject css rules to style tag of document head dynamically with javascript

You Find the npm project here - [Css Injector](https://www.npmjs.com/package/@creanick/cssinjector)

```
Note: Actual file written wtih javascript es6 syntax so for supporting old browser
you have to compile it to older version javascript
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

## Contributing
Contributions to css injector are more than welcome! If you encounter any bugs, issues, or have suggestions for improvements, please [create an issue](https://github.com/cssInjector/chatly/issues) or submit a pull request.

## License
Css Injector is open-source and released under the [MIT License](https://chat.openai.com/LICENSE). Feel free to use, modify, and distribute this project as per the terms of the license.

## Contact
If you have any questions or inquiries about Css Injector, please feel free to contact me at [contact@manickjamadar.com](mailto:contact@manickjamadar.com). I'm always excited to discuss potential collaborations or new opportunities.

Thank you for considering Css Injector as a remarkable solution. We look forward to the opportunity of working together and revolutionizing the way people connect and communicate.
