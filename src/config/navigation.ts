export interface NavigationItem {
  label: string;
  href: string;
}

const navigation: NavigationItem[] = [
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "Theatre",
    href: "/musical-theatre",
  }
];

export default navigation;