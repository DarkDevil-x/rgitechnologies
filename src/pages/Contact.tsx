import { Mail, Phone, MessageSquare } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    { icon: Mail, text: "Email Us", href: "mailto:hello@rgi.com" },
    { icon: Phone, text: "Call Us", href: "tel:+1234567890" },
    { icon: MessageSquare, text: "Live Chat", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Get in Touch</h2>
    <div className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          { icon: Mail, text: "Email Us", href: "mailto:rudraaacreation@gmail.com" },
          { icon: Phone, text: "Call Us", href: "tel:+916387764132" },
          { icon: MessageSquare, text: "Live Chat", href: "https://wa.me/6387764132" }
        ].map((contact, index) => (
          <a 
            key={index}
            href={contact.href} 
            className="group flex flex-col items-center p-6 bg-purple-50 rounded-xl hover:bg-purple-100 transition-all duration-300 hover:scale-105 border border-purple-100"
          >
            <contact.icon className="w-8 h-8 mb-4 text-purple-600 group-hover:animate-bounce" />
            <span className="text-gray-600 group-hover:text-purple-600 transition-colors">{contact.text}</span>
          </a>
        ))}
      </div>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input 
            type="text" 
            id="name"
            placeholder="Name" 
            className="bg-purple-50 border border-purple-200 rounded-lg p-4 focus:outline-none focus:border-purple-600 transition-all duration-300 focus:ring-2 focus:ring-purple-200 text-gray-800"
          />
          <input 
            type="email" 
            id="email"
            placeholder="Email" 
            className="bg-purple-50 border border-purple-200 rounded-lg p-4 focus:outline-none focus:border-purple-600 transition-all duration-300 focus:ring-2 focus:ring-purple-200 text-gray-800"
          />
        </div>
        <textarea 
          id="message"
          placeholder="Message" 
          rows={6}
          className="w-full bg-purple-50 border border-purple-200 rounded-lg p-4 focus:outline-none focus:border-purple-600 transition-all duration-300 focus:ring-2 focus:ring-purple-200 text-gray-800"
        ></textarea>
        <a 
          href="#"
          id="sendButton"
          onClick={() => {
            // Safely get the elements with type assertion and null checks
            const nameInput = document.getElementById('name') as HTMLInputElement | null;
            const emailInput = document.getElementById('email') as HTMLInputElement | null;
            const messageInput = document.getElementById('message') as HTMLTextAreaElement | null;

            // Use optional chaining or fallback values to handle null
            const name = nameInput?.value || '';
            const email = emailInput?.value || '';
            const message = messageInput?.value || '';

            const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.location.href = `mailto:hello@reelcraft.com?subject=${subject}&body=${body}`;
          }}
          className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-lg font-bold hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-200 text-center"
        >
          Send Message
        </a>
      </form>
    </div>
  </div>
</section>
  );
}