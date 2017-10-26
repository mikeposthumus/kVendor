$(function () {
$("form").on("submit", function (e){
  e.preventDefault();
  var searchTerm = $("#textInput").val();
  var wikiApi = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm + '&namespace=0&profile=fuzzy';
  $.ajax( {
      url: wikiApi,
      dataType: 'json',
      type: 'GET',
      headers: { 'Api-User-Agent': 'Mikes Wikipedia browser (mikeposthumus@gmail.com) learning to code with freecodeacademy' },
      success: function(data) {
        console.log(data); // do something with data
// for each result
//create a div called result
//place data
$('.results').remove();

if (data[1].length > 0) {
for (let i=0; i < data[1].length; i++) {

function report (i) {
        $('#results').append("<div class='results'><a target='_blank' href='" + data[3][i] +"'><h3>" + data[1][i] +"</h3></a><p>" + data[2][i] +"</p></div>");
      }//end report
report(i);
    }//end for
  } else {
    $('#results').append("<div class='results'><p>Wikipedia did not like your search terms. Try again.</p></div>");
  }// end if/else
      $(".results").fadeIn();
              }//end success fx
      })
      .done(function(){
        console.log("done"); // do something with data
      })
      .fail(function(){
        console.log("fail"); // do something with data
      })
      .always(function(){
        console.log("get the knowledge"); // do something with data
      });//end ajax
})//end submit fx
});
