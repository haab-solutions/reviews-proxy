import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './share.css'

const Share = () => {
  return (
    <div styleName="share-modal-container">
      <div styleName="share-modal-flexbox">
        <div styleName="share-modal">
          <section>
            <div>
              <header><h1>Share</h1></header>
              <section>
                <div styleName="facebook-flexbox">
                  <div>
                    <svg viewBox="0 0 32 32" styleName="facebook-svg"><path d="m8 14.41v-4.17c0-.42.35-.81.77-.81h2.52v-2.08c0-4.84 2.48-7.31 7.42-7.35 1.65 0 3.22.21 4.69.64.46.14.63.42.6.88l-.56 4.06c-.04.18-.14.35-.32.53-.21.11-.42.18-.63.14-.88-.25-1.78-.35-2.8-.35-1.4 0-1.61.28-1.61 1.73v1.8h4.52c.42 0 .81.42.81.88l-.35 4.17c0 .42-.35.71-.77.71h-4.21v16c0 .42-.35.81-.77.81h-5.21c-.42 0-.8-.39-.8-.81v-16h-2.52a.78.78 0 0 1 -.78-.78" fillRule="evenodd"></path></svg>
                  </div>
                  <div>Facebook</div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default CSSModules(Share, styles);