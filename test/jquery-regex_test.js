(function($) {
  module('jQuery#regex', {
    setup: function() {
      this.elems = $('#qunit-fixture').children("#parent");
      this.parent = $('#parent');
      this.child = $('#child');
    }
  });

  test('finds elements that have matching text', function() {
    expect(2);
    strictEqual(this.elems.find(':regex(!$)')[0], this.child[0], 'element is expected');
    ok(this.elems.find(':regex(!$)').length > 0, 'elements arent missing');
  });

}(jQuery));

