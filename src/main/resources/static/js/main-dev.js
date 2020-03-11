$(document).ready(function(){

    getBeerList();

    function getBeerList(){
      $.getJSON('http://localhost:8080/api/beernotes/beerlist', function(data){
        $(data).each(function(i, beer){
  	       $('.table').append($("<tr>")
           .append($("<th>").append(beer.id))
    	    .append($("<td>").append(beer.name))
            .append($("<td>").append(beer.style))
            .append($("<td>").append(beer.origin))
            .append($("<td>").append(beer.note)));
          });
        })
	       .fail(function(e){
		         console.log('error:');
		           console.error(e);
	            })
            }


//Values from form are saved as an object in the data variable on btn click
    $("#submitBeerBtn").on("click", function(e) {
       let data = {
       name: $($("#beerForm")[0].beerName).val(),
       style: $($("#beerForm")[0].beerStyle).val(),
       origin: $($("#beerForm")[0].origin).val(),
       note: $($("#beerForm")[0].note).val()
       }
       postBeer(data);

       //reset form to clear form data
       $("beerForm").trigger("reset");

       //stops page from refreshing
      // e.preventDefault();
    });

    // function to post new beer to beer list
    function postBeer(data) {
        $.ajax({
            url: 'http://localhost:8080/api/beernotes/insertbeer',
            method: 'POST',
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function(data) {
                console.log(JSON.stringify(data));
                getBeerList();
            }
        });
    }

});