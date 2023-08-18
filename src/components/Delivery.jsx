import React from "react";

function Delivery() {
  return (
    <div className="w-full bg-white py-10 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp
"  alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold text-4xl">Get the app</p>
          <h1 className="md:text-3xl sm:text-3xl">
            Limitness convenience on-demand
          </h1>
          <p className="text-justify py-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            iusto debitis doloribus, vel cumque quis voluptatum pariatur aperiam
            dignissimos, commodi mollitia similique, ratione ab? Totam,
            aspernatur maxime esse doloremque tempore obcaecati corporis porro.
            Dolorem odit esse consequatur, voluptates quisquam sint officiis
            accusamus, impedit qui culpa, delectus quas consectetur voluptatibus
            harum.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] p-3 mt-2">Get started</button>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
