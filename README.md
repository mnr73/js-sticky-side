# js sticky side

simple sticky side with js that can use in frameworks like vue and react.

![sticky side with javascript](/files/preview.GIF "js sticky side")

## notes

- it can be used just in flexbox grids.
- target element should be parent flexbox and it should have just one child.
- the child should not have bottom margin.

## how to use

install it with this command.

`npm i js-sticky-side`

import that in your code.

`import { sticky } from "js-sticky-side"`

create object and use it

`var stickySide = new sticky(parentElement, int topOffest, int bottomOffset, int screenWith);`

- **parentElement** : the parent element that should be flexbox
- **topOffest** : sticky child space to top (default 0)
- **bottomOffset** : sticky child space to bottom (default 0)
- **screenWith** : minimum screen size that sticky should be active (default 0)

## example

```js
var stickySide = new sticky(document.querySelector("#sticky-parent"), 80, 20, 768);

window.addEventListener("scroll", stFunction);

function stFunction() {
  stickySide.sticky();
}
```
