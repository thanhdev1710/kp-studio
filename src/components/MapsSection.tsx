export default function MapsSection() {
  return (
    <section>
      <div className="py-12 px-4 md:px-6">
        <h3 className="fontPlayfairDisplay uppercase text-xl text-gray-400 md:text-3xl text-center font-semibold mb-2">
          KPStudio Maps
        </h3>
        <p className="text-center fontPlayfairDisplay font-medium text-lg">
          140 Đ. Lê Trọng Tấn, Tây Thạnh, Tân Phú <br /> Hồ Chí Minh, Việt Nam
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0679105736444!2d106.6261100758646!3d10.806110789344464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bd5df1e62a7%3A0x46c017eda11fa0e5!2zSFVJVCAtIMSQ4bqhaSBo4buNYyBDw7RuZyBUaMawxqFuZyBUUC5IQ00gKEPGoSBz4bufIGNow61uaCk!5e0!3m2!1svi!2s!4v1742188280587!5m2!1svi!2s"
        width="1920"
        height="800"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-auto md:aspect-[6/2] aspect-video"
      ></iframe>
    </section>
  );
}
