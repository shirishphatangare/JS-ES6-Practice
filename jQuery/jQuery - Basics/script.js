// When the document is ready execute the JQuery
$("document").ready(function() {

  // ADDING / REMOVING / CHANGING ELEMENTS

  // You can change CSS attributes like this
  // # targets ids and . targets classes
  $("#wrapper").css("width", 500);
  $("#wrapper").css("margin", "auto");
  $("#logo2").css("float", "left");
  $(".p_two").css("color", "purple");

  // How to pass in multiple arguments
  $(".p_two").css({"background" : "url('images/repeatBkgrnd.png') repeat-y"});

  // Target elements by tag
  $("a").css("color", "red");

  // Target tags only in other tags, classes, or ids
  $("#tableData a").css("color", "green");

  // Target every a element that comes after a em
  $("em + a").css("color", "orange");

  // Target children elements in elements
  $("p > em").css("color", "gray");

  // Target the 3rd li in a list
  $("#oListIndent li:nth-child(3)").css("color", "red");

  // Change the text in an html element if the li has a
  // name attribute
  $("li[name]").html("'and the Goblet of Fire'");

  // Change the value in a text input element
  $("input[type='text']#yourName").val("Derek");

  // Target items that contain a value (*=)
  $("a[href*='google']").css("font-weight", "bolder");

  // Target an image with an alt that starts with (^=) NTT
  // and change the border
  $("img[alt^='NTT']").css({"border-color": "black",
             "border-width":"1px",
             "border-style":"solid"});

  $("a[href^='http://g']").css("color", "cyan");

  $("a[href^='mailto:']").css("color", "yellow");

  // Change an image height and width on one line
  $("img[alt^='NTT']").width(150)
                      .height(150);

  // Target items that end with ($=) a value
  $("a[href$='pdf']").css("color", "red");

  // Select the odd (1,3,5) and even (0,2,4) items
  $("#tableData tr:even").css("background-color", "#FFFDD0");
  $("#tableData tr:odd").css("background-color", "#F0F8FF");

  // Select the first matching element
  $("#tableData tr:first").css({"background-color" : "#001A57", "color" : "white"});

  // Select the last matching element
  $("#tableData tr:last").css("background-color", "#FFC0DB");

  // Select the elements that don't contain 'and' in them
  $("#oListTypes li:not(:contains(and))").css("color", "red");

  // Select every a element that contains 'gravida'
  $("a:contains(gravida)").css("color", "blue");

  // Select every p element that contains a i element
  // and hide it
  $("p:has(i)").hide();

  // Display the text between the matching p element
  alert($("p:has(i)").html());

  // Change the text in the matching p element and show it
  // .text() works the same but it doesn't recognize html
  // elements
  $("p:has(i)").html("<i>Some normal text</i>").show();

  // Append adds text at the end of an element
  $("p:has(i)").append(" I go at the end");

  // Prepend adds text at the beginning of an element
  $("p:has(i)").prepend("I go at the beginning ");

  // Add a new element before the targeted one
  $("p:has(i)").before("<p id='before_p'>A new paragraph before</p>");

  // Add a new element after the targeted one
  $("p:has(i)").after("<p id='after_p'>A new paragraph after</p>");

  // When the element with the id 'after_p' is clicked
  // remove it from the document
  $("#after_p").click(function() {
    $(this).remove();
  });

  // Replace an element with another on click
  $("#before_p").click(function() {
    $(this).replaceWith('<p>I\'m the new paragraph</p>');
  });

  // Perform a different action on each matching element
  $("#oListIndent li").each(function(index) {

    // Get the value in the input element
    var inputListStuff = $("#listStuff").val();

    // Assign a new value to the input element
    // $(this).text() gets the value for each individual
    // li element
    $("#listStuff").val(inputListStuff + ", " + $(this).text());

  });

  // CHANGING ELEMENT ATTRIBUTES

  // Add a class to elements
  // .removeClass() will take the class away
  $("#oListIndent li").addClass("Harry_Potter");

  $(".Harry_Potter").css("color", "#36454F");

  // You can toggle classes on and off an element
  $("#oListIndent li").click(function() {
    $(this).toggleClass("highlight");

    // Get the changing background color and display it
    // in the input element
    var bgColor = $(this).css("background-color");
    $("input[type=text]#yourName").val(bgColor);
  });

  $("#logo2").click(function() {

    // Get the value stored in an attribute
    var imgName = $(this).attr("src");
    $("input[type=text]#yourName").val(imgName);

    // Change the value of an attribute
    $("#logo2").attr("src", "images/ntt-logo-horz.png");
  });

  // EVENTS IN JQUERY

  // Trigger events on mouseover
  $("#logo2").mouseover(function() {
    $("#logo2").attr("src", "images/ntt-logo-horz.png");
  });

  // Trigger events on mouseout
  $("#logo2").mouseout(function() {
    $("#logo2").attr("src", "images/ntt-logo.png");
  });

  // Handle mouseover and mouseout with hover
  $("h2").hover(function() {
    // mouseover
    $("h2").css("color", "green");
  }, function() {
    // mouseout
    $("h2").css("color", "black");
  });

  // Perform an action on double click
  $("#logo2").dblclick(function() {
    $("#logo2").attr("src", "images/ntt-logo-plastic.png");
  });

  // Get the document x and y position on click
  $(document).click(function(e) {
    $("#mClickXPos").val(e.pageX);
    $("#mClickYPos").val(e.pageY);
  });

  // Get the x and y as the mouse moves
  // Use screenX and screenY to get x and y for the screen
  $(document).mousemove(function(e) {
    $("#mMoveXPos").val(e.screenX);
    $("#mMoveYPos").val(e.screenY);
  });

  // Show key pressed on the keyboard
  // You can also use keydown() and keyup()
  $(document).keypress(function(e){

    // e.which returns the keycode which we convert into
    // the key with fromCharCode
    var keyPressed = String.fromCharCode(e.which)
    $("#keyPressed").val(keyPressed);
  });

  // Execute when input loses focus
  $("#inputFormEvent").blur(function() {
    $("#formEvent").text("Left Input Element");
  });

  // Execute when input value changes (Conflicts with blur)
  $("#inputFormEvent").change(function() {
    $("#formEvent").text("Input Element Changed");
  });

  // Execute when input gains focus
  $("#inputFormEvent").focus(function() {
    $("#formEvent").text("Input Element Focused");
  });

  // Execute when input value is selected
  $("#inputFormEvent").select(function() {
    $("#formEvent").text("Input Element Selected");
  });

  // We can assign events with on and pass the event to
  // track, an argument to pass and the function to call
  // You can attach multiple events by seperating them with
  // a space ex. "mouseover keypress"

  function showWhatTouched(e){
    alert(e.data.message);
  }

  var bsMsg = { message:"Best Selling Touched" };

  var teMsg = { message:"Track Events Touched" };

  $("#bestSelling").on("mouseover", bsMsg, showWhatTouched);

  $("#trackEvents").on("mouseover", teMsg, showWhatTouched);

  // Catch when the document loads with ready()
  // Catch if the browser resizes with resize()
  // Catch when an element is scrolled with scroll()

  // Create simple slide show
  var accidentImgs = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];

  var focusImg = 1;

  $("#accident").click(function() {

    var image = accidentImgs[focusImg];
    focusImg++;
    if(focusImg > 3){
      focusImg = 0;
    }

    $("#accident").attr("src", image);

  });

  // JQUERY ANIMATIONS

  // hide an element on click
  $("#p_one").click(function() {
    $(this).hide();
  });

  // slowly fade out an element over 2000 ms
  // You can also use fast, normal, and slow
  $("#p_two").click(function() {
    $(this).fadeOut(2000);

    // Redisplay the hidden element
    // You can also use .toggle(), .show() and .fadeIn()
    $("#p_one").fadeToggle(2000);
  });

  // Fade an image to a given opacity
  $("#logo2").click(function() {
    $(this).fadeTo('slow', .50);
  });

  // Target td that contains 'Bonds'
  $("td:contains('Bonds')").click(function() {

    // Hide row that contains a td that contains 'Bonds'
    $("tr:has(td:contains('Bonds'))").slideUp(1000);
  });

  // Make the Bonds row reappear
  // You can also use slideToggle()
  $("td:contains('Hall')").click(function() {
    $("tr:has(td:contains('Bonds'))").slideDown(1000);
  });

  // You can create custom animations with animate
  $("#p_one").click(function() {

    // To define left, right, top or bottom the element must
    // have a position property of relative or absolute
    $(this).css("position", "relative");

    // Pass an object that contains the properties to change,
    // duration in milliseconds, easing function to use for
    // the transition and the function to call after the
    // animation completes
    // The easing method functions are "swing or "linear"
    // You also have the JQuery UI animations : easeInQuad,
    // easeOutQuad, easeInOutQuad, easeInCubic, easeOutCubic,
    // easeInOutCubic, easeInQuart, easeOutQuart,
    // easeInOutQuart, easeInQuint, easeOutQuint,
    // easeInOutQuint, easeInExpo, easeOutExpo,
    // easeInOutExpo, easeInSine, easeOutSine, easeInOutSine,
    // easeInCirc, easeOutCirc, easeInOutCirc, easeInElastic,
    // easeOutElastic, easeInOutElastic, easeInBack,
    // easeOutBack, easeInOutBack, easeInBounce,
    // easeOutBounce, easeInOutBounce
    $("#p_one").animate(
    {
      left: 300,
      opacity: .5,
      'font-size': "22px",
      width: 300
    }, 2000, "easeInQuad", function(){alert("All Done");});
  });

  // It is common to use stop to prevent multiple
  // animations on the same object like this
  // $("#p_one").stop().animate( ...

  // JQUERY UI
  // A plug-in that has effects and user interface tools
  // http://jqueryui.com/download/ allows you to
  // customize the widgets you need
  // http://jqueryui.com/themeroller/ allows you to
  // pick the colors, fonts, etc. for the theme used

  // JQUERY AND AJAX
  // Ajax allows a page to update with information from
  // the server without a page reload

}); <!-- End of JQuery Code -->