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
  // Make sure there is a div for us to render into
  const number = Math.floor(Math.random() * 1000);
  const id = `app1${number}`;
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('iframe');
    el.id = id;
    el.src = "http://localhost:8082"
    document.body.appendChild(el);
  }

  return el;
}