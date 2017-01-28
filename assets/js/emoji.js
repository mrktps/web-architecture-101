
  (function(){
    if(doesSupportEmoji()) {
      const prepends = document.querySelectorAll('[data-emoji-prepend]'),
      appends = document.querySelectorAll('[data-emoji-append]');
      
      for(let i = 0; i < prepends.length; i++) prepends[i].innerHTML = `${prepends[i].dataset.emojiPrepend}${prepends[i].innerHTML}`;
      for(let i = 0; i < appends.length; i++) appends[i].innerHTML = `${appends[i].innerHTML}${appends[i].dataset.emojiAppend}`;
    }
    /**
     * Determine if this browser supports emoji.
     *
     * Modified from https://gist.github.com/mwunsch/4710561
     * and probobly originally github's javascript source
     */
    function doesSupportEmoji() {
      try {
        var context, smiley;
        if (!document.createElement('canvas').getContext) return;
        context = document.createElement('canvas').getContext('2d');
        if (typeof context.fillText != 'function') return;
        smile = String.fromCharCode(55357) + String.fromCharCode(56835);
     
        context.textBaseline = "top";
        context.font = "32px Arial";
        context.fillText(smile, 0, 0);
        return context.getImageData(16, 16, 1, 1).data[0] !== 0;
      } catch(e) {}
    }
  })();
