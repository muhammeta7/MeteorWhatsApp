// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import 'angular-moment';
import { Meteor } from 'meteor/meteor';
import Loader from 'angular-ecmascript/module-loader';
 
// Modules
 import RoutesConfig from '../routes';
 import ChatsCtrl from '../controllers/chats.controller';
 import ChatCtrl from '../controllers/chat.controller';
const App = 'Whatsapp';
 
// App
Angular.module(App, [
  'angular-meteor',
  'angularMoment',
  'ionic'
]);
 
new Loader(App)
  .load(ChatsCtrl)
  .load(ChatCtrl)
  .load(RoutesConfig);


// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}
 
function onReady() {
  Angular.bootstrap(document, [App]);
}