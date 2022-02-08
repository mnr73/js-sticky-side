class sticky {
  constructor(stickyParent, topOffset = 0, bottomOffset = 0, screenWidth = 0) {
    this.lastScrollTop = 0;
    this.stickyParent = stickyParent;
    this.topOffset = topOffset;
    this.bottomOffset = bottomOffset;
    this.screenWidth = screenWidth;
  }

  sticky() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let scrollUp = false;
    if (st > this.lastScrollTop) {
      scrollUp = false;
    } else {
      scrollUp = true;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;

    let windowHeight = innerHeight;
    let windowWidth = innerWidth;
    let stickychild = this.stickyParent.firstChild;
    if (windowWidth < this.screenWidth) {
      return;
    }

    let parentHeight = this.stickyParent.offsetHeight;
    let childHeight = stickychild.offsetHeight;

    let applyMargin = 0;

    let top = this.stickyParent.getBoundingClientRect().top;
    if (childHeight <= windowHeight - this.topOffset || scrollUp) {
      if (top < this.topOffset) {
        if (
          childHeight < windowHeight ||
          parseInt(stickychild.style.marginTop) + top > this.topOffset
        ) {
          applyMargin = -top + this.topOffset;
          if (applyMargin + childHeight >= parentHeight) {
            applyMargin = parentHeight - childHeight;
          }
          stickychild.style.marginTop = applyMargin + "px";
        }
      } else {
        stickychild.style.marginTop = 0;
      }
    } else {
      if (childHeight - windowHeight < -top - this.bottomOffset) {
        applyMargin = -(childHeight - windowHeight + top) - this.bottomOffset;
        if (applyMargin + childHeight >= parentHeight) {
          applyMargin = parentHeight - childHeight;
        }
        if (applyMargin > parseInt(stickychild.style.marginTop)) {
          stickychild.style.marginTop = applyMargin + "px";
        }
      }
    }
  }
}

export { sticky };
