import application = require('application');
import moment = require("moment");
application.start({ moduleName: 'login' });
let resources = [];
resources['timeFromNow'] = function(date){
    return moment(date).fromNow();
};
application.setResources(resources);