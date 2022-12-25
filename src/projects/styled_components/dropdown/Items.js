const setMenuItem = (title, url) => ({ title: title, url: url });

// export const menuItems = [
//   setMenuItem("Home", "/"),
//   setMenuItem("Services", "/services"),
//   setMenuItem("About", "/about"),
// ];

export const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "/services",
    submenu: [
      {
        title: "web design",
        url: "web-design",
      },
      {
        title: "web development",
        url: "web-dev",
      },
      {
        title: "SEO",
        url: "seo",
      },
    ],
  },
  {
    title: "About",
    url: "/about",
  },
];
