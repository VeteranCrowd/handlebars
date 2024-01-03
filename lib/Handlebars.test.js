/* eslint-env mocha */

// mocha imports
import { expect } from 'chai';

// lib imports
import { Handlebars } from './index.js';

const data = {
  amount: 1234.567,
  anchorText: 'anchor text',
  merchantId: 'abc123',
  userId: 'def456',
};

describe('Handlebars', function () {
  it('dataAnchor', function () {
    const template =
      '{{dataAnchor anchorText "merchantId" merchantId "userId" userId}}';

    const result = Handlebars.compile(template)(data);

    expect(result).to.equal(
      '<a data-merchantId="abc123" data-userId="def456">anchor text</a>'
    );
  });

  it('numberFormat', function () {
    const template = '{{numberFormat amount "$0,0.00"}}';

    const result = Handlebars.compile(template)(data);

    expect(result).to.equal('$1,234.57');
  });
});
