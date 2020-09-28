// export default async function({ $auth, redirect }) {
//   let user = $auth.state.user;
//   if (user && user.admin) {
//    return redirect("/dashboard");
//   } else {
//    return redirect("/signin");
//   }
//   // If the user is not authenticated
//   //   if (!store.state.authenticated) {
//   //     return redirect("/signin");
//   //   }
// }
// export default function ({ store,redirect }) {
//   let token=localStorage.getItem('auth._token.local')
//    if(!token)
//    {
//       // console.log('Test Middleware') 
//       return redirect("/signin");      
//    }
// }
