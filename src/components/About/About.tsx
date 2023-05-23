export default function About() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Prima Teknik Lombok
          </h2>
          <p className="mb-4">
            Merupakan sebuah perusahaan yang bergerak sebagai penyedia jasa
            perbaikan, rental, jual beli, perawatan & instalasi genset untuk
            wilayah Lombok, Sumbawa, dan Bima yang berkualitas dan telah
            terpercaya. Kami memiliki Mekanik yang sangat berpengalaman dan
            telah menangani ratusan unit Genset dari berbagai troubleshoot
            genset yang pernah di selesaikan oleh mekanik kami.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://drive.google.com/uc?export=view&id=1EwJ_qiCMI1L7JtKHE0VUngFOGCm7Z-Qe"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://drive.google.com/uc?export=view&id=1IevzvMNJffyaU_27wS_fY3Li1M2Ln3pi"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
