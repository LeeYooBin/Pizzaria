import { PhoneIcon, MailIcon, LocateIcon, ClockIcon } from "lucide-react";

const Contacts = () => (
  <div>
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <PhoneIcon className="h-10 w-10 text-primary" />
        <a className="text-gray-700 text-2xl hover:underline" href="#">
          +1 (234) 567-890
        </a>
      </div>
      <div className="flex items-center gap-4">
        <MailIcon className="h-10 w-10 text-primary" />
        <a className="text-gray-700 text-2xl hover:underline" href="#">
          info@italianpizzeria.com
        </a>
      </div>
      <div className="flex items-center gap-4">
        <LocateIcon className="h-10 w-10 text-primary" />
        <p className="text-gray-700 text-2xl">123 Main St, Anytown USA</p>
      </div>
      <div className="flex items-center gap-4">
        <ClockIcon className="h-10 w-10 text-primary" />
        <p className="text-gray-700 text-2xl">
          Mon-Sat: 11am - 10pm
          <br />
          Sun: 12pm - 9pm
        </p>
      </div>
    </div>
  </div>
);

export default Contacts;
