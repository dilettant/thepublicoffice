function readability() {
      window.baseUrl = 'http://www.readability.com';
      window.readabilityToken = 'cP4kvYr7BKyGUFuEtLDWhP4hBpeW9GdtcbTV4bGf';
      var s = document.createElement('script');
      s.setAttribute('type', 'text/javascript');
      s.setAttribute('charset', 'UTF-8');
      s.setAttribute('src', baseUrl + '/bookmarklet/read.js');
      document.documentElement.appendChild(s);
    }
    $(document).ready(function(){

        //parse links, user id's, hashtags
        function linkify(d){
          return d.replace(/\bhttps?\:\/\/\S+/gi, function(b){
            var c='';
            b= b.replace(/(\.*|\?*|\!*)$/,function(m,a){
              c=a;
              return ''
            });
            return '<a class="rrt-link" href="'+b+'">'+((b.length>25)?b.substr(0,24)+'...':b)+'</a>'+c;
          })
          .replace(/\B\@([A-Z0-9_]{1,15})/gi,'@<a href="http://twitter.com/$1">$1</a>')
          .replace(/\B\#([A-Z0-9_]+)/gi,'<a href="http://search.twitter.com/search?q=%23$1">#$1</a>')
        };

        var user = '_dilettant';
        var hashtag = 'thepublicoffice';
        var months = new Array("Jan", "Feb", "Mar", 
"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
"Oct", "Nov", "Dec");

        $.ajax({
          url: "http://search.twitter.com/search.json",
          dataType: 'jsonp',
          data: {"q": "%23" + hashtag, "from" : "@" + user, "result_type":"mixed"},
          success: function(data){
            var lastTweet = data.results[0];
            var dateString = lastTweet['created_at'];
            var date = new Date(dateString);
            var text = lastTweet['text'];
            var url = 'https://twitter.com/' + user + '/status/' + lastTweet['id_str'];
            var hour = date.getHours() -1;
            var minutes = date.getMinutes();
            var day = date.getDay();
            var month = date.getMonth();
            var tweetDate =  hour + ':' + minutes + ' ' + day + ' ' + months[month];

            $('.content').html(linkify(text));
            $('.date').html(tweetDate);
          }
        });
        
      // Readability
      var readab = document.getElementById('read');
      readab.onclick = function(){
        readability();
        return false;
      };

     });