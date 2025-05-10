import React from "react";
import Link from "next/link";
import { Facebook, WhatsApp, Instagram } from "@/svgs/SocialIcon";
import styles from "@/styles//Footer/Footer.module.css";
import Image from "next/image";
import { INTERNAL_HEADERS } from "next/dist/shared/lib/constants";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footTextWrapper}>
        <div className={styles.elemContainer}>
          <h3 className={styles.footHeadings}>Contact Us</h3>
          <p>
            <strong>Dental Facets</strong>
          </p>
          <p>
            <span>Phone :</span>
            <br />
            <Link href={"tel:+91 84470 57806"}>+91 84470 57806</Link>
          </p>
          <p>
            <span>Email To :</span>
            <br />
            <Link href={"mailto:dentalfacets2016@gmail.com"}>
              dentalfacets2016@gmail.com
            </Link>
          </p>
          <p>
            <span>Dental Facets :</span>
            <br /> 560-P, behind Jalvayu Towers,
            <br /> Block B, Sector 56, Gurugram, Haryana 122001
          </p>
          <p>
            <span>Sehgal Neo Hospital :</span>
            <br /> B-362 363, 364, Outer Ring Rd, near to <br />
            ICICI Bank, Block B, Meera Bagh, Paschim Vihar, New Delhi, Delhi,
            110063
          </p>
        </div>

        <div className={styles.elemContainer}>
          <h3 className={styles.footHeadings}>Quick Links</h3>
          <p>
            <Link className={styles.FootP} href={"/"}>
              Home
            </Link>
          </p>
          <p>
            <Link className={styles.FootP} href={"/About"}>
              About Us
            </Link>
          </p>
          <p>
            <Link className={styles.FootP} href={"/Service"}>
              Services
            </Link>
          </p>
          <p>
            <Link className={styles.FootP} href={"/Contact"}>
              Contact Us
            </Link>
          </p>
        </div>

        <div className={styles.elemContainer}>
          <h3 className={styles.footHeadings}>Social Media</h3>
          <p>
            <Link
              className={styles.FootP}
              href={"https://wa.me/8447057806"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="m-1">
                <WhatsApp width={"3vh"} />
              </i>
              Whatsapp
            </Link>
          </p>
          <p>
            <Link
              className={styles.FootP}
              href={
                "https://www.facebook.com/share/EpB4ThMJiarg9KBh/?mibextid=qi2Omg"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="">
                <Facebook width={"4vh"} />
              </i>
              Facebook
            </Link>
          </p>
          <p>
            <Link
              className={styles.FootP}
              href={"https://www.instagram.com/dental.facets/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="">
                <Instagram width={"5vh"} />
              </i>
              Instagram
            </Link>
          </p>
        </div>

        <div className={styles.elemContainer}>
          <h3 className={styles.footHeadings}>Working Hours</h3>
          <table className={styles.timeTable}>
            <tbody className="text-left">
              <tr className={styles.tableRow}>
                <th>Days</th>
                <th>Timings</th>
              </tr>
              <tr className={styles.tableRow}>
                <td>Monday - Saturday</td>
                <td>10:00 am - 7:00 pm</td>
              </tr>
              <tr className={styles.tableRow}>
                <td>Sunday</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2024 Dental Facets. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
