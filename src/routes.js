
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Forgetpassword from "layouts/authentication/Forgetpassword"

import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Manage Students",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Manage Professors",
    key: "tables1",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables1",
    component: <Tables />,
  },
  
  
 
  {
    type: "collapse",
    name: "Log out",
    key: "sign-in",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    
    route: "/authentication/sign-up",
    component: <SignUp />,
  },

  {
    
    route: "/authentication/Forgetpassword",
    component: <Forgetpassword />,
  },
  
];

export default routes;
