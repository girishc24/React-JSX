import { CircleDollarSign, Lightbulb, Settings, Users } from 'lucide-react';

const services = [
  {
    name: 'Strategy & Consulting',
    description: 'Expert guidance to help you make informed business decisions and achieve your goals.',
    icon: Lightbulb,
  },
  {
    name: 'Technology Solutions',
    description: 'Cutting-edge technical solutions tailored to your specific needs and requirements.',
    icon: Settings,
  },
  {
    name: 'Team Augmentation',
    description: 'Skilled professionals to supplement your team and accelerate project delivery.',
    icon: Users,
  },
  {
    name: 'Cost Optimization',
    description: 'Strategic approaches to reduce costs while maintaining or improving quality.',
    icon: CircleDollarSign,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive range of services designed to help your business grow and thrive in today's competitive landscape.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}