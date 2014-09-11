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
&lt;nav class="navbar navbar-default navbar-fixed-top" role="navigation"&gt;
 &lt;div class="container-fluid"&gt;
  &lt;div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"&gt;
   &lt;ul id="menu" name="menu" class="nav navbar-nav"&gt;
    &lt;li&gt;
     &lt;a name="h" parent="menu" level="1" href="/"&gt;&lt;span class="indicator"&gt;H&lt;/span&gt;ome&lt;/a&gt;
    &lt;/li&gt;
    &lt;li id="RandomMenu" name="r" parent="menu" level="1" class="dropdown"&gt;
     &lt;a href="#" class="dropdown-toggle" data-toglle="dropdown"&gt;
      &lt;span class="indicator"&gt;R&lt;/span&gt;andom
     &lt;/a&gt;
     &lt;ul class="dropdown-menu" role="menu"&gt;
      &lt;li&gt;Numbers&lt;/li&gt;
      &lt;li class="divider"&gt;&lt;/li&gt;
      &lt;li&gt;
       &lt;a name="g" parent="RandomMenu" level="2" href="http://google.com"&gt;&lt;span class="indicator"&gt;G&lt;/span&gt;oogle&lt;/a&gt;
      &lt;/li&gt;
     &lt;/ul&gt;
    &lt;/li&gt;
   &lt;/ul&gt;
  &lt;/div&gt;
 &lt;/div&gt;
&lt;/nav&gt;
</pre>
