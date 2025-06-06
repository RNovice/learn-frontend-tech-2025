const About = () => {
  return (
    <main className="container mx-auto p-12">
      <h1>About Us</h1>
      <p className="mb-4">
        Welcome to NextGen, the next generation blog app! We are passionate about sharing knowledge and
        insights on various topics. Our mission is to create a platform where
        everyone can learn, grow, and connect.
      </p>
      <p className="mb-4">
        At NextGen, we believe in empowering individuals through information and fostering a community of curious minds.
        Whether you’re here to explore new ideas or share your own, we are excited to have you on board.
      </p>
      <p className="mb-4">
        Stay tuned for exciting content and feel free to reach out to us with
        any questions or feedback. Thank you for visiting NextGen!
      </p>
      <div className="mt-8">
        <h2>Our Vision</h2>
        <p className="mb-4">
          At NextGen, our vision is to revolutionize the way people access and share information.
          We aim to create a space where creativity and knowledge thrive, enabling individuals to
          make meaningful connections and inspire change.
        </p>
      </div>
      <div className="mt-8">
        <h2>Our Values</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">Innovation: Continuously improving and embracing new ideas.</li>
          <li className="mb-2">Community: Building a supportive and inclusive environment.</li>
          <li className="mb-2">Integrity: Upholding honesty and transparency in everything we do.</li>
          <li className="mb-2">Growth: Encouraging personal and professional development.</li>
        </ul>
      </div>
    </main>
  );
};

export default About;