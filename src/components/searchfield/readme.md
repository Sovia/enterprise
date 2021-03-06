---
title: Searchfield
description: Displays an editable field. A user can enter and then search for an alphanumeric value within the system. Best used for targeted, keyword-based searches for specific objects.
demo:
  embedded:
  - name: Common Configuration
    slug: example-index
  pages:
  - name: Context Search Style
    slug: example-context-search-style
  - name: Different Template
    slug: example-different-template
  - name: Searchfield + Go Button
    slug: example-go-button
  - name: Demo of `clearable` Setting
    slug: example-clearable
  - name: No "All Results For `x`" Link
    slug: example-no-all-results-link
  - name: Categories (Compact Size)
    slug: example-categories-short
  - name: Categories (Full Size)
    slug: example-categories-full
  - name: Header Search Field (Compact)
    slug: example-searchfield-expanded
  - name: Header Search Field (Large)
    slug: example-searchfield-large
---

There is a specific component wrapper for searchfield components that reside inside of [toolbars]( ./toolbar/) entitled [toolbar searchfield]( ./toolbar-searchfield). These components are very different from regular searchfields and have an expanded API.

Defining the `source` setting on Searchfield will cause it to invoke an [autocomplete]( ./autocomplete). The source is not directly handled by the searchfield component and is passed directly into this new autocomplete instance.

## Code Example

```html
<div class="field">
  <label for="searchfield">Search</label>
  <input id="searchfield" name="searchfield" class="searchfield" data-options= "{'clearable': 'true'}" placeholder="Type a search term"/>
</div>
```

## Keyboard Shortcuts

- <kbd>Tab</kbd> will tab into the search field in a forward direction
- <kbd>Shift + Tab</kbd> will tab out of the search field in a backward direction
- <kbd>Alt + Delete</kbd> (Mac) will clear the contents of the field
- <kbd>Ctrl + Backspace</kbd> (PC) will clear the contents of the field
- <kbd>Up</kbd> or <kbd>Down</kbd> arrows, when on a toolbar, will move to the next/previous object on the toolbar. This is done because the normal keys of <kbd>Left</kbd> and <kbd>Right</kbd> will navigate through the toolbar
- <kbd>Left</kbd> or <kbd>Right Arrow</kbd> when on a toolbar will navigate through the next/previous object on the toolbar. When a list is open it will navigate up and down a list.
- <kbd>Enter</kbd> should submit the search. You will need to handle this in your code

## Testability

- Please refer to the [Application Testability Checklist](https://design.infor.com/resources/application-testability-checklist) for further details.
