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
  <ul class="list-unstyled">
    {% for post in posts %}
      <li>
        <h4><a href="{{post.path}}">{{ post.title }}</a></h4>
      </li>
    {% endfor %}
  <ul>
</div>