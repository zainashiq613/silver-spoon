import { BiLogoFacebookCircle } from 'react-icons/bi';
import { PiWhatsappLogoLight } from 'react-icons/pi';
import { SlSocialBehance, SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';
import ContactForm from '../../components/contact/ContactForm';

function Contact() {
  const links = [
    {
      link: '',
      icon: <SlSocialLinkedin size={20} />,
      title: 'LinkedIn',
    },
    { link: '', icon: <SlSocialBehance size={20} />, title: 'Behance' },
    { link: '', icon: <PiWhatsappLogoLight size={20} />, title: 'WhatsApp' },
    { link: '', icon: <SlSocialInstagram size={20} />, title: 'Instagram' },
    { link: '', icon: <BiLogoFacebookCircle size={20} />, title: 'Facebook' },
  ];
  return (
    <section className="px-[150px] pt-35 pb-20">
      <div className="mt-6 flex flex-col gap-6">
        <div className="bg-white shadow border rounded-2xl py-5 w-full flex flex-col gap-3 items-center">
          <h1 className="text-4xl text-text-primary font-semibold text-center">
            Have an Awsome Project Idea? <br />
            <span className="text-primary">Let’s Discuss</span>
          </h1>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
