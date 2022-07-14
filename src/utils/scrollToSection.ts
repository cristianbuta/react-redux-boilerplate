export const scrollToSection = (section: string) => {
  const s = document.getElementById(section);

  if (s) {
    window.scrollTo({
      top: window.pageYOffset + s.getBoundingClientRect().top - 135,
      behavior: "smooth",
    });
  }
};

export const SECTIONS: {
  [key: string]: {
    name: string;
    id: string;
  };
} = {
  SECTION_1: {
    name: "SECTION_1",
    id: "SECTION_1",
  },
  SECTION_2: {
    name: "SECTION_2",
    id: "SECTION_2",
  },
  SECTION_3: {
    name: "SECTION_3",
    id: "SECTION_3",
  },
  SECTION_4: {
    name: "SECTION_4",
    id: "ROAD_MAP",
  },
  SECTION_5: {
    name: "SECTION_5",
    id: "SECTION_5",
  },
};
