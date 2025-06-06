const Contact = () => {
  return (
    <main className="container mx-auto p-12 font-sans">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">We would love to hear from you! Please fill out the form below to get in touch.</p>
      <form className="max-w-xl">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-medium">Message:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-foreground hover:bg-foreground/90 text-background px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
        <p className="mb-4">You can also contact us via email or follow us on social media:</p>
        <div className="mb-4">
          <p className="text-sm font-medium">Email:</p>
          <a href="mailto:contact@nextgen.com">
            contact@nextgen.com
          </a>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium">Follow us on:</p>
          <div className="flex space-x-4">
            <a className="cursor-pointer">Twitter</a>
            <a className="cursor-pointer">Facebook</a>
            <a className="cursor-pointer">Instagram</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
