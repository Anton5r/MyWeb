import React from 'react';

class ChatwootWidget extends React.Component {
  componentDidMount () {
    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: 'right', // This can be left or right
      locale: 'ru', // Language to be set
      type: 'expanded_bubble', // [standard, expanded_bubble]
      launcherTitle: 'Админ',
    };

    // Paste the script from inbox settings except the <script> tag
    (function(d,t) {
      var BASE_URL="https://app.chatwoot.com";
      var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=BASE_URL+"/packs/js/sdk.js";
      s.parentNode.insertBefore(g,s);
      g.async=!0;
      g.onload=function(){
        window.chatwootSDK.run({
          websiteToken: 'Cmfx3f9w7cPvYWZfrwtejZn9',
          baseUrl: BASE_URL
        })
      }
    })(document,"script");
  }

  render () {
    return null;
  }
}

export default ChatwootWidget   