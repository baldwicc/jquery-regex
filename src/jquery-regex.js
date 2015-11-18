/* global define:false */

/*
 *
 * Copyright (c) 2015 baldwicc
 * Licensed under the MIT license.
 */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    factory(jQuery);
  }
}(function($) {

  $.expr[':']['regex'] = $.expr.createPseudo(function(arg) {
    var regex = new RegExp(arg, "g");
    return function(elem) {
      return $(elem).text().trim().match(regex);
    };
  });

  return $;

}));

