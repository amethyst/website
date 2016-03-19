extends: default.tpl
---
<div class="cover-container">
  <div class="inner cover">
    <h1 class="cover-heading">Vison</h1>
    <p class="lead">Amethyst aims to be a fast, data-oriented, and data-driven game engine suitable for rapid prototyping and iteration.</p>
    <p class="lead">
      <a href="https://github.com/ebkalderon/amethyst#vision" class="btn btn-lg btn-default">Learn more</a>
    </p>
  </div>
</div>

<div class="post-list">
  <h2>This Week in Amethyst</h2>
  <br />
  {% for post in posts %}
   <a href="{{post.path}}">{{ post.title }}</a>
  {% endfor %}
</div>