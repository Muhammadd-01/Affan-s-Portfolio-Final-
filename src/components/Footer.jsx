import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Affan. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <GitHub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a href="mailto:affan.work05@gmail.com" className="hover:text-gray-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

