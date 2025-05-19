const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white/90 py-4">
      {/* Horizontal line */}
      <div className="flex justify-center">
        <hr className=" w-72 border-slate-200 " />
      </div>
      {/* Created by and portfolio link */}
      <p className="text-lg pt-4">
        <a
          href="https://www.enriquesuarez.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="underline hover:text-blue-800">Enrique Suárez</span>{" "}
          © 2025
        </a>
      </p>
    </div>
  );
};

export default Footer;
