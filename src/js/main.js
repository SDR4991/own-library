import './lib/lib';

$('button').on("click", function(){
    $('div').eq(2).toggleClass('active');
});
$('button').removeAttr("disabled", "disabled").html('Check')

$('div').click(function(){
    console.log($(this).index())
})

/* console.log($('div').eq(2).find('.more')); */

/* console.log($('.some').closest('.find')) */

console.log($('.find').siblings());