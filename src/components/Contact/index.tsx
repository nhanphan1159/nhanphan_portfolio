import { motion } from "framer-motion";

import { CONTACT_INFO } from "@src/constants/contact";
import useContactForm from "@src/hooks/useContactForm";

export default function Contact() {
  const { formData, handleChange, handleSubmit, isSubmitting, submitStatus } =
    useContactForm();

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-center"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-12 text-lg"
        >
          Have a project in mind? Let's collaborate and create something amazing
          together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {CONTACT_INFO.map((info) => {
            const isExternal = Boolean(info.external);
            const key = info.href ?? info.label;

            return (
              <motion.a
                key={key}
                href={info.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                whileHover={{ y: -5 }}
                className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors text-center group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">
                  {info.icon}
                </div>
                <h3 className="font-semibold mb-2">{info.label}</h3>
                <p className="text-muted-foreground text-sm">{info.value}</p>
              </motion.a>
            );
          })}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-lg border border-border bg-muted/30"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.02 }}>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
                aria-label="Your name"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }}>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                placeholder="your@email.com"
                aria-label="Your email"
              />
            </motion.div>
          </div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
              placeholder="Your message..."
              aria-label="Your message"
            />
          </motion.div>

          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={
                submitStatus === "success"
                  ? "p-4 rounded-lg bg-green-500/10 border border-green-500/50 text-green-500"
                  : "p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-500"
              }
              role="status"
              aria-live="polite"
            >
              {submitStatus === "success" ? (
                <>✅ Message sent successfully! I'll get back to you soon.</>
              ) : (
                <>
                  ❌ Failed to send message. Please try again or email me
                  directly.
                </>
              )}
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
