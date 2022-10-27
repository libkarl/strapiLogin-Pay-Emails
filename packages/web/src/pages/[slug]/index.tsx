import useStrapiRequest from "lib/useStrapiRequest";
import homeComponents from "components";
import { DeveloperIntroduction } from "components/Home/Team";
// import { Root } from "models/acrticle";
// import ThemeProvider from "components/ui/ThemeProvider";
import Navbar from "components/Home/Navbar";
import CompanyIntro from "components/Home/Team";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

const Homepage = () => {
  let router = useRouter();

  const { data, error } = useStrapiRequest<any>({
    url: "/api/`{router.slug}`?populate=deep",
  });
  const components = data?.data.attributes?.components;
  const teamSection = components?.find(
    (item) => item.__component === "homepage.team"
  );
  const teamData: DeveloperIntroduction = {
    developer1: {
      dev_type: teamSection?.developer1?.devtype,
      dev_image:
        teamSection?.developer1?.devimg.data.attributes.formats.medium.url,
      dev_intoduction: teamSection?.developer1?.introduction,
    },
    developer2: {
      dev_type: teamSection?.developer2?.devtype,
      dev_image:
        teamSection?.developer2?.devimg.data.attributes.formats.medium.url,
      dev_intoduction: teamSection?.developer2?.introduction,
    },
  };

  return (
    <Box>
      <Navbar />
      <CompanyIntro {...teamData} />

      {/* {cc.map((e) => {
        const Component = components[e.__component];
        if (!Component) {
          return null;
        }
        console.log(Component);
        return <Component key={e.id} {...e} />;
      })} */}
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
