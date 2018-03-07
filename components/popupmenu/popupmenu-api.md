<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [POPUPMENU_DEFAULTS][1]
-   [PopupMenu][2]
    -   [isRTL][3]
    -   [markupItems][4]
    -   [getPositionFromEvent][5]
    -   [position][6]
    -   [highlight][7]
    -   [select][8]
    -   [getSelected][9]
    -   [isInSelectableSection][10]
    -   [isInSingleSelectSection][11]
    -   [isInMultiselectSection][12]
    -   [detach][13]
    -   [close][14]
    -   [teardown][15]
    -   [updated][16]
    -   [destroy][17]

## POPUPMENU_DEFAULTS

Default Popupmenu Settings

**Properties**

-   `menu` **[string][18]** Menu's ID Selector, or a jQuery object representing a menu
-   `trigger` **[string][18]** Action on which to trigger a menu can be: click,
     rightClick, immediate ect
-   `autoFocus` **[boolean][19]** If false the focus will not focus the first list
     element. (At the cost of accessibility)
-   `attachToBody` **[boolean][19]** If true the menu will be moved out to the body.
     To be used in certin overflow situations.
-   `beforeOpen` **[function][20]** Callback that can be used for populating the
     contents of the menu.
-   `ariaListbox` **[string][18]** Switches aria to use listbox construct instead
     of menu construct (internal)
-   `eventObj` **[string][18]** Can pass in the event object so you can do a right
     click with immediate
-   `returnFocus` **[string][18]** If set to false, focus will not be returned to
     the calling element. It usually should be for accessibility purposes.
-   `placementOpts` **[object][21]** Gets passed to this control's Place behavior
-   `offset` **[object][21]** Can tweak the menu position in the x and y direction.
     Takes an object of form: `{x: 0, y: 0}`

## PopupMenu

Responsive Popup Menu Control aka Context Menu when doing a right click action.

**Parameters**

-   `element` **([Array][22]&lt;jQuery> | [HTMLElement][23])** the base element
-   `settings` **[object][21]?** incoming settings

### isRTL

Checks whether or not Right-To-Left reading mode is active.

Returns **[boolean][19]** whether or not the reading/writing direction is RTL

### markupItems

**Parameters**

-   `contextElement` **([Array][22]&lt;jQuery> | [HTMLElement][23])?** the top-most element that will
     be modified (defaults to the top-level menu).

Returns **void** 

### getPositionFromEvent

Get the event position, handling browser cases (IE,FF) as well as SVG

**Parameters**

-   `e` **jQuery.Event** the mouse event to be checked for pageX/pageY

Returns **[object][21]** containing x/y coordinates

### position

Sets the position of the context menu.

**Parameters**

-   `e` **jQuery.Event** jQuery Event that caused the menu to open (can be several types)

Returns **void** 

### highlight

Places a highlighted visual state on an item inside the menu

**Parameters**

-   `anchor` **[Array][22]&lt;jQuery>** the anchor tag representing the menu item.

Returns **void** 

### select

Adds/removes checkmarks that are in selectable groups inside the Popupmenu

**Parameters**

-   `anchor` **[Array][22]&lt;jQuery>** the anchor tag representing the menu item.

Returns **[array][22]** updated references to the anchor and its state.

### getSelected

Gets references to top-level menu items that are currently selected.

Returns **[Array][22]&lt;jQuery>** elements inside the top-level menu that are selected.

### isInSelectableSection

Determines whether or not an anchor resides inside of a selectable Popupmenu section.

**Parameters**

-   `anchor` **[Array][22]&lt;jQuery>** the anchor tag being checked.

Returns **[Array][22]&lt;jQuery>** elements inside the top-level menu that are selected.

### isInSingleSelectSection

Determines whether or not an anchor resides inside of a single-selectable Popupmenu section.

**Parameters**

-   `anchor` **[Array][22]&lt;jQuery>** the anchor tag being checked.

Returns **[Array][22]&lt;jQuery>** elements inside the top-level menu that are selected
 within a single-selectable section.

### isInMultiselectSection

Determines whether or not an anchor resides inside of a multi-selectable Popupmenu section.

**Parameters**

-   `anchor` **[Array][22]&lt;jQuery>** the anchor tag being checked.

Returns **[Array][22]&lt;jQuery>** elements inside the top-level menu that are selected
 within a multi-selectable section.

### detach

Removes event listeners from all popupmenu elements.

Returns **void** 

### close

Close the open menu

**Parameters**

-   `isCancelled` **[boolean][19]** Internally set option used if the operation is a cancel.
     Wont matter for manual api call.
-   `noFocus` **[boolean][19]?** Do not return focus to the calling element (fx a button)

### teardown

Removes bound events and generated markup from this component

Returns **void** 

### updated

Updates this Popupmenu instance with new settings

**Parameters**

-   `settings` **[object][21]?** incoming settings

Returns **this** component instance

### destroy

Teardown markup and detach all events.

Returns **void** 

[1]: #popupmenu_defaults

[2]: #popupmenu

[3]: #isrtl

[4]: #markupitems

[5]: #getpositionfromevent

[6]: #position

[7]: #highlight

[8]: #select

[9]: #getselected

[10]: #isinselectablesection

[11]: #isinsingleselectsection

[12]: #isinmultiselectsection

[13]: #detach

[14]: #close

[15]: #teardown

[16]: #updated

[17]: #destroy

[18]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[19]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[20]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[21]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[22]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[23]: https://developer.mozilla.org/docs/Web/HTML/Element