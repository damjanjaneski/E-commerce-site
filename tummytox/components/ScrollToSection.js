export default function ScrollToSection(section) {
  const scrollTo = () => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };
}
