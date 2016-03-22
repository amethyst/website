extends: default.tpl
---
<div class="cover-container">
  <div class="inner cover">
    <h1 class="cover-heading">Vision</h1>
    <p class="lead">Amethyst aims to be a fast, data-oriented, and data-driven game engine suitable for rapid prototyping and iteration.</p>
    <p class="lead">
      <a href="https://github.com/ebkalderon/amethyst#vision" class="btn btn-lg btn-default">Learn more</a>
    </p>
  </div>
</div>

<div>
  <h2>What's new?</h2>
  <br />
  <ul>
    {% for post in posts %}
      <li>
        <a href="{{post.path}}">{{ post.title }}</a>
      </li>
    {% endfor %}
  <ul>
</div>

<div>
  <h2>Test</h2>
  <p>Content</p>
</div>


<div>
  <h2>Test</h2>
  <p>Content</p>
</div>

<div>
  <h2>Test</h2>
  <p>Content</p>
</div>

<div>
  <h2>Test</h2>
  <p>Content</p>
</div>
