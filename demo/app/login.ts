import {Observable, fromObject} from 'data/observable';
import {SocketIO} from 'nativescript-socketio';
import {} from 'ui/page';
import frameModule = require('ui/frame');
let socketIO;
//const server = 'http://10.0.2.2:3001'; //using android emulator
const server = 'http://localhost:3001'; //using ios simulator

let pageData = fromObject({
  item: '',
  username: 'Osei'
});

export function navigatingTo() {
  socketIO = new SocketIO(server, {});
  socketIO.on('login', function (data) {
    console.log("Login: ", data);
    frameModule.topmost().navigate({ moduleName: 'main-page', context: { username: pageData.get("username"), socket: socketIO.instance } })
  })
  socketIO.connect();  
}
export function pageLoaded(args) {
  var page = args.object;
  page.bindingContext = pageData;
}
export function join(args) {
  socketIO.emit('add user', { username: pageData.get('username') });
}