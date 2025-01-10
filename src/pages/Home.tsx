import { ArrowRight, Layers, CheckCircle2, Zap, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    name: 'Brand Strategy',
    description: 'Develop a powerful brand identity that resonates with your target audience.',
    icon: Layers,
  },
  {
    name: 'Digital Excellence',
    description: 'Create stunning digital experiences that captivate and convert.',
    icon: Zap,
  },
  {
    name: 'Proven Results',
    description: 'Track record of successful brand transformations and growth stories.',
    icon: CheckCircle2,
  },
];

const gallery = [
  {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Strategic Planning',
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Team Collaboration',
  },
  {
    url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Creative Design',
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    title: 'Client Success',
  },
];

const featuredProjects = [
  {
    title: 'Tech Innovators Rebrand',
    description: 'Complete brand transformation for a leading tech company',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Branding',
  },
  {
    title: 'E-commerce Excellence',
    description: 'Digital marketplace redesign and optimization',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    category: 'Web Design',
  },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-32 lg:px-8">
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
          </div>
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Transform Your Brand's Digital Presence
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We help ambitious businesses like yours generate more profits by building awareness, 
                driving web traffic, connecting with customers, and growing overall sales.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/contact"
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                >
                  Get started
                </Link>
                <Link
                  to="/services"
                  className="group text-sm font-semibold text-white flex items-center gap-1"
                >
                  Learn more <ArrowRight className="inline-block group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to grow your brand
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col items-start">
                  <div className="rounded-lg bg-blue-600/10 p-2 ring-1 ring-inset ring-blue-600/20">
                    <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 font-semibold text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Our Work Culture</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Where creativity meets excellence
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {gallery.map((item, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.url}
                  alt={item.title}
                  className="aspect-[16/9] w-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Featured Projects</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Latest Success Stories
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <div key={index} className="flex flex-col overflow-hidden rounded-2xl bg-gray-50">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-600">{project.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/projects"
                      className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      View Project <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
            >
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link to="/about" className="text-gray-400 hover:text-gray-300">
              About
            </Link>
            <Link to="/services" className="text-gray-400 hover:text-gray-300">
              Services
            </Link>
            <Link to="/projects" className="text-gray-400 hover:text-gray-300">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-gray-300">
              Contact
            </Link>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} BrandBrowd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}