(function($) {
  module('jQuery#regex', {
    setup: function() {
      this.elems = $('#qunit-fixture').children("#parent");
      this.parent = $('#parent');
      this.child = $('#child');
    }
  });

  test('is testable', function() {
    expect(1);
    equal(false, true, 'err do some tests');
  });

}(jQuery));

