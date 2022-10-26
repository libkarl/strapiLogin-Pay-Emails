import useStrapiRequest from "lib/useStrapiRequest";
import components from "components";

// import { Root } from "models/acrticle";
// import ThemeProvider from "components/ui/ThemeProvider";
import Navbar from "components/Home/Navbar";
import CompanyIntro from "components/Home/Team";
import { Box } from "@mui/material";

const Homepage = () => {
  const { data, error } = useStrapiRequest({
    url: "/api/homepage?populate=components",
  });

  let cc = data?.data?.attributes?.components || [];

  return (
    <Box>
      <Navbar />
      <CompanyIntro />
      {cc.map((e) => {
        const Component = components[e.__component];
        if (!Component) {
          return null;
        }
        console.log(Component);
        return <Component key={e.id} {...e} />;
      })}
    </Box>
  );
};

export default Homepage;

// {
//   /* <Container maxWidth="lg">
//       <Box
//         sx={{
//           my: 4,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h4" component="h1" gutterBottom>
//           MUI v5 + Next.js with TypeScript example
//         </Typography>

//         <Link href="/about" color="secondary">
//           Go to the about page
//         </Link>
//         <ProTip />
//         <Copyright />
//       </Box>
//     </Container> */
// }

// {
//   /* <Container maxWidth="lg">
//       <Box
//         sx={{
//           my: 4,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h4" component="h1" gutterBottom>
//           MUI v5 + Next.js with TypeScript example
//         </Typography>
//         <Box maxWidth="sm">
//           <Button variant="contained" component={Link} noLinkStyle href="/">
//             Go to the home page
//           </Button>
//         </Box>
//         <ProTip />
//         <Copyright />
//       </Box>
//     </Container> */
// }
