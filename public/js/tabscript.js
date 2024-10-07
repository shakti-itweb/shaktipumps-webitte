// tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");


  // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(document).ready(function() {
      // Hide all tab contents except the first one
      $(".tab_contents").hide();
      $(".tab_contents:first").show();
  
      /* If in tab mode */
      $("ul.tabss li").click(function() {
          // Hide all tab contents
          $(".tab_contents").hide();
  
          // Get the value of the 'rel' attribute and show the corresponding tab content
          var activeTab = $(this).attr("rel"); 
          $("#" + activeTab).fadeIn();        
  
          // Update the active tab styling
          $("ul.tabss li").removeClass("active");
          $(this).addClass("active");
  
          // Update drawer headings styling
          $(".tab_drawer_headings").removeClass("d_actives");
          $(".tab_drawer_headings[rel^='" + activeTab + "']").addClass("d_actives");
      });
  
      /* If in drawer mode */
      $(".tab_drawer_headings").click(function() {
          // Hide all tab contents
          $(".tab_contents").hide();
  
          // Get the value of the 'rel' attribute and show the corresponding tab content
          var d_activeTab = $(this).attr("rel"); 
          $("#" + d_activeTab).fadeIn();
          
          // Update the active drawer heading styling
          $(".tab_drawer_headings").removeClass("d_actives");
          $(this).addClass("d_actives");
          
          // Update the active tab styling
          $("ul.tabss li").removeClass("active");
          $("ul.tabss li[rel^='" + d_activeTab + "']").addClass("active");
      });
  
      /* Extra class "tab_last" 
         to add border to the right side of the last tab */
      $('ul.tabss li').last().addClass("tab_lasts");
  });
  