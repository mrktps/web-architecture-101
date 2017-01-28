---
layout: default
---

<div class="home">

  
  {{ content }}

  
    

    
    {% for collection in site.collections | sort: 'title' %}
      {% if collection.title != null %}
        <details open>
          <summary>
            <h2>
              {{ collection.title }}
            </h2>
          </summary>
          {% assign sortedPosts = collection.docs | sort: 'chapter' %}
          <ul class="post-list">
            {% for post in sortedPosts | sort: 'title' %}
              <li id="l{{ post.chapter }}">
                <span class="post-meta"><span class="">Lesson </span>{{ post.chapter}}</span>
                <h3>
                  <a class="post-link" href="{{ post.url | relative_url }}" {% if post.title_append %}data-emoji-append="{{ post.title_append }}" {% endif %}{% if post.title_prepend %}data-emoji-prepend="{{ post.title_prepend }}" {% endif %}>{{ post.title | escape }}</a>
                </h3>
              </li>
            {% endfor %}
          </ul>
        </details>
      {% endif %}
    {% endfor %}
    

  

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | relative_url }}">via RSS</a></p>

</div>