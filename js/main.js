$( window ).load(function() {
   chrono();
   resizeContainers();
});
function resizeContainers(){
    h=$(window).height();
    ha=h*0.5;
    hd=h*0.45;
    $('.two').height(ha);
    $('.full').height(hd);
}
function chrono(){
    var start = new Date;

    setInterval(function() {
        value_time=parseInt(new Date - start);
        value_time=value_time/1000;
        value_time=Math.floor(value_time);
        if(value_time<=30){
            $('#time').html(value_time);

        }
    }, 1000);
    setInterval(function() {
        value_time_g=parseInt(new Date - start);
        value_time_g=value_time_g/5;
        value_time_g=Math.floor(value_time_g);
        if(value_time_g<=30){

            $('.progress').transition({ rotate: '+=15deg'});
        }
    }, 5);

}