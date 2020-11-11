
  $.ajax({
    url: "https://randomuser.me/api/?inc=name,email,id&results=10",
    dataType: "json",
    success: function (data) {   
        const source = $("#people-template").html()
        const template = Handlebars.compile(source)
        const newHTML = template(data.results);
        $('#container').append(newHTML);
    },
  });
