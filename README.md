# Commodore 64 Bootstrap Theme

This is a website theme based off of the look and feel of the C64 personal computer from the 1980s.

## Getting the fonts

The C64 fonts used in this theme can be downloaded from: [http://style64.org/c64-truetype].  They will not be packaged herein due to licensing and respect for the font creator.

### See it in action

The full theme can be seen in action here [http://danielgranttaylor.com].  The initial typing animation can be achieved by adding the _typing_ class to the load line, with the
_run_ class being added to the run line.

### Keyboard Operated Menus

The C64 menu script allows the site visitors to use the keyboard to access menu links and dropdowns.

#### Creation
Create a default bootstrap menu navbar, with the following adaptations:

1. To create a link which can be operated with a button press, set the name value of the anchor tag to be the letter to use to activate it.
1. To create a dropdown menu which can be operated with a button press, set the name value of the list item tag to be the letter to use to activate it.
1. Each letter can be used once per sub-menu. This means there are 36 possible entries for the top menu, and for each dropdown menu.
1. To highlight the selector for the menu, surround the character with a &lt;span class="indicator"&gt tag.

#### Example

The following code will allow the h key to navigate to the home page, and the r then g key to go to google.

<pre>
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
 <div class="container-fluid">
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
   <ul id="menu" name="menu" class="nav navbar-nav">
    <li>
     <a name="h" parent="menu" level="1" href="/"><span class="indicator">H</span>ome</a>
    </li>
    <li id="RandomMenu" name="r" parent="menu" level="1" class="dropdown">
     <a href="#" class="dropdown-toggle" data-toglle="dropdown">
      <span class="indicator">R</span>andom
     </a>
     <ul class="dropdown-menu" role="menu">
      <li>Numbers</li>
      <li class="divider"></li>
      <li>
       <a name="g" parent="RandomMenu" level="2" href="http://google.com"><span class="indicator">G</span>oogle</a>
      </li>
     </ul>
    </li>
   </ul>
  </div>
 </div>
</nav>
</pre>
