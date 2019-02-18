import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import {FeedComposer} from '/vendor/beaker-app-stdlib/js/com/feed/composer.js'
import {FeedPost} from '/vendor/beaker-app-stdlib/js/com/feed/post.js'
import postsFeedCSS from '../../css/com/posts-feed.css.js'

class PostsFeed extends LitElement {
  render () {
    return html`
      <feed-composer></feed-composer>
      <feed-post></feed-post>
      <feed-post></feed-post>
      <feed-post></feed-post>
      <feed-post></feed-post>
      <feed-post></feed-post>
      <feed-post></feed-post>
      <feed-post></feed-post>
    `
  }
}
PostsFeed.styles = postsFeedCSS
FeedComposer.register()
FeedPost.register()
customElements.define('posts-feed', PostsFeed)