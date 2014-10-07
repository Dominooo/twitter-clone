$(document).ready(function(){
  // hide retweet and stuff
$(".stats").hide();
$(".tweet-actions").hide();


$(".tweet").mouseenter(function(){
  $(".stats").show();
  $(".tweet-actions").show();
});

$(".tweet").mouseleave(function(){
  $(".stats").hide();
  $(".tweet-actions").hide();
});

// unhide characters and tweet button
  $(".tweet-compose").click(function(){
    $("#tweet-controls").show();
    $(this).css('height','5em');
  });


// begin subtracting chars

  $(".tweet-compose").keydown(function(){
    
    var originalChar = 140;

    var charRemaining = originalChar - $(this).val().length;


    $('#char-count').html(charRemaining);

    // turn red if 10 or under
    if (charRemaining < 11) {
      $('#char-count').css('color','red');
    } 
    // but make sure it goes back to normal if they delete characters to go over 10
    else {
      $('#char-count').css('color','#999');
    };
    // If they go over 140 hide the tweet button
    if (charRemaining < 0) {
      $("#tweet-submit").hide();
    } 
    // If they delete the extra characters bring the button back
    else {
      $("#tweet-submit").show();
    };

  });


// take the user input and put it in the right column.



$('#tweet-submit').click(function(){
  var userTweet = ('<div class="tweet"><div class="content"><img class="my-avatar" src="'
    + 'img/alagoon.jpg'
    + '" /><strong class="fullname"> '
    + $('.awesome-user').text()
    + ' </strong><span class="username"> '
    + '@DevinRocks '
    + ' </span><p class="tweet-text"> ' 
    + $('.tweet-compose').val() 
    + ' </p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/vklimenko.jpg" /><img src="img/funwatercat.jpg" /></div></div><div class="time">1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div><!-- .tweet -->');
  $('#stream').prepend(userTweet);
});


});