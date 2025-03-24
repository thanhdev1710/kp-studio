export default function MapsSection() {
  return (
    <section>
      <div className="py-12 px-4 md:px-6">
        <h3 className="fontPlayfairDisplay uppercase text-xl text-gray-600 md:text-3xl text-center font-semibold mb-2">
          KPStudio Maps
        </h3>
        <p className="text-center fontPlayfairDisplay font-medium text-lg">
          23/14 Khiếu Năng Tĩnh, Phường An Lạc A, Quận Bình Tân
          <br />
          Hồ Chí Minh, Việt Nam
        </p>
      </div>
      <iframe
        title="KPStudio Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7670050897163!2d106.619368975864!3d10.752431889394915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d001bfe8619%3A0x31eeaec48f57bed!2sKP%20studio!5e0!3m2!1svi!2s!4v1742824876167!5m2!1svi!2s"
        width="1920"
        height="800"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-auto md:aspect-[6/2] aspect-video"
      ></iframe>
    </section>
  );
}
