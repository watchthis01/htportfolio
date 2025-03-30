import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)
  const form = useRef()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Send email using EmailJS
    emailjs.send(
      'service_k3pxzg1', // Replace with your EmailJS service ID
      'template_ex0wc1p', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      },
      'rEQIjIeP0nhBaTHl1' // Replace with your EmailJS user ID
    )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text)
        setIsSubmitting(false)
        setSubmitMessage({
          type: 'success',
          text: 'Your message has been sent successfully! I will get back to you soon.'
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        
        // Clear message after 5 seconds
        setTimeout(() => {
          setSubmitMessage(null)
        }, 5000)
      })
      .catch((error) => {
        console.error('Failed to send email:', error)
        setIsSubmitting(false)
        setSubmitMessage({
          type: 'error',
          text: 'Failed to send your message. Please try again later.'
        })
        
        // Clear error message after 5 seconds
        setTimeout(() => {
          setSubmitMessage(null)
        }, 5000)
      })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'huuthang240201@gmail.com',
      link: 'mailto:huuthang240201@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '0777261578',
      link: 'tel:+0777261578'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Ho Chi Minh City, Vietnam',
      link: 'https://maps.google.com/?q=Ho+Chi+Minh+City'
    }
  ]

  return (
    <section id="contact" className="section-padding container-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-secondary">Contact</span> Me
          </h2>
          <p className="text-light max-w-2xl mx-auto">
            Feel free to reach out to me for any questions or opportunities. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="bg-dark p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-secondary text-3xl mb-4 flex justify-center">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 select-none">{info.title}</h3>
              <a 
                href={info.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light hover:text-secondary transition-colors duration-300"
              >
                {info.content}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-dark p-8 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>
          
          {submitMessage && (
            <div className={`p-4 mb-6 rounded-md ${submitMessage.type === 'success' ? 'bg-green-900 text-green-200' : 'bg-red-900 text-red-200'}`}>
              {submitMessage.text}
            </div>
          )}
          
          <form ref={form} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full p-3 bg-primary border border-gray-700 rounded-md focus:outline-none focus:border-secondary transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="reply_to"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full p-3 bg-primary border border-gray-700 rounded-md focus:outline-none focus:border-secondary transition-colors duration-300"
                />

              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
                className="w-full p-3 bg-primary border border-gray-700 rounded-md focus:outline-none focus:border-secondary transition-colors duration-300"
              />
              <input type="hidden" name="to_name" value="Portfolio Owner" />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                rows="5"
                className="w-full p-3 bg-primary border border-gray-700 rounded-md focus:outline-none focus:border-secondary transition-colors duration-300 resize-none"
              ></textarea>
            </div>
            
            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary px-8 py-3 disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact