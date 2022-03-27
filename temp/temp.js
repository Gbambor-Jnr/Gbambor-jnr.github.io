$("#Celc").on("keydown", function () {
  let Cel = $("#Celc").val();
  $("#fah").val(Math.floor((Cel * 9) / 5 + 32));
  $("#kelv").val(273 * 1 + Cel * 1);
});

$("#fah").on("keydown", function () {
  let fah = $("#fah").val();
  $("#Celc").val(Math.floor(((fah - 32) * 5) / 9));
  $("#kelv").val(Math.floor(((fah - 32) * 5) / 9 + 273));
});

$("#kelv").on("keydown", function () {
  let $kelv = $("#kelv").val();
  $("#Celc").val($kelv * 1 - 273 * 1);
  $("#fah").val(Math.floor((($kelv - 273) * 9) / 5 + 32));
});
