import {LitElement, html} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'
import {AppHeader} from '/vendor/beaker-app-stdlib/js/com/app-header.js'
import {ProfileInfoCard} from '/vendor/beaker-app-stdlib/js/com/profile-info-card.js'
import feedMainCSS from '../css/feed-main.css.js'
import './com/posts-feed.js'

class FeedMain extends LitElement {
  constructor () {
    super()
  }

  render() {
    return html`
      <link rel="stylesheet" href="/vendor/beaker-app-stdlib/css/fontawesome.css">
      <app-header
        profile-pic-src="/img/tmp-profile.png"
        fontawesome-src="/vendor/beaker-app-stdlib/css/fontawesome.css"
      ></app-header>
      <main>
        <div>
          <nav>
            <profile-info-card></profile-info-card>
          </nav>
          <article>
            <posts-feed></posts-feed>
          </article>
        </div>
      </main>
    `
  }
}
FeedMain.styles = feedMainCSS

AppHeader.register()
ProfileInfoCard.register()
customElements.define('feed-main', FeedMain)
