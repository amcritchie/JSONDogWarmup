// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {
  var gschoolDogs = {
    "dogs": [
      {
        "owner": "Kinsey",
        "name": "Harliegh",
        "preferences": [
          {"favoriteFood": "steak"},
          {"favoriteToy": "Frog"}
        ]
      },
      {
        "owner": "Bobby",
        "name": "Maddagins",
        "preferences": [
          {"favoriteFood": "children"},
          {"favoriteToy": "children"}
        ]
      },
      {
        "owner": "Evan",
        "name": "Trixie",
        "preferences": [
          {"favoriteFood": "protien"},
          {"favoriteToy": "weights"}
        ]
      }
    ]
  };


    jQuery.each(gschoolDogs["dogs"], function(index,value){

        var html = '<tr>';
        html += '<th>' + value["owner"] + '</th>';
        html += '<th>' + value["name"] + '</th>';
        html += '<th>' + value["preferences"][0]["favoriteFood"] + '</th>';
        html += '<th>' + value["preferences"][1]["favoriteToy"] + '</th>';
        $('table').append(html);
        });

  // Write come code to add the dogs to the table !!!!
});

