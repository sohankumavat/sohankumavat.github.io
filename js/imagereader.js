/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var folder = "../img/";

$(document).ready(function () {
    var fileExt = {};
    fileExt[0]=".png",
    fileExt[1]=".jpg",
    fileExt[2]=".gif";
    
    $.ajax({
        url : folder,
        success: function (data) {
            $("#images").html('<ul>');
            //List all png or jpg or gif file names in the page
            $(data).find("a:contains(" + fileExt[0] + "),a:contains(" + fileExt[1] + "),a:contains(" + fileExt[2] + ")").each(function () {
                var filename = this.href.replace(window.location.host, "").replace("http:///", "");
                $("#images").append( "<li>" + filename + "</li>");
            });
            $("#images").append('</ul>');
        }
    });
});
