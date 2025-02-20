const ThemeToggle = (props) => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
      <mask id="moon-mask">
        <path fill="#fff" d="M0 0h20v20H0z"></path>
        <circle cx="11" cy="3" r="8" fill="#000"></circle>
      </mask>
      <circle
        cx="10"
        cy="10"
        r="8"
        className="sunMoon"
        mask="url(#moon-mask)"
      ></circle>
      <circle cx="18" cy="10" r="1.5" className="sunRay sunRay1"></circle>
      <circle cx="14" cy="16.928" r="1.5" className="sunRay sunRay2"></circle>
      <circle cx="6" cy="16.928" r="1.5" className="sunRay sunRay3"></circle>
      <circle cx="2" cy="10" r="1.5" className="sunRay sunRay4"></circle>
      <circle cx="6" cy="3.172" r="1.5" className="sunRay sunRay5"></circle>
      <circle cx="14" cy="3.172" r="1.5" className="sunRay sunRay6"></circle>
    </svg>
  );
  
  export default ThemeToggle;