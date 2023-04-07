const createElements = () => {
  let root = document.createElement("div");
  let text = document.createElement("div");
  let box = document.createElement("div");
  let load = document.createElement("div");
  return { root, text, box, load };
};
const setAttribute = ({ root, text, box, load }) => {
  root.setAttribute("class", "root");
  text.setAttribute("class", "text");
  box.setAttribute("class", "box");
  load.setAttribute("class", "load");
};

const StarCount = ({ width, text, load, interval }) => {
  let count = 0;
  let clearCount;
  function fun() {
    if (count === width) {
      clearInterval(clearCount);

      return;
    }
    load.style.width = `${count}%`;
    text.textContent = `${count}%`;
    count++;
  }
  clearCount = setInterval(fun, interval);
};

const int = () => {
  const { root, text, box, load } = createElements();

  setAttribute({ root, text, box, load });

  document.body.appendChild(root);
  root.appendChild(text);
  root.appendChild(box);
  box.appendChild(load);

  StarCount({ width: 75, text, load, interval: 20 });
};

int();
