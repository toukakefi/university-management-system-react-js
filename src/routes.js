
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Forgetpassword from "layouts/authentication/Forgetpassword"

import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import ACT from "layouts/actualites";
import Time from "layouts/Timetables";
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import ScheduleIcon from '@mui/icons-material/Schedule';



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
    name: " Students",
    key: "tables",
    icon: <PersonIcon />,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Professors",
    key: "tables1",
    icon: <PersonIcon />,
    route: "/tables1",
    component: <Tables />,
  },
  
  
 
  
  {
    type: "collapse",
    name: "Actualities",
   
    icon: <ArticleIcon />,

    route: "layouts/actualites",
    component: <ACT />,
  },
  {
    type: "collapse",
    name: "Timetables",
    
    icon: <ScheduleIcon />
    ,
    route: "layouts/Timetables",
    component: <Time />

  },
  {
    type: "collapse",
    name: "Log out",
    key: "sign-in",
    icon: <Icon fontSize="small">logout</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },,
  {
    
    route: "/authentication/sign-up",
    component: <SignUp />,
  },  
  
  

  {
    
    route: "/authentication/Forgetpassword",
    component: <Forgetpassword />,
  }

];

export default routes;
