jQuery(function(){
    jQuery('#showall').hover(function(){
          jQuery('.sol-payments').show();
          jQuery('.content').hide();
          jQuery('.sol-commerce').hide();

   });
   // jQuery('.showSingle').click(function(){
   //       jQuery('.targetDiv').hide();
   //       jQuery('#div'+$(this).attr('target')).show();
   // });
   jQuery('.Payment-div3-div1').click(function(){
    jQuery('.sol-payments').hide();
    jQuery('.content').show();
    
});
 
});


// jQuery(function(){
 
//    jQuery('.Payment-div3-div1').click(function(){
//     jQuery('.sol-payments').hide();
//     jQuery('.content').show();
    
// });
// });

jQuery(function(){
    jQuery('#showall-commerce').hover(function(){
          jQuery('.sol-commerce').show();
          jQuery('.content').hide();
          jQuery('.sol-payments').hide();

   });
   // jQuery('.showSingle').click(function(){
   //       jQuery('.targetDiv').hide();
   //       jQuery('#div'+$(this).attr('target')).show();
   // });
   jQuery('.Commerce-div3-div1').click(function(){
    jQuery('.sol-commerce').hide();
    jQuery('.content').show();
    
});
 
});

jQuery(function(){
    jQuery('#showallResources').hover(function(){
          jQuery('.res-payments').show();
          jQuery('.content').hide();
        //   jQuery('.sol-payments').hide();

   });
   // jQuery('.showSingle').click(function(){
   //       jQuery('.targetDiv').hide();
   //       jQuery('#div'+$(this).attr('target')).show();
   // });
//    jQuery('.Commerce-div3-div1').click(function(){
//     jQuery('.sol-commerce').hide();
    // jQuery('.content').show();
    
});
  
function responsive_menu()
{
    var e=document.getElementById('menu');
    if(e.className === 'solution')
    {
       e. className += "responsive";
    }
    else{
        e.className='solution';
    }

    }











