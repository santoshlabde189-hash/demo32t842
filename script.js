(function () {
  var root = document.documentElement;

  function load(k, d) { try { return localStorage.getItem(k) || d; } catch (e) { return d; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  // Clock
  var clock = document.getElementById('clock');
  function tick() { clock.textContent = new Date().toLocaleTimeString(); }
  tick(); setInterval(tick, 1000);

  // Counter
  var count = parseInt(load('count', '0'), 10) || 0;
  var out = document.getElementById('count');
  function show() { out.textContent = count; save('count', count); }
  document.getElementById('add').onclick = function () { count++; show(); };
  document.getElementById('reset').onclick = function () { count = 0; show(); };
  show();

  // Theme
  root.setAttribute('data-theme', load('theme', 'light'));
  document.getElementById('theme').onclick = function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    save('theme', next);
  };
})();
