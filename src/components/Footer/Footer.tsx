export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" p-3 mx-auto max-w-screen-xl text-center">
      <p>Copyright &copy; PRIMA TEKNIK LOMBOK {currentYear}</p>
    </footer>
  );
}
