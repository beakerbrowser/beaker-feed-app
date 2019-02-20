import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import {profiles} from './tmp-beaker.js'
import feedMainCSS from '../css/feed-main.css.js'
import '/vendor/beaker-app-stdlib/js/com/app-header.js'
import '/vendor/beaker-app-stdlib/js/com/profile-info-card.js'
import './com/posts-feed.js'

class FeedMain extends LitElement {
  static get properties () {
    return {
      user: {type: Object}
    }
  }

  constructor () {
    super()
    this.user = null

    this.load()
  }

  async load () {
    this.user = await profiles.getCurrentUser()
    console.log('user', this.user)
  }

  render() {
    console.log('app render')
    return html`
      <link rel="stylesheet" href="/vendor/beaker-app-stdlib/css/fontawesome.css">
      <beaker-app-header
        profile-pic-src="/img/tmp-profile.png"
        fontawesome-src="/vendor/beaker-app-stdlib/css/fontawesome.css"
      ></beaker-app-header>
      <main>
        <div>
          <nav>
            <beaker-profile-info-card></beaker-profile-info-card>
          </nav>
          <article>
            <posts-feed user-url=${this.user ? this.user.url : ''}></posts-feed>
          </article>
        </div>
      </main>
    `
  }
}
FeedMain.styles = feedMainCSS

customElements.define('feed-main', FeedMain)
