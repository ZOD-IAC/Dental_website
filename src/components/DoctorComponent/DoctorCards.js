import React from "react";
import Image from "next/image";
import styles from "@/styles/Doctor.module.css";

function DoctorCards({ name, avt, year, para, consult }) {
  return (
    <div className={styles.docCards}>
      <div
        className={
          "relative h-[20vh] w-[20vh] m-4 border-[3px] border-black rounded-full md:h-[10rem] md:w-[10rem]"
        }
      >
        <Image
          className={"rounded-full drop-shadow-xl saturate-[1.1]"}
          src={avt ? avt : "/image/avatars/cat.jpg"}
          alt="progile image"
          sizes="100vh"
          placeholder="blur"
          blurDataURL={avt}
          style={{ objectFit: "cover" }}
          fill
        />
      </div>
      <h3 className={`text-[1.2rem] font-extrabold w-full h-10`}>
        {name ? name : "Doctor Name"}
      </h3>
      <p className="font-extralight w-2/3 h-12 my-5">
        {para
          ? para
          : " Specialist in Orthodontics, transforming smiles with precision."}
      </p>
      <p className="my-5 text-xl">- {consult} -</p>
      <p className="font-extrabold">
        {year ? year + " Years Experience" : " "}
      </p>
    </div>
  );
}

export default DoctorCards;
