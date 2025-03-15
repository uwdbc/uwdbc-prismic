import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const components = {
  heading1: ({ children }) => <h1 className="s-title">{children}</h1>,
};

const CoachingTeam = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="coachPage"
    >
      <h2 className="coachPage-title">
        <PrismicRichText field={slice.primary.title} components={components} />
      </h2>
      <div className="coach-container">
        {slice.primary.coaches.map((item, index) => (
          <div key={index} className="coach-card-horizontal">
            <PrismicNextImage
              field={item.coachimage}
              className="coach-image-horizontal"
            />
            <div className="coach-text">
              <h3 className="coach-name">
                <PrismicRichText field={item.coachname} />
              </h3>
              <p className="coach-role">
                <PrismicRichText field={item.coachbio} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoachingTeam;
