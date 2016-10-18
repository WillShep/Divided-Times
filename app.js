$(document).ready(function() {
   $(document).on("click", ".international", function(event) {
       //Prevents links from trying to go somewhere
       event.preventDefault();

       //Check if the li we just clicked on has the "active" class. If it does, it means that the user wants to slide the menu away from view, so we use slideUp. If it does not have this class it means the user wants to see that piece of content. Calling slideDown when the menu is already down won't do anything, so it'll stay visible, and we hide the things we don't want to see and show the one we do want to see.
       if ($(this).hasClass("active")) {
           $(this).removeClass("active");
           $("#slide-down").slideUp();
       } else {
           //Hide the content sections we don't want to see and show the one we do want to see. Need to put this above the slideDown to get the content ready before it's visible
           $("#international-drop").show();
           $("#politics-drop").hide();
           $("#business-drop").hide();
           $("#technology-drop").hide();
           $("#culture-drop").hide();
           $("#blogs-drop").hide();

           //Slide down the entire content sections
           $("#slide-down").slideDown();

           //Make sure to clear out all of the "active" classes on the nav to prevent multiple tabs from having the active class at the same time.
           $("#primary-nav li").removeClass("active");

           //Add class of active to create gray background and yellow lettering
           $(this).addClass("active");
       }
   });

      $(document).on("click", ".politics", function(event) {
       //Prevents links from trying to go somewhere
       event.preventDefault();

       //Check if the li we just clicked on has the "active" class. If it does, it means that the user wants to slide the menu away from view, so we use slideUp. If it does not have this class it means the user wants to see that piece of content. Calling slideDown when the menu is already down won't do anything, so it'll stay visible, and we hide the things we don't want to see and show the one we do want to see.
       if ($(this).hasClass("active")) {
           $(this).removeClass("active");
           $("#slide-down").slideUp();
       } else {
           //Hide the content sections we don't want to see and show the one we do want to see. Need to put this above the slideDown to get the content ready before it's visible
           $("#international-drop").hide();
           $("#politics-drop").show();
           $("#business-drop").hide();
           $("#technology-drop").hide();
           $("#culture-drop").hide();
           $("#blogs-drop").hide();

           //Slide down the entire content sections
           $("#slide-down").slideDown();

           //Make sure to clear out all of the "active" classes on the nav to prevent multiple tabs from having the active class at the same time.
           $("#primary-nav li").removeClass("active");

           //Add class of active to create gray background and yellow lettering
           $(this).addClass("active");
       }
   });
         $(document).on("click", ".business", function(event) {
       //Prevents links from trying to go somewhere
       event.preventDefault();

       //Check if the li we just clicked on has the "active" class. If it does, it means that the user wants to slide the menu away from view, so we use slideUp. If it does not have this class it means the user wants to see that piece of content. Calling slideDown when the menu is already down won't do anything, so it'll stay visible, and we hide the things we don't want to see and show the one we do want to see.
       if ($(this).hasClass("active")) {
           $(this).removeClass("active");
           $("#slide-down").slideUp();
       } else {
           //Hide the content sections we don't want to see and show the one we do want to see. Need to put this above the slideDown to get the content ready before it's visible
           $("#international-drop").hide();
           $("#politics-drop").hide();
           $("#business-drop").show();
           $("#technology-drop").hide();
           $("#culture-drop").hide();
           $("#blogs-drop").hide();

           //Slide down the entire content sections
           $("#slide-down").slideDown();

           //Make sure to clear out all of the "active" classes on the nav to prevent multiple tabs from having the active class at the same time.
           $("#primary-nav li").removeClass("active");

           //Add class of active to create gray background and yellow lettering
           $(this).addClass("active");
       }
   });
            $(document).on("click", ".technology", function(event) {
       //Prevents links from trying to go somewhere
       event.preventDefault();

       //Check if the li we just clicked on has the "active" class. If it does, it means that the user wants to slide the menu away from view, so we use slideUp. If it does not have this class it means the user wants to see that piece of content. Calling slideDown when the menu is already down won't do anything, so it'll stay visible, and we hide the things we don't want to see and show the one we do want to see.
       if ($(this).hasClass("active")) {
           $(this).removeClass("active");
           $("#slide-down").slideUp();
       } else {
           //Hide the content sections we don't want to see and show the one we do want to see. Need to put this above the slideDown to get the content ready before it's visible
           $("#international-drop").hide();
           $("#politics-drop").hide();
           $("#business-drop").hide();
           $("#technology-drop").show();
           $("#culture-drop").hide();
           $("#blogs-drop").hide();

           //Slide down the entire content sections
           $("#slide-down").slideDown();

           //Make sure to clear out all of the "active" classes on the nav to prevent multiple tabs from having the active class at the same time.
           $("#primary-nav li").removeClass("active");

           //Add class of active to create gray background and yellow lettering
           $(this).addClass("active");
       }
   });
               $(document).on("click", ".culture", function(event) {
       //Prevents links from trying to go somewhere
       event.preventDefault();

       //Check if the li we just clicked on has the "active" class. If it does, it means that the user wants to slide the menu away from view, so we use slideUp. If it does not have this class it means the user wants to see that piece of content. Calling slideDown when the menu is already down won't do anything, so it'll stay visible, and we hide the things we don't want to see and show the one we do want to see.
       if ($(this).hasClass("active")) {
           $(this).removeClass("active");
           $("#slide-down").slideUp();
       } else {
           //Hide the content sections we don't want to see and show the one we do want to see. Need to put this above the slideDown to get the content ready before it's visible
           $("#international-drop").hide();
           $("#politics-drop").hide();
           $("#business-drop").hide();
           $("#technology-drop").hide();
           $("#culture-drop").show();
           $("#blogs-drop").hide();

           //Slide down the entire content sections
           $("#slide-down").slideDown();

           //Make sure to clear out all of the "active" classes on the nav to prevent multiple tabs from having the active class at the same time.
           $("#primary-nav li").removeClass("active");

           //Add class of active to create gray background and yellow lettering
           $(this).addClass("active");
       }
   });
                  $(document).on("click", ".blogs", function(event) {
       //Prevents links from trying to go somewhere
       event.preventDefault();

       //Check if the li we just clicked on has the "active" class. If it does, it means that the user wants to slide the menu away from view, so we use slideUp. If it does not have this class it means the user wants to see that piece of content. Calling slideDown when the menu is already down won't do anything, so it'll stay visible, and we hide the things we don't want to see and show the one we do want to see.
       if ($(this).hasClass("active")) {
           $(this).removeClass("active");
           $("#slide-down").slideUp();
       } else {
           //Hide the content sections we don't want to see and show the one we do want to see. Need to put this above the slideDown to get the content ready before it's visible
           $("#international-drop").show();
           $("#politics-drop").hide();
           $("#business-drop").hide();
           $("#technology-drop").hide();
           $("#culture-drop").hide();
           $("#blogs-drop").show();

           //Slide down the entire content sections
           $("#slide-down").slideDown();

           //Make sure to clear out all of the "active" classes on the nav to prevent multiple tabs from having the active class at the same time.
           $("#primary-nav li").removeClass("active");

           //Add class of active to create gray background and yellow lettering
           $(this).addClass("active");
       }
   });
});