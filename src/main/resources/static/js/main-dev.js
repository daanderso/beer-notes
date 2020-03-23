$(document).ready(function(){

    getBeerList();

//    function getBeerList(){
//      $.getJSON('http://localhost:8080/api/beernotes/beerlist', function(data){
//        $(data).each(function(i, beer){
//  	       $('.table').append($("<tr>")
//           .append($("<th>").append(beer.id))
//    	    .append($("<td>").append(beer.name))
//            .append($("<td>").append(beer.style))
//            .append($("<td>").append(beer.origin))
//            .append($("<td>").append(beer.note)));
//          });
//        })
//	       .fail(function(e){
//		         console.log('error:');
//		           console.error(e);
//	            })
//            }


//    function getBeerList(){
//        $.getJSON('http://localhost:8080/api/beernotes/beerlist', function(data){
//        $(data).each(function(i, beer){
//  	       $('.table').append($("<tr>")
//           .append($("<th>").append(beer.id))
//    	    .append($("<td>").append(beer.name))
//            .append($("<td>").append(beer.style))
//            .append($("<td>").append(beer.origin))
//            .append($("<td>").append(beer.note))
//            .append($("<td>").append(`
//                <i class="far fa-edit editBeer" data-beerid="`+beer.id+`"></i>
//                <i class="fas fa-trash deleteBeer" data-beerid="`+beer.id+`"></i>
//            `)));
//          });
//          loadButtons();
//        })
//	       .fail(function(e){
//		         console.log('error:');
//		           console.error(e);
//	            })
//            }

            function getBeerList(){
                    $("#beer-table-body").html('');
                    $.ajax({
                        url: 'http://localhost:8080/api/beernotes/beerlist',
                        method: 'get',
                        dataType: 'json',
                        success: function(data) {
                            $(data).each(function(i, beer){
                                $("#beer-table-body").append($("<tr>")
                                    .append($("<th>").append(beer.id))
                                    .append($("<td>").append(beer.name))
                                    .append($("<td>").append(beer.style))
                                    .append($("<td>").append(beer.origin))
                                    .append($("<td>").append(beer.note))
                                    .append($("<td>").append(`
                                    <i class="far fa-trash-alt deleteBeer" data-beerid="`+beer.id+`"></i>
                                        `)));
                                });
                            loadButtons();
                            }
                    });
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
        //e.preventDefault();
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


  //ties buttons to functions to edit and delete
  function loadButtons() {
        $(".editBeer").click(function(e){
            editOneBeer($($(this)[0]).data("beerid"));
            e.preventDefault();
        });

        $(".deleteBeer").click(function(e){
            deleteBeer($($(this)[0]).data("beerid"));
            e.preventDefault();
        });

    }

    //function to delete a beer from the beer list
    function deleteBeer(id) {
            $.ajax({
                url: 'http://localhost:8080/api/beernotes/deletebeer/' + id,
                method: 'DELETE',
                dataType: 'json',
                success: function(data) {
                    console.log(data);
                    getBeerList();
                    //$("#beer-table-body").listview('refresh');
                }
            });
        }

    //function to edit/update beer
    function editOneBeer(id){
    console.log("This is a test");
    }

});