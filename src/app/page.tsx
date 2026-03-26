"use client";

import Image from "next/image";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="pageFrame">
      <Navbar />
      <main className="hero">
        <h1 className="heroText">
          MVP Development
          <br />
          Services - From Idea to
          <br />
          Market Success
        </h1>
        <div className="heroBottom">
          <p className="heroDescription">
            Our lean, AI-powered, and agile-driven process ensures your product
            is useful, feasible, scalable, and investment-ready from the start.
          </p>
          <button className="button">Book a free consultation</button>
        </div>
      </main>

      <h1 className="hero_2">
        We&apos;ve turned some of the smallest
        <br />
        brands into household names.
      </h1>

      <div className="types">
        <h1 className="types_of_mvp_main">
          Types of MVP
          <br />
          development services
        </h1>
        <p className="types_of_mvp_description">
          Mono provides multiple MVP services designed to validate
          <br />
          ideas, reduce risks, accelerate time-to-market, and build
          <br />
          scalable product foundations for long-term growth.
        </p>
      </div>

      <Image
        src="/hero_2img.png"
        alt=""
        width={1347}
        height={1109}
        className="hero02"
      />
      <Image
        src="/types_mvp.png"
        className="types_mvp_img"
        width={1344}
        height={606}
        alt=""
      />

      <div className="heroimg">
        <Image src="/hero.png" alt="" width={1343} height={320} />
      </div>

      <div className="section">
        <Image
          src="/Section.png"
          alt=""
          width={1200}
          height={245}
          className="section_img"
        />
      </div>

      <div className="b_mvp">
        <h1 className="b_mvp_m">
          Benefits of MVP <br />
          development for startups
        </h1>
        <div className="b_mvp_grid">
          <div className="b_mvp_card">
            <h3 className="b_mvp_1">Saves time and resources</h3>
            <p className="b_mvp_desc">
              You don&apos;t need to build a full-fledged app to get to market.
              Minimum viable product focuses on the core functionality, which
              reduces development time and minimizes costs.
            </p>
          </div>
          <div className="b_mvp_card">
            <h3 className="b_mvp_2">Checking market demand</h3>
            <p className="b_mvp_desc2">
              MVP development helps determine whether the target audience is
              interested in the product. Startups test whether users are
              willing to pay for a solution to their problem. This reduces the
              risk of failure and allows entrepreneurs to easily pivot if
              necessary.
            </p>
          </div>
          <div className="b_mvp_card">
            <h3 className="b_mvp_3">Early market entry</h3>
            <p className="b_mvp_desc3">
              Launching an MVP allows you to enter a niche before your
              competitors do. The startup will build up a user base and develop
              audience loyalty.
            </p>
          </div>
          <div className="b_mvp_card">
            <h3 className="b_mvp_4">Attracting investment</h3>
            <p className="b_mvp_desc4">
              Presenting a working MVP to investors and demonstrating that the
              idea has moved beyond the concept level increases investor
              confidence and the likelihood of funding.
            </p>
          </div>
        </div>
      </div>
      <div className="pricingSection">
        <h1 className="cost">
          MVP development <br />
          services cost
        </h1>
        <div className="price-tog">
          <div className="pricingHeader">
            <h3 className="price">The price includes:</h3>
            <h3 className="numbers">$22,000</h3>
          </div>
          <div className="pricingListWrap">

            <Image
              src="/image1.png"
              alt=""
              width={601}
              height={460}
              className="pricingChecks"
            />
          </div>
        </div>
      </div>
      <section className="stats">
        <div className="statCard founders">
          <h3 className="statLabel">
            Founder&apos;s we&apos;ve
            <br />
            worked with
          </h3>
          <h1 className="h1founders">300+</h1>
        </div>

        <div className="statCard globalusers">
          <h3 className="statLabel">
            Global users
            <br />
            reached
          </h3>
          <h1 className="globalusers1">1.2M</h1>
        </div>
        <div className="statCard raised">
          <h3 className="raised3">
            Rounded
            <br />
            raised
          </h3>
          <h1 className="raised1">$100M+</h1>
        </div>

        <h1 className="valuemea">
          Our value is measured through
          <br />
          the real-world impact of our
          <br />
          clients.
        </h1>

        <div className="statCard countries">
          <h3 className="statLabel">
            Countries
            <br />
            reached
          </h3>
          <h1 className="countries1">12+</h1>
        </div>

        <div className="statCard products">
          <h3 className="statLabel">
            Products
            <br />
            shipped
          </h3>
          <h1 className="products1">210</h1>
        </div>

        <div className="statCard valuation">
          <h3 className="statLabel">
            Estimated
            <br />
            valuation total
          </h3>
          <h1 className="valuation1">$20B</h1>
        </div>
      </section>
      <section className="form">
        <h1 className="formTitle">
          Ready to begin your journey
          <br />
          to MVP with us?
        </h1>
        <h3 className="formSubtitle">
          Contact us and get a free project estimation in 48 hours.
        </h3>

        <form className="formFields">
          <div className="formRow">
            <label className="formField">
              <span>Name</span>
              <input type="text" aria-label="Name" />
            </label>
            <label className="formField">
              <span>Phone number</span>
              <input type="tel" aria-label="Phone number" />
            </label>
            <label className="formField">
              <span>E-mail</span>
              <input type="email" aria-label="E-mail" />
            </label>
          </div>

          <label className="formField formFieldWide">
            <span>Project details</span>
            <textarea aria-label="Project details" rows={1} />
          </label>

          <button type="submit" className="formButton">
            Let&apos;s go!
          </button>
        </form>
      </section>
      <div className="testimonial">
        <Image src="/testimonial.png" width={1440} height={658} alt=""></Image>

      </div>
      <div className="faqs">
        <Image src="/faq.png" alt={""} width={1349} height={1005}></Image>

      </div>
      <footer className="footerSection">
        <div className="footerTopLine" />

        <div className="footerLeft">
          <p className="footerLegal">
            © 2025 AND MONO STUDIO, ALL RIGHTS RESERVED
          </p>
          <p className="footerLocation">
            REMOTE OPERATING LOCATION:
            <br />
            JAIPUR INDIA, NEW YORK, USA
          </p>
          <h2 className="footerBrand">
            <Image src="/mono-footer.png" alt="" width={163.52000427246094} height={28}></Image>
          </h2>
        </div>

        <div className="footerRight">
          <div className="footerGroup">
            <p className="footerGroupLabel">OFFICE</p>
            <div className="footerPills">
              <span className="footerPill">ALL WORK</span>
              <span className="footerPill">CONTACT</span>
              <span className="footerPill">PRIVACY POLICY</span>
            </div>
          </div>

          <div className="footerGroup footerGroupConnect">
            <p className="footerGroupLabel">CONNECT</p>
            <div className="footerPills">
              <span className="footerPill">OFFICE@MONO.STUDIO</span>
              <span className="footerPill">INSTAGRAM</span>
              <span className="footerPill">TIKTOK</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
