// Merge two dictionaries
'use strict';

const mergeDictionaries = (obj1, obj2) => {
  const mergeDictionary = {};

  const keys1 = Object.keys(obj1);
  for (const key of keys1) {
    mergeDictionary[key] = obj1[key];
  }

  const keys2 = Object.keys(obj2);
  for (const key of keys2) {
    mergeDictionary[key] = obj2[key];
  }

  return mergeDictionary;
};

require('../Tests/merge.js')(mergeDictionaries);
