import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, CircleCheck, MapPinned } from "lucide-react";
import { SectionHead } from "../ui/SectionHead";
import { Button } from "../ui/Button";
import { cx } from "../../lib/cx";
import { fadeLeft, fadeRight, viewportOnce } from "../../lib/motion";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../data/siteConfig";
import { postJSON } from "../../lib/api";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(values) {
    try {
      await postJSON("/contact.php", values);
    } catch {
    }
    setSubmitted(true);
    reset();
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead
          eyebrow="Get in Touch"
          title="Contact Student Affairs"
          description="Questions about events, clubs, or resources. Send a message and the team will follow up within two working days."
        />

        <div className="contact-grid">
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            {submitted && (
              <div className="form-success">
                <CircleCheck size={18} />
                Message sent. The Student Affairs team will reply within two working days.
              </div>
            )}

            <div className="form-row">
              <div className={cx("form-field", errors.name && "form-field-error")}>
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" placeholder="Your name" {...register("name", { required: "Please enter your name" })} />
                <span className="form-error">{errors.name?.message}</span>
              </div>
              <div className={cx("form-field", errors.email && "form-field-error")}>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="yourname@gmail.com"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address" }
                  })}
                />
                <span className="form-error">{errors.email?.message}</span>
              </div>
            </div>

            <div className={cx("form-field", errors.subject && "form-field-error")}>
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="What is this about" {...register("subject", { required: "Please add a subject" })} />
              <span className="form-error">{errors.subject?.message}</span>
            </div>

            <div className={cx("form-field", errors.message && "form-field-error")}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here"
                {...register("message", {
                  required: "Please add a message",
                  minLength: { value: 10, message: "Say a little more, at least 10 characters" }
                })}
              />
              <span className="form-error">{errors.message?.message}</span>
            </div>

            <Button type="submit" variant="primary" className="btn-block" disabled={isSubmitting}>
              {isSubmitting ? "Sending" : "Send Message"}
            </Button>
          </motion.form>

          <motion.div className="contact-info" variants={fadeRight} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <div className="info-row">
              <span className="info-row-icon">
                <MapPin size={19} />
              </span>
              <div>
                <h4>Campus Address</h4>
                <p>{CONTACT_INFO.address}</p>
              </div>
            </div>
            <div className="info-row">
              <span className="info-row-icon">
                <Mail size={19} />
              </span>
              <div>
                <h4>Email</h4>
                <p>{CONTACT_INFO.email}</p>
              </div>
            </div>
            <div className="info-row">
              <span className="info-row-icon">
                <Phone size={19} />
              </span>
              <div>
                <h4>Phone</h4>
                <p>{CONTACT_INFO.phone}</p>
              </div>
            </div>
            <div className="info-row">
              <span className="info-row-icon">
                <Clock size={19} />
              </span>
              <div>
                <h4>Office Hours</h4>
                <p>{CONTACT_INFO.hours}</p>
              </div>
            </div>

            <div className="map-container">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.2535523464353!2d74.32405737469753!3d31.544655445943462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904bb826e8067%3A0xffe46e244880e4a9!2sLahore%20College%20for%20women%20university!5e0!3m2!1sen!2s!4v1785665301948!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="LCWU Campus Location"
              ></iframe>
            </div>

            <div className="social-row">
              {SOCIAL_LINKS.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
