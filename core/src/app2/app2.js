export function bootstrap(props) {
  return Promise.resolve();
}

export function mount(props) {
  domElementGetter()
  return Promise.resolve();
}

export function unmount(props) {
  return Promise.resolve();
}

function domElementGetter() {
  const id = `app2`;
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('iframe');
    el.id = id;
    el.src = "http://localhost:8083"
    document.body.appendChild(el);
  }

  return el;
}