/*globals chrome*/

/**
 * When in the PR view, record if we see a :+1: from my user
 */

(function () {

  // ["/teambox/Teambox-hosted/pull/1155", "teambox", "Teambox-hosted", "1155"]
  $(function () {
    var $files = $(".file.js-details-container");

    $files.find(".meta .button-group").each(function () {
      if ($(this).parents(".file").find(".data").length) {
        $(this).after('<div class="button-group"><a href="#" class="minibutton js-hide-file">Hide</a></div>');
      }
    });

    $(document).on("click", ".js-hide-file", function (e) {
      e.preventDefault();
      $(this).parents(".file").find(".data").toggle();
    });
  });

}());

