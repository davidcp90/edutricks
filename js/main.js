$( window ).load(function() {
   chrono();
});
function chrono(){
    var start = new Date;

    setInterval(function() {
        value_time=parseInt(new Date - start);
        value_time=value_time/1000;
        value_time=Math.floor(value_time);
        if(value_time<=60){
            $('#time').html(value_time);

        }
    }, 1000);
    setInterval(function() {
        value_time_g=parseInt(new Date - start);
        value_time_g=value_time_g/5;
        value_time_g=Math.floor(value_time_g);
        if(value_time_g<=60){

            $('.progress').transition({ rotate: '+=15deg'});
        }
    }, 5);

}