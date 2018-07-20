import rough from 'roughjs';

(() => {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement;
  const rc = rough.canvas(canvas);
  rc.rectangle(10, 10, 100, 100);
})();