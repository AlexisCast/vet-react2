export const navItems = [
  {
    name: "hh:mm:ss",
    type: "string",
  },
  {
    name: "Welcome User",
    type: "string",
  },
  {
    name: "Home",
    type: "NavLink",
    to: "/",
    end: true,
  },
  {
    name: "Owners",
    subItems: [
      { name: "All", type: "Link", to: "/owners" },
      { name: "New", type: "Link", to: "/owners/new" },
      { name: "Deleted", type: "Link", to: "/owners?state=false" },
    ],
  },
  {
    name: "Patients",
    subItems: [
      { name: "All", type: "Link", to: "/patients" },
      { name: "New", type: "Link", to: "/patients/new" },
      { name: "Deleted", type: "Link", to: "/patients?state=false" },
    ],
  },
  {
    name: "Records",
    subItems: [
      { name: "All", type: "Link", to: "/records" },
      { name: "New", type: "Link", to: "/records/new" },
      { name: "Deleted", type: "Link", to: "/records?state=false" },
    ],
  },
  {
    name: "Species",
    subItems: [
      { name: "All", type: "Link", to: "/species" },
      { name: "New", type: "Link", to: "/species/new" },
      { name: "Deleted", type: "Link", to: "/records?state=false" },
    ],
  },
];