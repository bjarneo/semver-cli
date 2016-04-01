const chalk = require('chalk');

const major = chalk.red('MAJOR');
const minor = chalk.yellow('MINOR');
const patch = chalk.green('PATCH');

console.log(
    'Given a version number %s.%s.%s, increment the:',
    major,
    minor,
    patch
);

console.log(
    '1. %s version when you make incompatible API changes.',
    major
);

console.log(
    '2. %s version when you add functionality in a backwards-compatible manner.',
    minor
);

console.log(
    '3. %s version when you make backwards-compatible bug fixes.',
    patch
);

console.log(
    'Additional labels for pre-release and build metadata are available as extensions to the %s.%s.%s format.',
    major,
    minor,
    patch
);

console.log(
    'Read more at [%s]',
    chalk.bold('http://semver.org/')
);
