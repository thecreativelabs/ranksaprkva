import React from "react";
import Container from "@/components/Container";

const data = {
  heading: "OUR STORY",
  subheading: "The evolution of search excellence.",
  description:
    "Victorious has been focused on the power of search for over a decade.",
};

const Story = () => {
  return (
    <Container>
      <div className="mt-20">
        <h1 className="text-[#C42A1C] tracking-widest leading-6 md:text-md lg:text-md mb-6 text-sm font-semibold ">
          {data.heading}
        </h1>
        <div className="h-auto">
          <p className="md:text-5xl h-auto leading-10 tracking-wide font-medium text-3xl font-tertiary mt-4 text-[#3B0D17] w-auto md:w-[70%]">
            {data.subheading}
          </p>
          <p className="mt-8 tracking-wider text-[#3B0D17] leading-6 font-semibold text-sm md:text-xl w-auto md:w-[70%]">
            {data.description}
          </p>
          <p className="mt-8 tracking-wider text-md md:text-md w-auto md:w-[70%]">
            {/* {data.description} */}
            Victorious began in the early 2010s as one of the many fresh-faced
            agencies entering the new inbound marketing scene. We spent the next
            several years building a full-service digital marketing agency with
            SEO as a supportive pillar to a larger set of services. But in 2016,
            we made a hard pivot to focus on SEO alone. Why SEO? As a
            full-service agency, we had glimpsed the unrealized potential of
            organic search. Shifting our focus to innovations in search
            optimization offered an opportunity to rewrite the digital marketing
            narrative. By keeping laser-focused on mastering one craft, we could
            channel all our resources into creating SEO results that would
            transcend the scattershot efforts of general agencies. It was a
            defining moment — a choice between sticking to a well-trodden path
            or daring to build something exceptional, regardless of the risks.
            We chose the latter. SEO-Only Success In 2018, only two years after
            becoming an SEO-only agency, we garnered two global SEO Agency of
            the Year awards and one US SEO Agency of the Year win. Time and
            again, panels of industry experts determined that the results we
            generated for our customers were truly world-class. We built on that
            momentum to innovate and integrate data-backed SEO services into a
            strategic methodology with the power to generate compounding success
            for our customers. The framework we created for our services
            redefined the possibilities for search-driven marketing gains. As a
            result, in 2022, industry experts at the US Search Awards recognized
            Victorious as the Best Large Agency of the Year — the first time an
            SEO-only agency had captured the title. Then, in 2023, we brought
            home two more Best SEO Agency awards, making us the most highly
            awarded search agency in the industry. Defining a Search-First
            Strategy These accolades fuel our drive to help our customers
            achieve even more outstanding results in search. By putting search
            first in our customers’ marketing strategies, we’ve generated
            undeniable results across various verticals and in every market to
            help businesses thrive despite their unique challenges, a global
            pandemic, and a changing economic landscape. But we’re not done yet.
            The SEO landscape is different today than it was a decade ago.
            Keeping search at the center of it all, we’re still expanding our
            marketing services to support our customers and capture new search
            potential. What powers our relentless drive to do better and be
            better? Our values. They’re the foundation of our success and the
            never-changing reminder of who we are and why we’re here. Maybe
            they’ll be the foundation of your success, too.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Story;
