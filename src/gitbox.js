(function () {
  var $nav = document.getElementsByClassName('file-navigation');

  if (!$nav[0]) {
    // TODO: A more robust check to determine if we are on the repo page
    return;
  }

  var pathName = window.location.pathname;
  var url = 'https://codesandbox.io/s/github' + window.location.pathname;

  var $sandboxLink = document.createElement('a');
  $sandboxLink.innerHTML = 'Open in Sandbox';
  $sandboxLink.href = url;
  $sandboxLink.className = 'link_gitbox';

  $nav[0].appendChild($sandboxLink);
})();
