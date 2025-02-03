import React from "react";

const Contact = () => {
  return (
    <section>
      <div className="text-center text-3xl font-bold py-3">
        <h1>Contact</h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.5989150440846!2d90.39501114059611!3d23.72601297877579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e6474187cf%3A0xb3d3783755659522!2z4Kai4Ka-4KaV4Ka-IOCmruCnh-CmoeCmv-CmleCnh-CmsiDgppXgprLgp4fgppwg4Ka54Ka-4Ka44Kaq4Ka-4Kak4Ka-4Kay!5e0!3m2!1sbn!2sbd!4v1738339012318!5m2!1sbn!2sbd"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container mx-auto py-10">
        <div className="">
          <form
            action="https://formspree.io/f/xqaebpjg"
            method="POST"
            className="flex flex-col items-center gap-3"
          >
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
              className="outline-none border-blue-100 px-3 focus:border-2 focus:border-blue-50 rounded-lg"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message here"
              id=""
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
