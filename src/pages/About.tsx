export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Founded in 2024, YourBrand has been at the forefront of innovation and excellence.
            We believe in creating meaningful solutions that make a difference.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col">
              <div className="mb-8">
                <div className="rounded-2xl bg-gray-50 p-8">
                  <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
                  <p className="mt-4 text-base text-gray-600">
                    To deliver exceptional value through innovative solutions while maintaining
                    the highest standards of quality and customer satisfaction.
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-2xl bg-gray-50 p-8">
                  <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
                  <ul className="mt-4 space-y-2 text-base text-gray-600">
                    <li>• Innovation in everything we do</li>
                    <li>• Commitment to excellence</li>
                    <li>• Customer-first approach</li>
                    <li>• Sustainable practices</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                className="rounded-2xl object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}