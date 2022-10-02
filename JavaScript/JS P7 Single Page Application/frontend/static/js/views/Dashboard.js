import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
    <h1>Welcome back, Yong </h1>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sapiente
    consequuntur minus, error vel iusto tempore maiores debitis laborum nemo
    quasi sequi minima sunt vero in voluptates totam magnam id. Totam labore
    quisquam ipsum saepe modi ex magnam fugiat deserunt.
    </p>
    <p>
    <a href="/posts" data-link>View recent posts</a>.
    </p>
    `;
  }
}
