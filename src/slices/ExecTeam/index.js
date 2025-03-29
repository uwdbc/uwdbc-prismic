import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ExecPageSlice} ExecPageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExecPageSlice>} ExecPageProps
 * @param {ExecPageProps}
 */

const components = {
  heading1: ({ children }) => <h1 className="s-title">{children}</h1>,
  paragraph:({children}) => <p className="exec-role">{children}</p>,
  heading5: ({children}) => <h5 className="exec-name">{children}</h5>
};

const ExecPage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="execPage"
      id={slice.primary.uid.toLowerCase()}
    >
      <PrismicRichText
        field={slice.primary.title}
        components={{
          heading2: ({ children }) => <h2>{children}</h2>,
        }}
      />

      <div className="card-container">
        {slice.primary.execTeam.map((item) => (
          <div className="exec-card">
            <PrismicNextImage
              field={item.execImage}
              className="exec-image"
              alt=""
            />
            
            <div className="exec-name-role">
              <PrismicRichText field={item.execRole} components={components}/>
              <PrismicRichText field={item.execName} components={components}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExecPage;
