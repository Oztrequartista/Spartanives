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

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: "Samuel Baddoo",
    title: "Samuel Baddoo",
    designation: "CEO and Founder",
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
    imgSrc: Member2,
    altText: "Kwasi A. Agbley",
    title: "Kwasi A. Agbley",
    designation: "Founder",
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
    imgSrc: Member3,
    altText: "Yaw Amoateng Afriye",
    title: "Yaw Amoateng Afriye",
    designation: "Web Designer",
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
    imgSrc: Member4,
    altText: "Emmanuel Taye",
    title: "Emmanuel Taye",
    designation: "Web Developer",
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
    imgSrc: Member5,
    altText: "Andromina Baffoe",
    title: "Andromina Baffoe",
    designation: "CEO and Founder",
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
