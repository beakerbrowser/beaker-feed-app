import {css} from '/vendor/beaker-app-stdlib/vendor/lit-element/lit-element.js'

const cssStr = css`
:host {
  --ui-width: 960px;
  --left-column-width: 280px;
  --feed-width: 560px;
  --column-spacing: 15px;
  --header-height: 50px;
}

.spacer {
  flex: 1;
}

beaker-app-header {
  position: sticky;
  top: 0;
}

header {
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, .25);
  position: relative;
  z-index: 1;
}

main > div {
  display: flex;
  width: var(--ui-width);
  margin: 20px auto 100px;
}

main nav {
  width: var(--left-column-width);
  margin-right: var(--column-spacing);
}

posts-feed {
  width: var(--feed-width);
}
`
export default cssStr