---
title: "Buttons"
layout: "layouts/lib/pattern.njk"
permalink: "patterns/{{ page.fileSlug }}.html"
---

## Types


### `<button>`

```html
  <button type="button" class="btn btn-primary">Button .btn-primary</button>
  <button type="button" class="btn btn-secondary">Button .btn-secondary</button>
  <button type="button" class="btn btn-default">Button .btn-default</button>
  <button type="button" class="btn btn-link">Button .btn-link</button>
```

<button type="button" class="btn btn-primary">Button .btn-primary</button>
<button type="button" class="btn btn-secondary">Button .btn-secondary</button>
<button type="button" class="btn btn-default">Button .btn-default</button>
<button type="button" class="btn btn-link">Button .btn-link</button>


### `<a>`

```html
  <a href="/" class="btn btn-primary">Link .btn-primary</a>
  <a href="/" class="btn btn-secondary">Link .btn-secondary</a>
  <a href="/" class="btn btn-default">Link .btn-default</a>
  <a href="/" class="btn btn-link">Link .btn-link</a>
```

<a href="/" class="btn btn-primary">Link .btn-primary</a>
<a href="/" class="btn btn-secondary">Link .btn-secondary</a>
<a href="/" class="btn btn-default">Link .btn-default</a>
<a href="/" class="btn btn-link">Link .btn-link</a>


### `<input>`

```html
  <input class="btn btn-primary" type="submit" value="Input .btn-primary">
  <input class="btn btn-secondary" type="submit" value="Input .btn-secondary">
  <input class="btn btn-default" type="submit" value="Input .btn-default">
  <input class="btn btn-link" type="submit" value="Input .btn-link">
```


<input class="btn btn-primary" type="submit" value="Input .btn-primary">
<input class="btn btn-secondary" type="submit" value="Input .btn-secondary">
<input class="btn btn-default" type="submit" value="Input .btn-default">
<input class="btn btn-link" type="submit" value="Input .btn-link">


##  Sizes

  <div class="">
    <button type="button" class="btn btn-primary btn-minwidth">.btn-minwidth</button>
    <button type="button" class="btn btn-primary btn-block">.btn-block</button>
  </div>

## Status Disabled

  <div class="">
    <button type="button" class="btn btn-primary" disabled>Button Disabled</button>
    <button type="button" class="btn btn-secondary" disabled>Button Disabled</button>
    <button type="button" class="btn btn-default" disabled>Button Disabled</button>
    <button type="button" class="btn btn-link" disabled>Button Disabled</button>
  </div>

  <div class="">
    <a href="#" class="btn btn-primary disabled">Link .btn-primary</a>
    <a href="#" class="btn btn-secondary disabled">Link .btn-secondary</a>
    <a href="#" class="btn btn-default disabled">Link .btn-default</a>
    <a href="#" class="btn btn-link disabled">Link .btn-link</a>
  </div>

  <div class="">
    <input class="btn btn-primary" type="submit" value="Input Disabled" disabled>
    <input class="btn btn-secondary" type="submit" value="Input Disabled" disabled>
    <input class="btn btn-default" type="submit" value="Input Disabled" disabled>
    <input class="btn btn-link" type="submit" value="Input Disabled" disabled>
  </div>


## Quadratische Buttons


  <button class="btn btn-primary btn-ico" title="Zoom">
    <svg class="ico" aria-hidden="true">
      <use xlink:href="/assets/icons/icons.svg#uhr"></use>
    </svg>
  </button>

  <button class="btn btn-primary btn-ico btn-rounded" title="Zoom">
    <svg class="ico" aria-hidden="true">
      <use xlink:href="/assets/icons/icons.svg#vollbild"></use>
    </svg>
  </button>

  <button class="btn btn-secondary btn-ico" title="Zoom">
    <svg class="ico" aria-hidden="true">
      <use xlink:href="/assets/icons/icons.svg#teilen"></use>
    </svg>
  </button>

  <button class="btn btn-secondary btn-ico btn-rounded" title="Zoom">
    <svg class="ico" aria-hidden="true">
      <use xlink:href="/assets/icons/icons.svg#sprache"></use>
    </svg>
  </button>
