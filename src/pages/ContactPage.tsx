
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import GlobalNavbar from '@/components/GlobalNavbar';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.VITE_WEB3FORMS_ACCESS_KEY || 'c45e9500-a616-45cc-98ae-29f7154009c2',
          ...formData,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-turquoise font-syne">
      <GlobalNavbar />
      
      <main className="p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <button
              onClick={() => navigate('/')}
              className="bg-dark-blue text-white border-4 border-black px-4 py-2 mr-4 hover:bg-brut-purple transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Home
            </button>
          </div>

          <div className="bg-lemon-yellow border-4 border-black p-8 md:p-12">
            <h1 className="font-bold text-4xl md:text-6xl text-black mb-8">
              Contact Us
            </h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-bold text-2xl md:text-3xl text-black mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-black mb-6">
                  Have questions about navite? Want to share feedback? We'd love to hear from you!
                </p>
                <div className="space-y-4">
                  <div className="bg-hot-pink border-4 border-black p-4">
                    <h3 className="font-bold text-lg text-black">Email Us</h3>
                    <p className="text-black">hello@navite.com</p>
                  </div>
                  <div className="bg-brut-orange border-4 border-black p-4">
                    <h3 className="font-bold text-lg text-black">Follow Us</h3>
                    <p className="text-black">@navite on social media</p>
                  </div>
                </div>
              </div>

              <div className="bg-brut-violet border-4 border-black p-6">
                {isSubmitted ? (
                  <div className="text-center">
                    <div className="bg-brut-green border-4 border-black p-6 mb-4">
                      <h3 className="font-bold text-2xl text-black mb-2">Message Sent!</h3>
                      <p className="text-black">We'll get back to you soon.</p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-dark-blue text-white border-4 border-black px-6 py-3 font-bold hover:bg-brut-purple transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-bold text-black mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full border-4 border-black p-3  text-black bg-turquoise-darkblue"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-bold text-black mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full border-4 border-black p-3  text-black bg-turquoise-darkblue"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-bold text-black mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full border-4 border-black p-3  text-black bg-turquoise-darkblue"
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-bold text-black mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full border-4 border-black p-3 text-black bg-turquoise-darkblue resize-none"
                        placeholder="Tell us what's on your mind..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full font-bold text-xl py-4 border-4 border-black transition-colors ${
                        isSubmitting 
                          ? 'bg-gray-400 text-gray-600' 
                          : 'bg-hot-pink text-black hover:bg-neon-green'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
