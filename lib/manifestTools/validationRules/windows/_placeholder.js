'use strict';

// var validationConstants = require('../../validationConstants');

module.exports = function (manifestContent, callback) {
  return callback();

  //  returning a single result (example: issues with icons):
  //--------------------------------
  // return callback(undefined, {
  //   'description': 'You may want to add the X icon',
  //   'platform': validationConstants.platforms.windows,
  //   'level': validationConstants.levels.suggestion,
  //   'members': validationConstants.manifestMembers.icons,
  //   'code': validationConstants.codes.missingImage
  // });

  //  returning multiple results (example: issues with icons):
  //--------------------------------
  // return callback(undefined, [{
  //   'description': 'You may want to add the X icon',
  //   'platform': validationConstants.platforms.windows,
  //   'level': validationConstants.levels.suggestion,
  //   'members': validationConstants.manifestMembers.icons,
  //   'code': validationConstants.codes.missingImage
  // },
  // {
  //   'description': 'An issue with the icons format',
  //   'platform': validationConstants.platforms.windows,
  //   'level': validationConstants.levels.suggestion,
  //   'members': validationConstants.manifestMembers.icons,
  //   'code': validationConstants.codes.missingImage
  // }]);
};
