(function() {

'use strict';

angular
  .module('app')
  .filter('region', regionFilter);

var mapping = {
  'af': 'ZA', 'ar': 'AE', 'az': 'AZ', 'be': 'BY', 'bg': 'BG', 'ca': 'ES', 'cs': 'CZ', 'da': 'DK', 'de': 'DE',
  'el': 'GR', 'en': 'GB', 'es': 'ES', 'et': 'EE', 'fa': 'IR', 'fi': 'FI', 'fr': 'FR', 'ga': 'IE', 'he': 'IL',
  'hi': 'IN', 'hr': 'HR', 'hu': 'HU', 'hy': 'AM', 'id': 'ID', 'in': 'ID', 'is': 'IS', 'it': 'IT',
  'iw': 'IL', 'ja': 'JP', 'ko': 'KR', 'lt': 'LT', 'lv': 'LV', 'lb': 'LU', 'mk': 'MK', 'mn': 'MN', 'ms': 'MY',
  'mt': 'MT', 'nl': 'NL', 'no': 'NO', 'pl': 'PL', 'pt': 'PT', 'ro': 'RO', 'ru': 'RU',
  'sk': 'SK', 'sl': 'SI', 'sq': 'AL', 'sr': 'RS', 'sv': 'SE', 'th': 'TH', 'tr': 'TR',
  'uk': 'UA', 'vi': 'VN', 'zh': 'CN'
};

/**
 * @name regionFilter
 *
 * @return {Function} The region filter function
 *
 * @ngInject
 */
function regionFilter() {

  /**
   * @name region
   *
   * @param {String} locale The locale
   *
   * @return {String} The region of the locale
   */
  return function region(locale) {
    var lang = locale.substring(0, 2);
    var region = locale.substring(3, 5);

    if (region)
      return region;

    return mapping[lang] || 'unknown';
  };
}

})();
