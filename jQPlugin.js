(function ($$$){
    $$$.sum33=function (array){
        var total=0;

        $$$.each(array,function (index,value){
            value=$$$.trim(value);
            var numb=parseFloat(value)||0;
            total+=numb;
        });
        return total;
    };
})(jQuery);