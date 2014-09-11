/*
 * JavaScript Menu Management Script(s).
 * Copyright Daniel Taylor, 2014.
 * Created for http://www.danielgranttaylor.com
 */
function MenuManager(menuName) {
    this.menuElement = $("[name='" + menuName + "']")[0];
    this.menus = [this.menuElement];
    self = this;
    this.keyHandler = function(evt) {
        evt.preventDefault();
        var chr = evt.keyCode;
        if (chr == 27) {
            // Escape
            if (self.menus.length != 1) {
                element = self.menus.pop();
                element.classList.remove('open');
            }
        } else if (chr >= 65 && chr <= 90) {
            chr = String.fromCharCode(evt.which).toLowerCase();
            elems = $("[name^='" + chr + "']");
            element = null;
            for (var i = 0; i <= elems.length; i++)
            {
                if (elems[i].attributes['level'].value == self.menus.length) {
                    parentAttr = elems[i].attributes['parent'].value;
                    lastOpen = self.menus[self.menus.length - 1].attributes['id'].value;
                    if (parentAttr == lastOpen) {
                        element = elems[i];
                        break;
                    }
                }
            }
            if (null != element) {
                tagName = element.tagName.toLowerCase();
                if (tagName == "li") {
                    element.classList.add('open');
                    self.menus.push(element);
                } else if (tagName == "a") {
                    window.location = element.href;
                }
            }
        }
    }
}
