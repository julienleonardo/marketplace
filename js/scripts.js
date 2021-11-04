$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#name").val();
    const addressInput = $("input#address").val();
    const sizeInput= $("input#size").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".size").text(sizeInput);
   
    $("#reciept").show();

    event.preventDefault();
  });
});