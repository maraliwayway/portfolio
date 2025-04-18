// src/constants/socialLinks.js
export const socialLinks = [
    {
      text: "LinkedIn",
      icon: "/icons/linkedin.png",
      href: "https://www.linkedin.com/in/maraliwayway/",
      ariaLabel: "Visit Mara's LinkedIn profile",
    },
    {
      text: "GitHub",
      icon: "/icons/github.png",
      href: "https://github.com/maraliwayway",
      ariaLabel: "Visit Mara's GitHub profile",
    },
    {
      text: "Email",
      icon: "/icons/email.png",
      onClick: () => {
        navigator.clipboard.writeText("mld18@sfu.ca")
          .then(() => alert("Email copied to clipboard!"))
          .catch((err) => console.error("Failed to copy: ", err));
      },
      ariaLabel: "Copy Mara's email to clipboard",
    },
  ];