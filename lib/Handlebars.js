// npm imports
import Handlebars from 'handlebars';
import numeral from 'numeral';
import _ from 'lodash';

Handlebars.registerHelper('dataAnchor', function (text, ...rest) {
  if (!(rest.length % 2))
    throw new Error('data attributes must be provided in key-value pairs');

  const keys = [];
  const values = [];

  for (let i = 0; i < rest.length - 1; i += 2) {
    keys.push(rest[i]);
    values.push(rest[i + 1]);
  }

  const dataAttributes = _.zipObject(keys, values);

  const dataString = _.reduce(
    dataAttributes,
    (result, value, key) => {
      return `${result} data-${key}="${value}"`;
    },
    ''
  );

  return new Handlebars.SafeString(
    `<a${dataString}>${Handlebars.escapeExpression(text)}</a>`
  );
});

Handlebars.registerHelper('numberFormat', function (number, format) {
  return numeral(number).format(format);
});

Handlebars.registerHelper('numeral', function (fn, value, ...params) {
  return numeral(value)[fn](...params.slice(0, -1));
});

Handlebars.registerHelper('lodash', function (fn, value, ...params) {
  return _[fn](value, ...params.slice(0, -1));
});

export { Handlebars };
