import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ExecPageSlice} ExecPageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExecPageSlice>} ExecPageProps
 * @param {ExecPageProps}
 */

const components = {
  heading1: ({ children }) => <h1 className="s-title">{children}</h1>,
};

const ExecPage = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="execPage"
    >
      <h2 className="execPage-title">
        <PrismicRichText field={slice.primary.title} components={components} />
      </h2>
      <div className="card-container">
        {slice.primary.execTeam.map((item) => (
          <div className="exec-card">
            <PrismicNextImage
              field={item.execImage}
              className="exec-image"
              alt=""
            />
            <div className="exec-name-role">
              <div className="exec-role">
                <PrismicRichText field={item.execRole} />
              </div>
              <PrismicRichText
                field={item.execName}
                className="exec-name"
                components={components}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExecPage;
