/**
 * @typedef {import("@prismicio/client").Content.NavbarDataSlice} NavbarDataSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavbarDataSlice>} NavbarDataProps
 * @param {NavbarDataProps}
 */
const NavbarData = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Placeholder component for navbar_data (variation: {slice.variation})
      Slices */}
    </section>
  );
};

export default NavbarData;
