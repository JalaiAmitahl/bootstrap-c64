# Commodore 64 Bootstrap Theme

This is a website theme based off of the look and feel of the C64 personal computer from the 1980s.

## Getting the fonts

The C64 fonts used in this theme can be downloaded from: [http://style64.org/c64-truetype].  They will not be packaged herein due to licensing and respect for the font creator.

### See it in action

The full theme can be seen in action here [http://danielgranttaylor.com].  The initial typing animation can be achieved by adding the _typing_ class to the load line, with the
_run_ class being added to the run line.

### Keyboard Operated Menus

The C64 menu script allows the site visitors to use the keyboard to access menu links and dropdowns.

#### Requirements

1. JQuery 1.11.1
1. Bootstrap 

#### Creation

Create a default bootstrap menu navbar, with the following adaptations:

1. Include the c64menu.min.js script in your HTML file.
1. To create a link which can be operated with a button press, set the name value of the anchor tag to be the letter to use to activate it.
1. To create a dropdown menu which can be operated with a button press, set the name value of the list item tag to be the letter to use to activate it.
1. Each letter can be used once per sub-menu. This means there are 36 possible entries for the top menu, and for each dropdown menu.
1. To highlight the selector for the menu, surround the character with a &lt;span class="indicator"&gt tag.
1. Each menu entry which can be activated *MUST* have a level attribute &gt;= 1.
1. Each menu entry other than the root, should have a parent attribute which matches the ID of the parent tag.
1. Create a MenuManager instance, passing in the name of your root menu list.
1. Add the MenuManager.keyHandler function as a keyup handler to the $(document).

#### Example

There is an example of the keyboard activated menu in the examples/keyboard.html file.

