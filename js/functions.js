$(document).ready(function() {
    $.ajax({
        url : "data/names.json",
        dataType: "json",
        success : function (data) {
          var res = "";
          for (var i = 0; i < data.length; i++) {
            res = res + data[i][1]+" "+data[i][0]+",";
          }
          $(".rotate").html(res);
        }
    });

    $(".rotate").textrotator({
  animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 2000 // How many milliseconds until the next word show.
  });
});
