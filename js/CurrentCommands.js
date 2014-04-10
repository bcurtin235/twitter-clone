/**
 * Created by Mjolnir on 4/3/14.
 */

$(document).ready(function(){
    //current state of twit submit btn set = to disabled for load state//

    //hides tweet controls when initially loading

    $("#tweet-controls").hide();

    $("#tweet-content > .tweet-compose").focus(function(){

        $(this).css("height","10.0em");
        $("#tweet-controls").show();
    });


    $("#tweet-content > .tweet-compose").blur(function() {
        if ($("textarea").val().length == 0) {
            $(this).css("height", "2.5em");
            $("#tweet-controls").hide();
        }
    });

    //Variable Get Counts
    //Variable Container Current Count
    //
    //
    //If (current count) is >= 0 THEN enable twit submit btn
    $('.tweet-compose').on("input",function() {
        var count= 140;
        var text= $(this).val().length;
        var newCount= count - text;
            if (newCount>= 11) {
                $("#char-count").css("color","#999")
            }
            else if (newCount<= 10) {
                $("#char-count").css("color","red")
            };
        //Next two statements disable/enable the tweet submit button//
            if (count < 0) {
                $('.button').attr('disabled',"true")
            }
            else if (count >= 0) {
                $('.button').removeAttr("disabled")
            };

        //var textCount= text.length();//
        $("#char-count").text(newCount);

   });

    //Next set is intended to submit a tweet using the username and picture currently uploaded

    $("#tweet-submit").on("click",function() {
        var tweetText = $(".tweet-compose").val();
        var newTweet = $("#stream .tweet").first().clone();
            $(newTweet).find("p").first().text(tweetText);
            $(newTweet).find(".avatar").attr("src", "img/babysloath.jpg");
            $(newTweet).find(".fullname").text("Baby Sloath");
            $(newTweet).find(".username").text("@BabySloath");
            $("#stream").prepend(newTweet);
            $(newtweet).find(".reply").hide();
            $(newTweet).find(".stats").hide();

    });

    $(document).on("click",".tweet",function() {

        $('.tweet').find(".reply, .stats").slideDown();

    });

//    $(document).blur(".tweet",function() {
//
//        $('.tweet').find(".reply, .stats").slideUp();
//
//    });

//    $(document).on("click",".tweet",function() {
//
//        $('.tweet').find(".reply, .stats").slideUp();
//    });
});