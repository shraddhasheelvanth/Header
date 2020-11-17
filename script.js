jQuery(function(){
    jQuery('#showall').click(function(){
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
    jQuery('#showall-commerce').click(function(){
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
    jQuery('#showallResources').click(function(){
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
  
// function responsive_menu()
// {
//     var e=document.getElementById('menu');
//     if(e.className === 'dropdown')
//     {
//        e. className += "responsive";
//     }
//     else{
//         e.className='dropdown';
//     }

//     }
jQuery(function(){
    jQuery('#iconbar').click(function(){
          jQuery('.solution').show();
        //   jQuery('.content').hide();
        //   jQuery('.sol-payments').hide();

   });
});

if($(window).width() < 768)
{
    jQuery(function(){
        jQuery('#first').click(function(){
            jQuery('.drop').show();
            
            jQuery('#second').hide();
            jQuery('#third').hide();
            jQuery('#fourth').hide();
            jQuery('#fifth').hide();  
       });
    });
}
else{
    jQuery('#first').show();
    jQuery('#second').show();
            jQuery('#third').show();
            jQuery('#fourth').show();
            jQuery('#fifth').show(); 
}

if($(window).width() < 768)
{
    jQuery(function(){
        jQuery('#second').click(function(){
            jQuery('.drop2').show();
            
            jQuery('#first').hide();
            jQuery('#third').hide();
            jQuery('#fourth').hide();
            jQuery('#fifth').hide();  
       });
    });
}
else{
    jQuery('#first').show();
    jQuery('#second').show();
            jQuery('#third').show();
            jQuery('#fourth').show();
            jQuery('#fifth').show(); 
}

if($(window).width() < 768)
{
    jQuery(function(){
        jQuery('#third').click(function(){
            jQuery('.drop3').show();
            
            jQuery('#first').hide();
            jQuery('#second').hide();
            jQuery('#fourth').hide();
            jQuery('#fifth').hide();  
       });
    });
}
else{
    jQuery('#first').show();
    jQuery('#second').show();
            jQuery('#third').show();
            jQuery('#fourth').show();
            jQuery('#fifth').show(); 
}


jQuery(function(){
    jQuery('#iconbar').click(function(){
          jQuery('.solution').show();
        //   jQuery('.content').hide();
        //   jQuery('.sol-payments').hide();
      
        jQuery('#iconbar').hide();
        // jQuery('#close').show();

        // function myFunction(x) {
        //     x.classList.toggle("#close");
        //   }

   });
});


if($(window).width() < 768)
{
    jQuery(function(){
        jQuery('#showall').click(function(){
           
            jQuery('.sol-payments').hide();
            jQuery('#showall-overview').hide();
            jQuery('#showall-accepatance').hide();
            jQuery('#showall-fraud').hide();
            jQuery('#showall-pci').hide(); 
            jQuery('#showall-commerce').hide();
            jQuery('#showall-card').hide();
            jQuery('#showall-enterprise').hide(); 
            jQuery('#showall-debit').hide();
            jQuery('#showall-collabaration').hide();
            jQuery('#showall-tech').hide();
            

       });
    });
}















