import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `blox-scrypt`
 * A web component that exposes the scrypt password-based KDF
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class BloxScrypt extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'blox-scrypt',
      },
    };
  }
}

window.customElements.define('blox-scrypt', BloxScrypt);
