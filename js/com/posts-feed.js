import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import {repeat} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-html/directives/repeat.js'
import {feed, followgraph} from '../tmp-unwalled-garden.js'
import postsFeedCSS from '../../css/com/posts-feed.css.js'
import '/vendor/beaker-app-stdlib/js/com/feed/composer.js'
import '/vendor/beaker-app-stdlib/js/com/feed/post.js'

const LOAD_LIMIT = 50

class PostsFeed extends LitElement {
  static get properties () {
    return {
      userUrl: {type: String, attribute: 'user-url'},
      followedUsers: {type: Array},
      posts: {type: Array}
    }
  }

  constructor () {
    super()

    this.userUrl = ''
    this.followedUsers = []
    this.posts = []
  }

  get feedAuthors () {
    return [this.userUrl].concat(this.followedUsers)
  }

  attributeChangedCallback (name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval)
    if (name === 'user-url' && newval) {
      // trigger a load when we have a user url
      this.load()
    }
  }

  async load () {
    console.log('feed-posts load()', this.userUrl)
    this.followedUsers = (await followgraph.listFollows(this.userUrl)).map(site => site.url)
    this.posts = await feed.query({
      filters: {authors: this.feedAuthors},
      limit: LOAD_LIMIT
    })
    console.log(this.posts)
  }

  render () {
    console.log('render()')
    return html`
      <beaker-feed-composer></beaker-feed-composer>
      ${repeat(this.posts, post => html`<beaker-feed-post .post=${post}></beaker-feed-post>`)}
    `
  }
}
PostsFeed.styles = postsFeedCSS
customElements.define('posts-feed', PostsFeed)