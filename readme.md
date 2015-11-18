# jquery-regex [![Build Status](https://travis-ci.org/baldwicc/jquery-regex.svg?branch=master)](https://travis-ci.org/baldwicc/jquery-regex)
> like :contains("stuff"), but :regex("^stuff$")

## Installation
```shell
bower install jquery-regex --save
```

## Usage
```javascript
var data = [
  '<div id="element">',
  '  <p id="child">',
  '    wheeee!'
  '  </p>',
  '</div>'
].join('\n');

// will return #element 😄
$(data).find(':regex(^wheeee!$)');

// and of course, it works in the dom
$('body').append(data);
$('#element').regex(':regex(^whe{4}!$)');
```

## License

MIT © baldwicc
