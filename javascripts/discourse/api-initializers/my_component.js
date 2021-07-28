import { apiInitializer } from "discourse/lib/api";
import { ajax } from 'discourse/lib/ajax';

// const currentUser = Discourse.User.current();
// var user = currentUser.username;

// export default apiInitializer("0.11.1", api => {
//   console.log("hello world from api initializer!"); 

//   api.registerConnectorClass('below-site-header', 'greeting-banner', {
//     setupComponents(args, component) {
//       ajax(`/u/${user}.json`).then((badgeData) => {
//         let user = badgeData.user;
//         component.set('user', user)
//       });
//     },
//   });
// });

export default apiInitializer("0.11.1", api => {
  api.registerConnectorClass('below-site-header', 'greeting-banner', {
    setupComponent(args, component) {
      ajax('/badges.json').then((badgeData) => {
        let badges = badgeData.badges;
        component.set('badges', badges);
      });
    },
  });
});