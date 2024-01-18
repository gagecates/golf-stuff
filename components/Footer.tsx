import Image from "next/image";

const menuItems = [
  {
    name: "Dashboard",
    navigateTo: "/dashboard",
  },
  {
    name: "Jobs",
    navigateTo: "/jobs",
  },
];

const Footer = () => {
  return (
    <div className="h-24 max-w-screen-2xl mx-auto flex justify-between items-center px-4">
      <div className="flex items-center">
        <Image src="/images/favicon.ico" alt="Logo" width={30} height={30} />
      </div>
      <div className="text-gray-400">Created by Gage Cates</div>
      <div className="text-gray-400">2024</div>
    </div>
  );
};

export default Footer;
