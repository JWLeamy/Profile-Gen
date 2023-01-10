[{
    type: 'input',
    name: 'Name',
    message: questions[0],
    default: 'Name'
}, {
    type: 'input',
    name: 'Email',
    message: questions[1],
    default: 'Email',
},{
    type: 'input',
    name: 'ProjectName',
    message: questions[2],
    default: 'ProjectName'
}, {
    type: 'input',
    name: 'Description',
    message: questions[3],
    default: 'Description'
}, {
    type: 'list',
    name: 'License',
    message: `${questions[4]}`,
    choices: ['MIT', "APACHE_2.0", "GPL_3.0", "BSD_3", "None"]
}, {
    type: 'input',
    name: 'Dependencies',
    message: questions[5],
    default: 'Dependencies'
}, {
    type: 'input',
    name: 'Tests',
    message: questions[6],
    default: 'Tests'
}, {
    type: 'input',
    name: 'UserInfo',
    message: questions[7],
    default: 'UserInfo'
}, {
    type: 'input',
    name: 'UserContributions',
    message: questions[8],
    default: 'UserContributions'
}]