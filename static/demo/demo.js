/* Static demo: everything that would need the server shows a message instead */
(function () {
  var BASE = '/demo';
  var MESSAGE = 'This is a static demo, this action is not available here.';
  var toast, timer;

  function notify() {
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'wbit-demo-toast';
      toast.setAttribute('role', 'status');
      toast.textContent = MESSAGE;
      document.body.appendChild(toast);
    }
    toast.classList.add('is-visible');
    clearTimeout(timer);
    timer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2600);
  }

  // Runs before the handlers of the application
  document.addEventListener('submit', function (e) {
    var view = e.submitter && e.submitter.name;
    e.preventDefault();
    e.stopImmediatePropagation();
    if ('view_module' === view || 'view_list' === view) {
      var path = location.pathname.replace(/grid\/?$/, '').replace(/\/?$/, '/');
      if (BASE + '/' === path) { path = BASE + '/unread/list/'; }
      location.href = 'view_module' === view ? path + 'grid/' : path;
      return;
    }
    notify();
  }, true);

  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('a[data-demo-disabled]');
    if (link) {
      e.preventDefault();
      e.stopImmediatePropagation();
      notify();
    }
  }, true);

  document.addEventListener('DOMContentLoaded', function () {
    var pill = document.createElement('div');
    pill.className = 'wbit-demo-pill';
    pill.innerHTML = '<span>Demo</span><a href="' + (BASE ? '/en/pricing/' : 'https://wallabag.it/en/pricing/') + '">See plans</a>';
    document.body.appendChild(pill);
  });
})();
