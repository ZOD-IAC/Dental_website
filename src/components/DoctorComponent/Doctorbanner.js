import React, { Fragment, useEffect } from "react";
import DoctorCards from "@/components/DoctorComponent/DoctorCards";
import styles from "@/styles/Doctor.module.css";
import FadeInUp from "../transition/FadeInUp";

function Doctorbanner() {
  const DocData = [
    {
      name: "Dr. Pramod Narsinghani ",
      year: 25,
      avt: "/image/avatars/avatar3.jpg",
      para: "Master of Dental Surgery - Faciomaxillary Oral Surgeon and Implantologist",
      consult: "Principal Consultant",
    },
    {
      name: "Dr. Uma Suresh",
      year: 24,
      avt: "/image/avatars/avatar2.jpg",
      para: "Bachelor's of Dental Surgery \n - (Cosmatic)",
      consult: "Senior Consultant",
    },
    {
      name: "Dr. Ravindra Suhag",
      year: 7,
      avt: "/image/avatars/avatar1.jpg",
      para: "Bachelor's of Dental Surgery",
      consult: "Consultant",
    },
    {
      name: 'Dr. Mitali Sharma',
      year: '',
      avt: '/image/avatars/avatar4.jpg',
      para: 'Master of Dental Surgery\nOrthodontics & Dentofacial Orthopaedics',
      consult: 'Consultant',
    },
  ];
  return (
    <div className={styles.docCardBg}>
      <h2 className={styles.docHead}>Meet Our Team</h2>
      <FadeInUp>
        <div
          className={
            "md:flex md:flex-wrap md:justify-center md:items-center md:w-full"
          }
        >
          {DocData.map((elem, index) => {
            return (
              <Fragment key={index}>
                <DoctorCards
                  name={elem.name}
                  year={elem.year}
                  avt={elem.avt}
                  para={elem.para}
                  consult={elem.consult}
                />
              </Fragment>
            );
          })}
        </div>
      </FadeInUp>
    </div>
  );
}

export default Doctorbanner;
