    import React from 'react'
    import img from './Accet/pics/Store1.jpg';
    function About() {
      return (
    <div className="container mx-auto px-4 md:px-8 py-12 dark:bg-gray-900 dark:text-white">
    <section className="text-center mb-12">
    <h1 className="text-3xl md:text-3xl font-bold mb-4 my-6">About Us</h1>
    <p className="text-base md:text-md">
      Welcome to WatchWorld! We are passionate about watches and dedicated to bringing you the best selection of timepieces.
    </p>
    <p className="mt-4 text-base md:text-md">
      Our mission is to offer high-quality watches at affordable prices and to provide exceptional customer service. Whether you're a seasoned collector or just starting your watch journey, we're here to help you find the perfect watch.
    </p>
    </section>
    <section className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Values</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
            <h3 className="text-lg font-bold mb-2">Customer Satisfaction</h3>
            <p>We put our customers first and strive to exceed their expectations with every interaction.</p>
          </div>
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
            <h3 className="text-lg font-bold mb-2">Quality Products</h3>
            <p>We carefully curate our collection to ensure that every watch meets our high standards of quality.</p>
          </div>
          <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
            <h3 className="text-lg font-bold mb-2">Integrity</h3>
            <p>We operate with honesty and transparency in all our dealings, building trust with our customers.</p>
          </div>
        </div>
      </section>
      <div className="p-4 md:p-8 lg:p-12">
  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Store Location</h2>
  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
    <img src={img} alt="" className="w-full md:w-1/2 lg:w-1/3 object-cover"/>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13604.927912817033!2d74.361304!3d31.517788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905f47cc0f4b9%3A0xfab13a581e03b5a1!2sRafiq%20Sons%20The%20Watch%20Company%20(Deals%20in%20Watches%20%26%20Wall%20Clocks)!5e0!3m2!1sen!2sus!4v1720962802808!5m2!1sen!2sus" 
      width="100%" 
      height="auto" 
      style={{border:0}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
</div>
      )
    }
export default About;


















