$( window ).load(function() {
    $('#start').click(function(e) {
        e.preventDefault();
        $('#intro').fadeOut('fast');
        $('#questions').fadeIn('fast');
        resizeContainers();
        $('#questions').transition({ opacity: 1, delay: 100 });
        chrono();
    });
    $('#trig-one').click(function(e){
        choice=$(this).attr('data-choice');

        if(choice=="1"){

            sumScore();
        }
        else{
            cheer=false;
            cheerUp(cheer);
        }
    });
    $('#trig-two').click(function(e){
        choice=$(this).attr('data-choice');

        if(choice=="1"){

            sumScore();
        }
        else{
            cheer=false;
            cheerUp(cheer);
        }
    });
});
var jsonp ='[{ "pregunta": "There are more than 5 Latin American countries in the bottom quarter of the PISA results", "opt_one": "True", "opt_two": "False", "answer": "choice-one"}, {"pregunta": "Proficiency in mathematics is a strong predictor of positive outcomes for young adults, influencing in their expected future earnings", "opt_one": "False", "opt_two": "True", "answer": "choice-two"}, {"pregunta": "Out of 65 countries in the PISA study, Colombia ranked 64 in math", "opt_one": "False", "opt_two": "True", "answer": "choice-two"} ]';
var ans_count=1,
score=0;
read_obj=JSON.parse(jsonp);
function resizeContainers(){
    h=$(window).height();
    ha=h*0.5;
    hd=h*0.45;
    $('.two').height(ha);
    $('.full').height(hd);
}
var epiphany;
function chrono(){
    var start = new Date;
    epiphany=setInterval(function() {
        value_time=parseInt(new Date - start);
        value_time=value_time/1000;
        value_time=Math.floor(value_time);
        if(value_time<=30){
            $('#time').html(value_time);
            $('.progress').transition({ rotate: '+=30deg'});
        }
        else{
            clearInterval(epiphany);
            loadNew();
        }
    }, 1000);



}

function loadNew(){
    ans_count++;
    clearInterval(epiphany);
    if(ans_count<5){
        $('#qnum').html(ans_count);
        re=read_obj[ans_count-2];
        $('#question').html(re.pregunta);
        $('#chu').html(re.opt_one);
        $('#chd').html(re.opt_two);
        if(re.answer=="choice-one"){
            $('#trig-one').attr('data-choice','1');
            $('#trig-two').attr('data-choice','0');
        }
        else{
            $('#trig-one').attr('data-choice','0');
            $('#trig-two').attr('data-choice','1');
        }
        chrono();
    }
        else{
            showScore();
        }


    }
    function sumScore(){
        var time_sc=parseInt($('#time').html());
        time_sc=(30-time_sc)+100;
        score+=time_sc;
        cheer=true;
        cheerUp(cheer);

    }
    function showScore(){
        $('.question-top').fadeOut('fast', function() {
            $('#badge-container').fadeIn('fast').transition({ opacity: 1, delay: 100 });
            $('#choice-container').fadeOut('fast');
            $('#scoredisplay').fadeIn('fast').transition({ opacity: 1, delay: 100 });
            $('#encourage-msg').fadeIn('fast');
            $('#uscore').html(score);
            if(score<=260){
                $('#score-msg').html('Low Score');
                $('#encourage-msg').html("It seems you're optimistic about education in Latin America (or you have slow fingers  ), there's still a lot to be done and we are working on it!");
            }

            else{
                $('#score-msg').html('High Score');
                $('#encourage-msg').html("Congrats, seems that you understand the problem (and you have fast fingers  ), meet the solution.");
            }
        });
    }
    function cheerUp(cheer){
        if(cheer){
            $('#modalyeah').fadeIn('fast',function(){
                $(this).delay(1000).fadeOut('fast', function() {
                    loadNew();
                });
            });
        }
        else{
            $('#modalwrong').fadeIn('fast',function(){
                $(this).delay(1000).fadeOut('fast', function() {
                    loadNew();
                });
            });
        }
    }