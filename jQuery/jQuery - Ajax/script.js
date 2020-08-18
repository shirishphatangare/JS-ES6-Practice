
$("document").ready(function() {
  $("#oneButton").on("click",getInfoFromServer);
  $("#twoButton").on("click",getDblFromServer);
  $("#threeButton").on("click",getXmlFromServer);
});

// Pull text from a text file on the server
// Type defines the type of request to make being GET or POST
// Success defines the function to call if the request
// succeeds
// Error could be defined to specify the function to call if
// an error happens

function getInfoFromServer() {
$.ajax({
  type: "GET",
  url: "resources/textFromServer.txt",
  success: postToPage});
}

// Function called to display the message from the server
// Receives the text and the server status
function postToPage(data, status) {
  $('#first').text(data);
}

// Load a value into a span
// I define that the program getDouble.php should be executed
// getDouble is sent the information in the form and then it
// stores the returned info in the span

function getDblFromServer() {
  $("span").load("resources/getDouble.php",
  $("#theForm").serializeArray());
}

// Here I define that I'm receiving xml data from the server

function getXmlFromServer() {
$.ajax({
  type: "GET",
  url: "resources/customers.xml",
  datatype: "xml",
  success: postToPageTwo});
}

// I use the find method to search through the xml data
// When I match for any of these attributes I append them to
// the div named customers

function postToPageTwo(data) {

  $(data).find('customer').each(function(){
    var id = $(this).attr('id');
    var firstName = $(this).find('firstName').text();
    var lastName = $(this).find('lastName').text();
    var street = $(this).find('street').text();
    var city = $(this).find('city').text();
    var zip = $(this).find('zip').text();

    $('<div class="firstname"></div>').html(firstName).appendTo('#customers');

    $('<div class="lastname"></div>').html(lastName).appendTo('#customers');

    $('<div class="street"></div>').html(street).appendTo('#customers');

    $('<div class="city"></div>').html(city).appendTo('#customers');

    $('<div class="zip"></div><br />').html(zip).appendTo('#customers');

  });
}
