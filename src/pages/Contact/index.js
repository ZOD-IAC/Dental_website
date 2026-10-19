import { EmailAppointment } from "@/components/redesign/Enhancements";
import { useState } from "react";
import Seo from "@/components/redesign/Seo";
import {
  PageIntro,
  phone,
  whatsapp,
  maps,
  Arrow,
} from "@/components/redesign/Clinic";
export default function Contact() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("Consultation");
  const location = "Gurugram · Sector 56";
  function request(e) {
    e.preventDefault();
    const message =
      "Hello Dental Facets, my name is " +
      name.trim() +
      ". I would like to request a " +
      reason.toLowerCase() +
      " at " +
      location +
      ". Please let me know the available appointment times.";
    window.open(
      "https://wa.me/918447057806?text=" + encodeURIComponent(message),
      "_blank",
      "noopener,noreferrer",
    );
  }
  return (
    <>
      <Seo
        title="Contact & Appointments | Dental Facets, Sector 56"
        description="Call +91 84470 57806 or request a Dental Facets appointment on WhatsApp. Find our Gurugram address, clinic hours and Delhi consultation location."
        path="/Contact"
      />
      <PageIntro
        label="LET’S GET YOU SETTLED IN"
        title={
          <>
            Your first step.
            <br />
            <em>We’re here to help.</em>
          </>
        }
      >
        Call, message, email a request, or find your way to the clinic. Our team
        will help you plan your visit.
      </PageIntro>
      <section className="wrap contact-grid">
        <div>
          <div className="contact-block">
            <span className="eyebrow">CALL OR MESSAGE</span>
            <a className="contact-phone" href={"tel:" + phone}>
              +91 84470 57806
            </a>
            <a href="mailto:dentalfacets2016@gmail.com">
              dentalfacets2016@gmail.com
            </a>
            <a
              className="text-link"
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp <Arrow />
            </a>
          </div>
          <div className="contact-block">
            <span className="eyebrow">GURUGRAM · MAIN CLINIC</span>
            <h2>Sector 56</h2>
            <p>
              560-P, behind Jalvayu Towers,
              <br />
              Block B, Sector 56, Gurugram,
              <br />
              Haryana 122001
            </p>
            <p>
              Monday–Saturday · 10:00 am–7:00 pm
              <br />
              Sunday · Closed
            </p>
            <a
              className="text-link"
              href={maps}
              target="_blank"
              rel="noopener noreferrer"
            >
              Directions to clinic <Arrow />
            </a>
          </div>
          <div className="contact-block">
            <span className="eyebrow">NEW DELHI · CONSULTATIONS</span>
            <h2>Sehgal Neo Hospital</h2>
            <p>
              B-362, 363, 364, Outer Ring Road,
              <br />
              near ICICI Bank, Meera Bagh,
              <br />
              Paschim Vihar, New Delhi 110063
            </p>
            <p>Please call to confirm consultation availability.</p>
            <a
              className="text-link"
              href={
                "https://www.google.com/maps/search/?api=1&query=" +
                encodeURIComponent(
                  "Sehgal Neo Hospital Paschim Vihar New Delhi",
                )
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              View location <Arrow />
            </a>
          </div>
        </div>
        <div className="appointment-panel" id="appointment">
          <span className="eyebrow">LET’S FIND A TIME</span>
          <h2>
            Request <em>on WhatsApp.</em>
          </h2>
          <p>
            Send your request directly to our team on WhatsApp. We’ll confirm
            the date and time with you.
          </p>
          <form onSubmit={request}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              minLength={2}
              maxLength={80}
              pattern=".*\S.*"
              placeholder="Full name"
            />
            <label htmlFor="reason">What brings you in?</label>
            <select
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            >
              {[
                "Consultation",
                "Routine check-up",
                "Tooth concern",
                "Braces or aligners consultation",
                "Cosmetic dentistry consultation",
                "Follow-up",
              ].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
            <div className="location-note">
              <span className="eyebrow">APPOINTMENT LOCATION</span>
              <strong>Dental Facets · Sector 56, Gurugram</strong>
              <p>560-P, behind Jalvayu Towers</p>
            </div>
            <button className="button" type="submit">
              Continue on WhatsApp <Arrow />
            </button>
            <p className="form-note">
              This opens WhatsApp with a draft message. You choose whether to
              send it. A request is not a confirmed appointment.
            </p>
          </form>
        </div>
      </section>
      <EmailAppointment />
    </>
  );
}
