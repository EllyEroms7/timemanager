const Footer = () => {
  return (
    <footer className="text-center mt-5">
      <hr />
      <div className="text-foreground p-4 md:text-[1.1rem]">
        <p className="mb-2">&copy; {new Date().getFullYear()}</p>
        <p>
          Task Manager made by{" "}
          <a
            href="https://x.com/EllyEroms"
            className="border-b-primary border-dashed border-b-1 text-primary"
          >
            Otoijagha Elliot
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
