import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
    <h1>Posts</h1>
    <p>Post something?</p>
    `;
  }
}
