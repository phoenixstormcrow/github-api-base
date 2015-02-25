var test = require('tape'),
    base = require('../index.js');

test('base properties', function (t) {
    t.plan(7);

    t.equal(base.toString(), "https://api.github.com/");
    t.equal(base + 'users', 'https://api.github.com/users');
    t.ok(base.version, 'version exists');
    t.equal(typeof base.version, 'number');
    t.equal(base.version, 3);
    t.equal(base.headers["Accept"], "application/vnd.github.v3+json");
    t.equal(base.headers["User-Agent"], "node_v0.11.14_x64_linux");
});
