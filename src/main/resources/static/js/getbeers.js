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
