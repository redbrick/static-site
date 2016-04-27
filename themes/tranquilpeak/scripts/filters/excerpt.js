(function() {
  'use strict';
  hexo.extend.filter.register('after_post_render', function(data) {
    var content = data.content;
    content = content.split('</p>');
    data.excerpt = content[0] + '</p>' + content[1] + '</p>';
    content = content.splice(0, 1);
    data.content = content.join('</p>');
    return data;
  });
})();
