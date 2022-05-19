/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import TeamCard from "components/team-card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Member1 from "assets/team/member-1.png";
import Member2 from "assets/team/member-2.png";
import Member3 from "assets/team/member-3.png";
import Member4 from "assets/team/member-4.png";
import Member5 from "assets/team/member-5.png";
import Member6 from "assets/team/member-6.png";
import Profile from "assets/team/profile-icon.png";

const data = [
  {
    id: 1,
    imgSrc: Profile,
    altText: "Samuel Baddoo",
    title: "Samuel Baddoo",
    designation: "A Business Investment Executive with a keen focus on growth and acquisitions in small to medium companies in Sub-Saharan Africa (SSA). Sam holds an MBA from London School of Business and Finance, a degree in Commercial Law and is a certifified Commercial Negotiator. He has advised on a number of private equity deals on behalf of London based TLG Capital across SSA. He is currently the Managing Director of the Spartan Ives Group.",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Profile,
    altText: "Kwasi A. Agbley",
    title: "Kwasi A. Agbley",
    designation: "A very experienced investment and tourism consultant. He has over forty years of progressive experience in destination planning and management, sustained by the creation of vibrant local economies based on travel and related industries. He has consulted for the JICA, Millenium Challenge, UNDP, USAID, and World Bank Group, among others. He initiated the Central Region Development Program, the creation of Ghana's Kakum National Park, restoration of World Heriatge sites in the Central Region, and establishment of US$ 2 million Endowment in support of these. He has advised on a number of hotel and resort projects on the African continent including the Airport Holiday Inn Accra and the Best Western Takoradi, in Ghana.",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Profile,
    altText: "Yaw Amoateng Afriye",
    title: "Yaw Amoateng Afriye",
    designation: "Currently the DCEO of Ghana Investment Promotion Centre, he is an experienced risk professional with a diverse practical, strategy and consultancy focus on SSA. Yaw possesses a good understanding of tactical and strategic issues affecting business and investment in SSA. He maintains strong links with African business and political elites, and these relationships, combined with sound advice, has strengthened his value offering to clients' understanding of these markets. He has delivered for clients in oil and gas, power, FMCG, financial services and agribusiness sectors in SSA. He holds a master's degree in Political Conflict Resolution from King's College London and diploma in Global Business from the Universoty of Oxford, Said Business School.",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Profile,
    altText: "Emmanuel Taye",
    title: "Emmanuel Taye",
    designation: "A biodiversity and conservational science specialist with a focus on African Wetlands, Ghana's deltas, the human impact on Ghana's water resources and its effects on animals. Specific avian species with studies of waterbird populatioons along the coast of Ghana.",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Profile,
    altText: "Andromina Baffoe",
    title: "Andromina Baffoe",
    designation: "Ms. Baffoe has worked with the owners of Spartan since before its inception. She has proven a track record of delivery in a number projects predating Spartan in a number of sectors ranging from entertainment, hospitality, real estate acquisitions to land development and FMCG.",
    socialProfile: [
      {
        id: 1,
        name: "facebook",
        path: "#",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        path: "#",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "instagram",
        path: "#",
        icon: <FaInstagram />,
      },
    ],
  },
  // {
  //   id: 6,
  //   imgSrc: Member6,
  //   altText: "Aaron Nunez",
  //   title: "Aaron Nunez",
  //   designation: "Web Designer",
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: "facebook",
  //       path: "#",
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: "twitter",
  //       path: "#",
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: "instagram",
  //       path: "#",
  //       icon: <FaInstagram />,
  //     },
  //   ],
  // },
];

export default function TeamSection() {
  return (
    <section style={{paddingTop:"50px"}}>
      <Container>
        <SectionHeader
          slogan="our management"
          title="Meet our qualified and talented managers :"
        />

        <Grid sx={styles.flex}>
          {data.map((item, index) => {
            const {
              id,
              imgSrc,
              altText,
              title,
              designation,
              socialProfile,
            } = item;
            return (
              <TeamCard
                key={id}
                src={imgSrc}
                altText={altText}
                title={title}
                designation={designation}
                social={socialProfile}
              />
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ["35px 0px", null, 0, null, null, "30px 35px"],
    gridTemplateColumns: [
      "repeat(2,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
  flex:{   
    display:"flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    
  }
};
