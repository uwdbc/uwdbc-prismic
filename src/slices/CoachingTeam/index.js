import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const components = {
  heading1: ({ children }) => <h1 className="s-title">{children}</h1>,
  heading3: ({children}) => <h3 className="coach-name">{children}</h3>,
  paragraph: ({children}) => <p className="coach-role">{children}</p>,
  heading2: ({ children }) => <h2 style={{fontWeight: 600}}>{children}</h2>,
};

const CoachingTeam = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="coachPage"
      id={slice.primary.uid.toLowerCase()}
    >
      <PrismicRichText
        field={slice.primary.title}
        components={components}
      />

      <div className="coach-container">
        {slice.primary.coaches.map((item, index) => (
          <div key={index} className="coach-card-horizontal">
              <PrismicNextImage
                field={item.coachimage}
                className="coach-image-horizontal"
                alt=""
              />
            <div className="coach-text">
              <PrismicRichText field={item.coachname} components={components}/>
              <PrismicRichText field={item.coachbio} components={components}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoachingTeam;
