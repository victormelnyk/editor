module.exports = {
  "extends": "google",
  "globals": {
    "angular": true,
    "_": true,
    "window": true,

    "beforeEach": true,
    "describe": true,
    "expect": true,
    "iit": true,
    "inject": true,
    "it": true,
    "spyOn": true,

    "resolvePromise": true
  },
  "rules": {
    "require-jsdoc": 0,
    "valid-jsdoc": 0,
    "one-var": [2, 'always'],
    "max-len": [2, 100, 120, {
      "ignoreUrls": true,
      "ignoreComments": true
    }]
  }
};
