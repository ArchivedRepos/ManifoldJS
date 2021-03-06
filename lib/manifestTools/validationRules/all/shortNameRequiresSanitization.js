﻿'use strict';

var validationConstants = require('../../validationConstants');
var utils = require('../../../common/utils');

module.exports = function (manifestContent, callback) {
  var shortName = manifestContent.short_name;
  if (shortName && shortName.length !== 0 && shortName.trim()) {
    var sanitizedName = utils.sanitizeName(shortName);
    if (shortName !== sanitizedName) {  
      return callback(undefined, {
        'description': 'The short name contains invalid characters (it will be sanitized)',
        'platform': validationConstants.platforms.all,
        'level': validationConstants.levels.warning,
        'member': validationConstants.manifestMembers.short_name,
        'code': validationConstants.codes.invalidValue
      });
    }
  }

  callback();
};
