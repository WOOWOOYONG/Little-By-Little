import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Setting");
  }

  async getHtml() {
    return `
    <h1>Setting</h1>
    <p>Manage your privacy and configuration</p>
    `;
  }
}
