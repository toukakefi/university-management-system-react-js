
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";


import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data





function Dashboard() {


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Numbers pf students"
                count={1500}
                percentage={{
                  color: "success",
                  amount: "-3%",
                  label: "than lask week",
                }}
              />
            </MDBox>
            
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Number of professors"
                count={300}
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than lask week",
                }}
              />
            </MDBox>
            
          </Grid>
         </Grid>
       
     
      </MDBox>
    
    </DashboardLayout>
  );
}

export default Dashboard;
