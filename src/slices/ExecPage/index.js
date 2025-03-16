import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ExecTeamSlice} ExecTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ExecTeamSlice>} ExecTeamProps
 * @param {ExecTeamProps}
 */

const components = {
  heading1: ({ children }) => <h1 className="s-title">{children}</h1>,
};

const ExecTeam = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="execPage"
    >
      <PrismicRichText field={slice.primary.title} components={components} />

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

export default ExecTeam;
